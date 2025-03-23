"use client";

import React from "react";
import { Dropdown as AntDropdown, DropdownProps, MenuProps } from "antd";

import s from "./dropdown.module.scss";

type CustomDropdownProps = Omit<DropdownProps, "type"> & {
    children: React.ReactNode;
    items: MenuProps["items"];
    selectedKeys?: string[];
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

export const Dropdown = ({
    children = null,
    type = "primary",
    items = [],
    selectedKeys = [],
    ...props
}: CustomDropdownProps) => {
    return (
        <AntDropdown
            menu={{
                items,
                selectable: true,
                selectedKeys,
                mode: "inline",
                style: { minWidth: 200 },
                triggerSubMenuAction: "click",
            }}
            className={`${s.dropdown} ${cn[type]}`}
            size="large"
            trigger={["click"]}
            placement="bottomLeft"
            destroyPopupOnHide={true}
            {...props}
        >
            {children}
        </AntDropdown>
    );
};
