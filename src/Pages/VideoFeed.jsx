import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

const streamHostname = "127.0.0.1:8080";

export const VideoFeed = () => {
    const videoRef = useRef();

    useEffect(() => {
        const hls = new Hls();
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
            console.log("video and hls.js are now bound together!");
        });
        hls.on(Hls.Events.MANIFEST_PARSED, (_event, data) => {
            console.log(`manifest loaded, found ${data.levels.length} quality levels`);
        });
        hls.loadSource(`http://${streamHostname}/stream.m3u8`);
        hls.attachMedia(videoRef.current);
    }, []);

    return (
        <div>
            <p>HLS supported: {Hls.isSupported() ? 'true' : 'false'}</p>
            <video ref={videoRef} width="100%" controls></video>
        </div>
    );
}
