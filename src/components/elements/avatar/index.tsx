"use client";

import React from "react";
import { Avatar as AntAvatar } from "antd";

import { getAbbreviations } from "utils/helper";
import AvatarDisabledPNG from "@/assets/images/defaultVideoThumbnail.avif";
import s from "./avatar.module.scss";

type AvatarProps = {
    name?: string | null;
    size?: number;
    disabled?: boolean;
    src?: string | null;
    style?: React.CSSProperties;
};

export const Avatar = ({
    name = null,
    size = 36,
    disabled = false,
    src = null,
    style = {},
    ...props
}: AvatarProps) => {
    const abbreviations = getAbbreviations(name);

    return (
        <div style={{ display: "flex" }}>
            <AntAvatar
                size={size}
                icon={
                    abbreviations ? (
                        <div
                            style={{ fontSize: size / 3 }}
                            className={s.abbreviationsText}
                        >
                            {abbreviations}
                        </div>
                    ) : (
                        <svg
                            style={{ padding: 4 }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 260 194"
                        >
                            <path
                                fill="#19c0ff"
                                d="M456.77,267.16c5.43,23.31,11.09,43.95,16.32,68.35l-2.47-76.44Z"
                                transform="translate(-300 -160)"
                            />
                            <path
                                fill="#19c0ff"
                                d="M460.78,221.29l-3-57.17c-77,78.88-153,185-153,185,113-80,251.6-141.82,251.6-141.82-143.54,55.19-169.93,70.19-169.93,70.19,43.21-60.53,56.79-75.15,56.79-75.15s1.59,13.2,5.46,36.35c0,0,80.27-31,104-39.77C552.65,198.89,463,220.91,460.78,221.29Z"
                                transform="translate(-300 -160)"
                            />
                        </svg>
                    )
                }
                src={disabled ? AvatarDisabledPNG : src}
                style={{
                    ...style,
                    border: "none !important",
                }}
                {...props}
            />
        </div>
    );
};
