"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex, Popover } from "antd";

import { Button } from "@/components/elements";
import { Typography } from "@/components/typography";
import {
    IconBack,
    IconChevronRight,
    IconLanguage,
    IconMenuAlt2,
    IconMoon,
    IconSettingsOutlined,
} from "@/components/SVGs";
import s from "./dropdownAlt3.module.scss";

export const DropdownAlt3 = () => {
    const [open, setOpen] = useState(false);
    const [currentMenu, setCurrentMenu] = useState<any[][]>([]);

    const [selectedKeys, setSelectedKeys] = useState<string[]>([
        "light-theme",
        "vietnamese",
    ]);

    const handleChangeOption = (newKey: string, oldKey: string) => {
        setSelectedKeys((prevKeys) => {
            const newKeys = prevKeys.includes(oldKey)
                ? [newKey, ...prevKeys.filter((k) => k !== oldKey)]
                : [newKey, ...prevKeys];
            return newKeys;
        });
    };

    const items: any[] = [
        {
            label: "Appearance",
            icon: <IconMoon />,
            key: "appearance",
            children: [
                {
                    title: "Appearance",
                    label: "Dark theme",
                    key: "dark-theme",
                    onClick: () =>
                        handleChangeOption("dark-theme", "light-theme"),
                },
                {
                    label: "Light theme",
                    key: "light-theme",
                    onClick: () =>
                        handleChangeOption("light-theme", "dark-theme"),
                },
            ],
        },
        {
            label: "Language",
            icon: <IconLanguage />,
            key: "language",
            children: [
                {
                    title: "Choose your language",
                    label: "English",
                    key: "english",
                    onClick: () => handleChangeOption("english", "vietnamese"),
                },
                {
                    label: "Vietnamese",
                    key: "vietnamese",
                    onClick: () => handleChangeOption("vietnamese", "english"),
                },
            ],
        },
        {
            type: "divider",
        },
        {
            label: "Settings",
            icon: <IconSettingsOutlined />,
            key: "settings",
        },
    ];

    useEffect(() => {
        setCurrentMenu([items]);
    }, []);

    return (
        <>
            <Popover
                className={s.dropdown}
                open={open}
                arrow={false}
                placement="bottomLeft"
                getPopupContainer={(trigger) =>
                    trigger.parentElement || document.body
                }
                content={
                    <Popover className={s.content}>
                        {currentMenu.length > 1 && (
                            <div className={s.menuHeader}>
                                <Button
                                    type="text"
                                    icon={<IconBack />}
                                    size="large"
                                    style={{
                                        borderRadius: 100,
                                        width: 40,
                                        padding: 8,
                                    }}
                                    onClick={() =>
                                        setCurrentMenu((prev) =>
                                            prev.slice(0, -1),
                                        )
                                    }
                                ></Button>
                                <Typography variant="label1">
                                    {
                                        currentMenu[currentMenu.length - 1][0]
                                            ?.title
                                    }
                                </Typography>
                            </div>
                        )}
                        <Flex vertical style={{ paddingBlock: 8 }}>
                            {currentMenu[currentMenu.length - 1]?.map(
                                (item, index) =>
                                    item.type === "divider" ? (
                                        <div
                                            className={s.divider}
                                            key={index}
                                        />
                                    ) : (
                                        <div
                                            className={s.menuItem}
                                            key={item.key}
                                            onClick={() => {
                                                if (item.children) {
                                                    setCurrentMenu((prev) => [
                                                        ...prev,
                                                        item.children,
                                                    ]);

                                                    return;
                                                }
                                                if (item.onClick) {
                                                    item.onClick();
                                                    return;
                                                }
                                            }}
                                        >
                                            <span className={s.icon}>
                                                {item.icon}
                                            </span>
                                            <Typography>
                                                {item.label}
                                            </Typography>
                                            {item.children && (
                                                <IconChevronRight
                                                    className={s.expandButton}
                                                />
                                            )}
                                        </div>
                                    ),
                            )}
                        </Flex>
                    </Popover>
                }
            >
                <Button
                    type="text"
                    icon={<IconMenuAlt2 />}
                    size="large"
                    style={{ borderRadius: 100, width: 40, padding: 8 }}
                    onClick={() => setOpen((prev) => !prev)}
                ></Button>
            </Popover>
        </>
    );
};
