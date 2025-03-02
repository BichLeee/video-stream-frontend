"use client";

import {
    IconChannelOutlined,
    IconHomeOutlined,
    IconShortOutlined,
    IconUserOutlined,
} from "@/components/SVGs";
import { Typography } from "@/components/typography";
import { Flex } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

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
    const [activeItem, setActiveItem] = useState(items[0]?.key);
    return (
        <Menu style={collapsed ? { width: "fit-content" } : { width: 200 }}>
            <MenuSection collapsed={collapsed}>
                {items.map((i) => (
                    <MenuItem
                        href={i?.href || "/"}
                        key={i?.key}
                        onClick={() => setActiveItem(i?.key)}
                        style={
                            activeItem === i?.key && !collapsed
                                ? {
                                      backgroundColor: "#0000000d",
                                      fontWeight: 500,
                                  }
                                : {}
                        }
                        active={activeItem === i?.key}
                        collapsed={collapsed}
                        {...(collapsed && { justify: "center" })}
                    >
                        <Flex
                            vertical
                            align="center"
                            style={
                                collapsed
                                    ? {
                                          paddingTop: 20,
                                          paddingBottom: 14,
                                          width: 64,
                                          height: 74,
                                      }
                                    : { width: 48 }
                            }
                            gap={5}
                        >
                            <Icon>{i?.icon}</Icon>
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
                    </MenuItem>
                ))}
            </MenuSection>
        </Menu>
    );
};

const Menu = styled.div`
    position: fixed;
    left: 0;
    height: 100%;
`;

const MenuItem = styled(Link)`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    height: ${(props) => (props.collapsed ? "74px" : "40px")};
    border-radius: 10px;
    background: ${(props) =>
        props.active && !props.collapsed ? "#0000000d" : "unset"};

    &:hover {
        background: #0000000d;
        color: inherit;
    }
`;

const Icon = styled.div`
    width: 24px;
    height: 24px;
`;

const MenuSection = styled.div`
    padding-inline: ${(props) => (props.collapsed ? "4px" : "12px")};
    padding-block: ${(props) => (props.collapsed ? "0" : "12px")};
`;
