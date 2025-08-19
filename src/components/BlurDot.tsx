import React from "react";

const BlurryDot = ({
    size = 200,
    color = "bg-blue-500",
    opacity = "opacity-40",
    blur = "blur-[120px]",
    position = "top-1/4 left-1/3"
}) => {
    return (
        <div
            className={`absolute rounded-full ${color} ${opacity} ${blur} ${position}`}
            style={{ width: size, height: size }}
        ></div>
    );
};

export default BlurryDot;
