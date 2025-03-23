"use client";

import { Flex } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import classNames from "classnames/bind";

import {
    IconChannelOutlined,
    IconHomeOutlined,
    IconShortOutlined,
    IconUserOutlined,
} from "@/components/SVGs";
import { Typography } from "@/components/typography";

import s from "./sidebar.module.scss";

const cx = classNames.bind(s);

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
    {
        label: "Home",
        key: "home",
        icon: <IconHomeOutlined />,
    },
    {
        label: "Shorts",
        key: "Shorts",
        icon: <IconShortOutlined />,
    },
    {
        label: "Subscriptions",
        key: "Subscriptions",
        icon: <IconChannelOutlined />,
    },
    {
        label: "You",
        key: "You",
        icon: <IconUserOutlined />,
    },
];

type SidebarProps = {
    collapsed?: boolean;
};

export const Sidebar = ({ collapsed = false }: SidebarProps) => {
    const params = useParams();
    const lang = params?.lang || "en";

    const [activeItem, setActiveItem] = useState(items[0]?.key);

    return (
        <div className={cx("menu", collapsed && "collapsed")}>
            <div className={cx("menuSection", collapsed && "collapsed")}>
                {items.map((i: any) => (
                    <Link
                        href={i?.href ? `/${lang}${i.href}` : `/${lang}/`}
                        key={i?.key}
                        onClick={() => setActiveItem(i?.key)}
                        className={cx(
                            "menuItem",
                            activeItem === i?.key && "active",
                            collapsed && "collapsed",
                        )}
                    >
                        <Flex
                            vertical
                            align="center"
                            gap={5}
                            className={cx(
                                "menuItemCollapsed",
                                collapsed && "collapsed",
                            )}
                        >
                            <div className={cx("icon")}>{i?.icon}</div>
                            {collapsed && (
                                <Typography
                                    variant="body1"
                                    weight="medium"
                                    style={{ letterSpacing: -0.5 }}
                                >
                                    {i?.label}
                                </Typography>
                            )}
                        </Flex>
                        {!collapsed && (
                            <div>
                                <Typography variant="body">
                                    {i?.label}
                                </Typography>
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};
