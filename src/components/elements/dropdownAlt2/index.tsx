"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { Dropdown as AntDropdown, DropdownProps, Menu, MenuProps } from "antd";
import { Button } from "../button";
import { IconBack, IconChevronRight } from "@/components/SVGs";
import { Typography } from "@/components/typography";

import s from "./dropdownAlt2.module.scss";

type CustomDropdownProps = Omit<DropdownProps, "type"> & {
    children: React.ReactNode;
    items: MenuProps["items"];
    selectedKeys: string[];
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

export const DropdownAlt2 = ({
    children = null,
    type = "primary",
    items = [],
    selectedKeys = [],
    ...props
}: CustomDropdownProps) => {
    const [currentMenu, setCurrentMenu] = useState<MenuProps["items"][]>(
        items ? [items] : [],
    );

    return (
        <AntDropdown
            dropdownRender={() => (
                <Menu
                    style={{ minWidth: 300 }}
                    selectable
                    selectedKeys={selectedKeys}
                >
                    {currentMenu.length > 1 && (
                        <div
                            className={s.menuHeader}
                            key={
                                currentMenu[currentMenu.length - 1]?.[0]?.title
                            }
                        >
                            <Button
                                type="text"
                                icon={
                                    <IconBack
                                        style={{ color: "var(--primary)" }}
                                    />
                                }
                                size="large"
                                style={{
                                    borderRadius: 100,
                                    width: 40,
                                    padding: 8,
                                }}
                                onClick={() => {
                                    setCurrentMenu(currentMenu.slice(0, -1));
                                }}
                            ></Button>
                            <Typography variant="label1">
                                {
                                    currentMenu[currentMenu.length - 1]?.[0]
                                        ?.title
                                }
                            </Typography>
                        </div>
                    )}

                    {currentMenu?.[currentMenu?.length - 1]?.map((m, index) =>
                        m?.type === "divider" ? (
                            <Menu.Divider key={index} />
                        ) : m?.children?.length > 0 ? (
                            <Menu.Item
                                onClick={(e: any) => {
                                    setCurrentMenu([
                                        ...currentMenu,
                                        m?.children,
                                    ]);
                                    e.stopPropagation();
                                }}
                                className={s.menuItem}
                                {...m}
                                key={m?.key}
                                type="group"
                            >
                                {m?.label}
                                {m?.children && (
                                    <IconChevronRight
                                        className={s.expandButton}
                                        key={index}
                                    />
                                )}
                            </Menu.Item>
                        ) : (
                            <Menu.Item
                                className={s.menuItem}
                                {...m}
                                key={m?.key}
                                type="item"
                            >
                                {m?.label}
                            </Menu.Item>
                        ),
                    )}
                </Menu>
            )}
            className={cn[type]}
            size="large"
            trigger={["click"]}
            placement="bottomLeft"
            destroyPopupOnHide={true}
            forceSubMenuRender
            width={200}
            {...props}
        >
            {children}
        </AntDropdown>
    );
};
