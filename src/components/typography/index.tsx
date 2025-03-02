import React from "react";
import styled from "styled-components";
import { Typography as AntTypography } from "antd";

const { Paragraph } = AntTypography;

type TypographyProps = {
    children: React.ReactNode;
    variant?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "body"
        | "body1"
        | "body2"
        | "body3"
        | "body4"
        | "body5"
        | "body6";
    rootClassName?: string;
    style?: React.CSSProperties;
    align?: React.CSSProperties["textAlign"];
    color?: string | null;
    top?: number | null;
    left?: number | null;
    right?: number | null;
    bottom?: number | null;
    transform?: React.CSSProperties["textTransform"] | null;
    truncate?: boolean;
    weight?:
        | "light"
        | "regular"
        | "medium"
        | "semibold"
        | "bold"
        | "heavy"
        | null;
    onClick?: () => void;
};

export const Typography = ({
    children = null,
    variant = "body",
    rootClassName = "",
    style = {},
    align = "left",
    color = null,
    top = null,
    left = null,
    right = null,
    bottom = null,
    transform = null,
    truncate = false,
    weight = null,
    onClick = () => {},
    ...props
}: TypographyProps) => {
    const fw = {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        heavy: 800,
    };

    let inline = { textAlign: align, ...style } as React.CSSProperties;

    if (weight) inline.fontWeight = fw[weight];
    if (color) inline.color = color;
    if (transform) inline.textTransform = transform;
    if (top) inline.marginTop = top;
    if (left) inline.marginLeft = left;
    if (right) inline.marginRight = right;
    if (bottom) inline.marginBottom = bottom;
    if (truncate)
        inline = {
            ...inline,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        };

    return (
        <StyledText
            className={`hatemen-${variant} ${rootClassName}`}
            onClick={onClick}
            style={inline}
            {...props}
        >
            {children}
        </StyledText>
    );
};

const StyledText = styled(Paragraph)`
    line-height: normal;
    &.ant-typography,
    &.ant-typography p {
        margin: 0;
    }
    &.hatemen-h1 {
        color: #0f0f0f;
        font-weight: 600;
        font-size: 32px;
        line-height: 48px;
        letter-spacing: 1.6px;
        text-transform: uppercase;
    }
    &.hatemen-h2 {
        color: #0f0f0f;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 1.2px;
        text-transform: uppercase;
    }
    &.hatemen-h3 {
        color: #0f0f0f;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    &.hatemen-h4 {
        color: #0f0f0f;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
    }
    &.hatemen-h5 {
        color: #0f0f0f;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        text-transform: uppercase;
    }
    &.hatemen-h6 {
        color: #0f0f0f;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    &.hatemen-body {
        color: #0f0f0f;
        font-size: 14px;
        line-height: 20px;
    }
    &.hatemen-body1 {
        color: #0f0f0f;
        font-size: 10px;
        line-height: 14px;
    }
`;
