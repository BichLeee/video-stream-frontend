"use client";

import React from "react";
import { Button as AntButton, ButtonProps } from "antd";

import s from "./button.module.scss";

type CustomButtonProps = Omit<ButtonProps, "type"> & {
    children?: React.ReactNode;
    type?:
        | "default"
        | "primary"
        | "link"
        | "text"
        | "default-alt1"
        | "default-alt2";
};

const cn = {
    "default-alt1": "hate-men-btn-default-alt1",
    "default-alt2": "hate-men-btn-default-alt2",
} as Record<string, string>;

const customTypes = {
    "default-alt1": "default",
    "default-alt2": "default",
} as Record<string, string>;

export const Button = ({
    children = null,
    type = "primary",
    ...props
}: CustomButtonProps) => (
    <AntButton
        className={`${s.button} ${cn[type]}`}
        size="large"
        type={customTypes[type] ?? type}
        shape="round"
        {...props}
    >
        {children}
    </AntButton>
);
