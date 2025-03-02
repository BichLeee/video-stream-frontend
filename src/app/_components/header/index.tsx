"use client";

import styled from "styled-components";
import { Sidebar } from "../sidebar";
import { IconMenu, IconYoutubeLogo } from "@/components/SVGs";
import { Button, Flex } from "antd";
import { useState } from "react";
import { Typography } from "@/components/typography";
import { SearchVideo } from "@/components/modules";

type HeaderType = {
    handleSidebar: () => void;
};

export const Header = ({ handleSidebar }: HeaderType) => {
    return (
        <Navigation>
            <Flex align="center" gap={14}>
                <Button
                    type="text"
                    onClick={handleSidebar}
                    icon={<IconMenu />}
                    size="large"
                    style={{ borderRadius: 100, width: 40, padding: 8 }}
                ></Button>
                <div style={{ position: "relative" }}>
                    <IconYoutubeLogo />
                    <Sup>VN</Sup>
                </div>
            </Flex>
            <div style={{ width: 730 }}>
                <SearchVideo />
            </div>
            <div style={{ width: 100 }}>actions</div>
        </Navigation>
    );
};

const Navigation = styled.div`
    display: flex;
    flex-flow: row nowrap;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    padding-inline: 16px;
    height: 56px;
    width: 100%;
`;

const Sup = styled.span`
    font-size: 10px;
    color: #606060;
    position: absolute;
    right: -20px;
    top: -5px;
`;
