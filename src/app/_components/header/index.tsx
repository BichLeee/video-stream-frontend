import {
    IconHomeOutlined,
    IconSettingsOutlined,
    IconUserOutlined,
} from "@/components/SVGs";
import { Menu } from "antd";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
    {
        label: "Home",
        key: "home",
        icon: <IconHomeOutlined />,
    },
    {
        label: "Profile",
        key: "SubMenu",
        icon: <IconUserOutlined />,
    },
    {
        label: "Settings",
        key: "Settings",
        icon: <IconSettingsOutlined />,
        children: [
            {
                type: "group",
                label: "Mode",
                children: [
                    { label: "Option 1", key: "setting:5" },
                    { label: "Option 2", key: "setting:6" },
                ],
            },
            {
                type: "group",
                label: "Language",
                children: [
                    { label: "Option 1", key: "setting:7" },
                    { label: "Option 2", key: "setting:8" },
                ],
            },
        ],
    },
];

export const Header = () => {
    return (
        <>
            <Menu mode="horizontal" items={items} />
        </>
    );
};
