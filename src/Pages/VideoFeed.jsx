import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Alert, Box, Button, TextField } from "@mui/material";

export const VideoFeed = () => {
    const videoRef = useRef();
    const streamHostnameInputRef = useRef();
    const [activeStreamHostname, setActiveStreamHostname] = useState("127.0.0.1:8080");

    const hlsSupported = Hls.isSupported();

    useEffect(() => {
        if (!hlsSupported) {
            return () => {};
        } else {
            const hls = new Hls();
            hls.loadSource(`http://${activeStreamHostname}/stream.m3u8`);
            hls.attachMedia(videoRef.current);

            // autoplay
            videoRef.current.play();

            // TODO error handling

            return () => {
                hls.destroy();
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
                        defaultValue={activeStreamHostname}
                    />
                    <Button
                        onClick={() => setActiveStreamHostname(streamHostnameInputRef.current.value)}
                        variant="contained"
                    >Reload stream</Button>
                </Box>
            ) : (
                <Alert severity="error">HLS is not supported in your browser</Alert>
            )}
            <video ref={videoRef} width="100%" controls></video>
        </div>
    );
}
