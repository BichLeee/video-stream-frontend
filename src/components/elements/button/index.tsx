import React from "react";
import styled from "styled-components";
import { Button as AntButton, ButtonProps } from "antd";

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
} as any;

const customTypes = {
    "default-alt1": "default",
    "default-alt2": "default",
} as any;

export const Button = ({
    children = null,
    type = "primary",
    ...props
}: CustomButtonProps) => (
    <StyledButton
        className={cn[type]}
        size="large"
        type={customTypes[type] ?? type}
        shape="round"
        {...props}
    >
        {children}
    </StyledButton>
);

const StyledButton = styled(AntButton)`
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.ant-btn .ant-btn-icon {
        display: flex;
    }
`;
