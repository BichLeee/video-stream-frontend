"use client";

import React from "react";
import Image, { ImageProps } from "next/image";

import s from "./imageWrapper.module.scss";

type ImageWrapperProps = {
    src: string;
    alt: string;
    style?: React.CSSProperties;
    className?: string;
    objectFit?: React.CSSProperties["objectFit"];
    width?: React.CSSProperties["width"] | null;
    height?: React.CSSProperties["height"] | null;
    sizes?: ImageProps | null;
    ratio?: React.CSSProperties["aspectRatio"] | null;
};

export const ImageWrapper = ({
    src = "",
    alt = "",
    style = {},
    objectFit = "cover",
    width = null,
    height = null,
    sizes = null,
    ratio = null,
    ...props
}: ImageWrapperProps) => {
    const inline = { ...style };
    if (width) inline.width = width;
    if (height) inline.height = height;
    if (ratio) inline.aspectRatio = ratio;

    return (
        <div className={s.container} style={inline}>
            <Image
                src={src}
                alt={alt}
                style={{ objectFit: objectFit }}
                fill
                {...sizes}
                {...props}
            />
        </div>
    );
};
