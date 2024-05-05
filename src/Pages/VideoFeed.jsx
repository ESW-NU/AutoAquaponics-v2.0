import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Alert, Box, Button, TextField } from "@mui/material";
import { toast } from 'react-toastify';

export const VideoFeed = () => {
    const videoRef = useRef();
    const streamHostnameInputRef = useRef();
    // the below state is an object so that, even if the value remains the same,
    // if the user presses reload stream it will actually rerun the Effect
    const [activeStreamHostname, setActiveStreamHostname] = useState({ value: "127.0.0.1:8080" });
    const [measuredLatency, setMeasuredLatency] = useState(0);

    const hlsSupported = Hls.isSupported();

    useEffect(() => {
        if (!hlsSupported) {
            return () => {};
        } else {
            const hls = new Hls({
                debug: false,
                liveSyncDurationCount: 1, // try to be about 1 segment away from the newest segment
                liveMaxLatencyDurationCount: 5, // don't be more than 5 segments away from newest
                maxLiveSyncPlaybackRate: 1.5, // allow speedup of up to 1.5x to catch up to live
            });

            hls.on(Hls.Events.MANIFEST_LOADED, (_event, _data) => {
                toast.info(`Loaded video from ${activeStreamHostname.value}`);
            });
            hls.on(Hls.Events.ERROR, (_event, data) => {
                switch (data.details) {
                    case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:
                        toast.error("Unable to load manifest (incorrect stream source hostname?)");
                        break;
                    case Hls.ErrorDetails.BUFFER_STALLED_ERROR:
                        toast.warning("Buffer stalled.");
                        break;
                    default:
                        console.log(data);
                        toast.error("Encountered an error (see console)");
                }
            });

            // load and and attach video
            hls.loadSource(`http://${activeStreamHostname.value}/stream.m3u8`);
            hls.attachMedia(videoRef.current);

            // initialize latency measurement
            const latencyMeasurementIntervalId = setInterval(() => {
                setMeasuredLatency(hls.latency);
            }, 100);

            // autoplay
            videoRef.current.play().catch(() => { /* do nothing */ });

            return () => {
                hls.destroy();
                clearInterval(latencyMeasurementIntervalId);
            };
        }
    }, [activeStreamHostname]);

    return (
        <div>
            {hlsSupported ? (
                <Box>
                    <TextField
                        id="stream-hostname"
                        label="stream hostname"
                        inputRef={streamHostnameInputRef}
                        defaultValue={activeStreamHostname.value}
                    />
                    <Button
                        onClick={() => setActiveStreamHostname({ value: streamHostnameInputRef.current.value })}
                        variant="contained"
                    >Reload stream</Button>
                </Box>
            ) : (
                <Alert severity="error">HLS is not supported in your browser</Alert>
            )}
            <video ref={videoRef} width="100%" controls></video>
            latency: {measuredLatency}
        </div>
    );
}
