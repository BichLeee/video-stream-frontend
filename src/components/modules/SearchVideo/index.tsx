"use client";

import { Flex, Input, Popover } from "antd";
import { useRef, useState } from "react";
import styled from "styled-components";
import classNames from "classnames/bind";

import { Button } from "@/components/elements";
import { IconMic, IconSearch } from "@/components/SVGs";
import { Typography } from "@/components/typography";
import s from "./searchVideo.module.scss";

const cx = classNames.bind(s);

const searchItems = [
    {
        text: "Black Pink Black Pink Black Pink Black Pink Black Pink Black Pink Black Pink Black Pink Black Pink Black Pink Black Pink",
    },
    {
        text: "Jennie",
    },
    {
        text: "Lisa",
    },
    {
        text: "Ngoc Bich",
    },
];

export const SearchVideo = () => {
    const inputRef = useRef(null);
    const [focused, setFocused] = useState(false);

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <Flex gap={16} style={{ marginLeft: 40 }}>
            <div
                className={cx("wrapper")}
                style={{ maxWidth: 600 }}
                onClick={(e) => e.stopPropagation()}
            >
                <Popover
                    trigger="click"
                    arrow={false}
                    content={
                        <div className={cx("content")}>
                            {searchItems.map((i) => (
                                <div className={cx("searchItem")} key={i.text}>
                                    <Flex
                                        align="center"
                                        style={{
                                            flex: 1,
                                            overflow: "hidden",
                                        }}
                                    >
                                        <IconSearch
                                            style={{ color: "var(--primary)" }}
                                        />
                                        <Typography
                                            truncate
                                            style={{ maxWidth: "90%" }}
                                        >
                                            {i.text}
                                        </Typography>
                                    </Flex>
                                    <span
                                        className={cx("remove")}
                                        onClick={handleRemove}
                                    >
                                        Remove
                                    </span>
                                </div>
                            ))}
                        </div>
                    }
                    getPopupContainer={(trigger) =>
                        trigger.parentElement || document.body
                    }
                    placement="bottomLeft"
                >
                    <div className={cx("inputWrapper", focused && "focused")}>
                        {focused && (
                            <IconSearch
                                style={{ width: 20, color: "var(--primary)" }}
                            />
                        )}
                        <div style={{ flex: 1 }}>
                            <Input
                                className={cx("input")}
                                ref={inputRef}
                                placeholder="Search"
                                allowClear
                            />
                        </div>
                    </div>
                </Popover>
                <button className={cx("searchButton")}>
                    <IconSearch style={{ color: "var(--primary)" }} />
                </button>
            </div>
            <Button
                icon={<IconMic style={{ color: "var(--primary)" }} />}
                shape="circle"
            />
        </Flex>
    );
};

// const Content = styled(Popover)`
//     display: flex;
//     flex-direction: column;
//     padding-block: 12px;
// `;
