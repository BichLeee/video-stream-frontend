"use client";

import { useState } from "react";
import { Button, Flex } from "antd";
import classNames from "classnames/bind";

import { Header } from "../../header";
import { Footer } from "../../footer";
import { Sidebar } from "../../sidebar";
import s from "./mainLayout.module.scss";
import AntdProvider from "../providers";

const cx = classNames.bind(s);

type HeaderType = {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: HeaderType) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <AntdProvider>
            <Header handleSidebar={() => setCollapsed((prev) => !prev)} />
            <Flex style={{ marginTop: 56 }}>
                <Sidebar collapsed={collapsed} />
                <div className={cx("content", collapsed && "collapsed")}>
                    {children}
                </div>
            </Flex>
        </AntdProvider>
    );
};
