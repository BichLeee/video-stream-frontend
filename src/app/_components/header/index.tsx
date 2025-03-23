"use client";

import { Flex } from "antd";
import noop from "lodash/noop";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import s from "./header.module.scss";

import {
    IconLanguage,
    IconMenu,
    IconMenuAlt2,
    IconMoon,
    IconSettingsOutlined,
    IconUserOutlined,
    IconYoutubeLogo,
} from "@/components/SVGs";
import { SearchVideo } from "@/components/modules";
import { Button, DropdownAlt2 } from "@/components/elements";
import { getDictionary } from "@/app/[lang]/dictionaries";

type HeaderType = {
    handleSidebar: () => void;
};

export const Header = ({ handleSidebar = noop }: HeaderType) => {
    const params = useParams();
    const lang = params?.lang || "en";

    const [theme, setTheme] = useState<string>("light");

    //const dict = await getDictionary(lang); // en

    // const handleChangeOption = (newKey: string, oldKey: string) => {
    //     setSelectedKeys((prevKeys) => {
    //         const newKeys = prevKeys.includes(oldKey)
    //             ? [newKey, ...prevKeys.filter((k) => k !== oldKey)]
    //             : [newKey, ...prevKeys];
    //         return newKeys;
    //     });
    // };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const items: any[] = [
        {
            label: `Appearance: ${theme === "dark" ? "Dark" : "Light"}`,
            icon: <IconMoon />,
            key: "appearance",
            children: [
                {
                    title: "Appearance",
                    label: "Dark theme",
                    key: "dark",
                    onClick: () => setTheme("dark"),
                },
                {
                    label: "Light theme",
                    key: "light",
                    onClick: () => setTheme("light"),
                },
            ],
        },
        {
            label: `Language:`,
            icon: <IconLanguage />,
            key: "language",
            children: [
                {
                    title: "Choose your language",
                    label: "English",
                    key: "english",
                },
                {
                    label: "Vietnamese",
                    key: "vietnamese",
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

    return (
        <div className={s.navigation}>
            <Flex align="center" gap={14}>
                <Button
                    type="text"
                    onClick={handleSidebar}
                    icon={<IconMenu style={{ color: "var(--primary)" }} />}
                    size="large"
                    style={{ borderRadius: 100, width: 40, padding: 8 }}
                ></Button>
                <div style={{ position: "relative" }}>
                    <IconYoutubeLogo style={{ color: "var(--primary)" }} />
                    <span className={s.sup}>VN</span>
                </div>
            </Flex>
            <div style={{ width: 730 }}>
                <SearchVideo />
            </div>
            <Flex gap={8}>
                <DropdownAlt2 items={items} selectedKeys={[theme || "light"]}>
                    <Button
                        shape="circle"
                        icon={
                            <IconMenuAlt2 style={{ color: "var(--primary)" }} />
                        }
                        size="large"
                    ></Button>
                </DropdownAlt2>
                <Button
                    type="default-alt1"
                    icon={<IconUserOutlined />}
                    size="large"
                >
                    Log in
                </Button>
            </Flex>
        </div>
    );
};
