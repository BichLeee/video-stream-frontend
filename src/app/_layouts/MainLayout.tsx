"use client";

import styled from "styled-components";

import { IconMenu } from "@/components/SVGs";
import { Button, Flex } from "antd";
import { useState } from "react";
import { Header } from "../_components/header";
import { Footer } from "../_components/footer";
import { Sidebar } from "../_components/sidebar";

type HeaderType = {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: HeaderType) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Header handleSidebar={() => setCollapsed((prev) => !prev)} />
            <Flex style={{ marginTop: 56 }}>
                <Sidebar collapsed={collapsed} />
                <Content collapsed={collapsed}>{children}</Content>
            </Flex>
        </>
    );
};

const Content = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 56px;
    padding-left: ${(props) => (props.collapsed ? "74px" : "200px")};
`;
