import React, { useState, useEffect } from "react";

const endpoint = "INSERT ENDPOINT HERE";

export const VideoFeed = () => {
    const [imgSrc, setImgSrc] = useState(endpoint);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("getting new image");
            setImgSrc(`${endpoint}?${Date.now()}`)
        }, 500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <img src={imgSrc} width={500}/>
    );
}
