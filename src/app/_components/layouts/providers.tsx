"use client";

import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { ReactNode } from "react";

export default function AntdProvider({ children }: { children: ReactNode }) {
    return (
        <StyleProvider hashPriority="high">
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            defaultColor: "#d9d9d9",
                            colorPrimary: "var(--background)",
                            colorPrimaryHover: "var(--bgHoverColorButton)",
                            colorPrimaryActive: "#0000001a",
                            textHoverBg: "#0000001a",
                            colorPrimaryBg: "var(--bgColorButton)",
                            // contentFontSizeSM: 10,
                            // contentLineHeightSM: 1.5,
                            // paddingBlockSM: 8,
                            // paddingInlineSM: 20,
                            controlHeightSM: 32,
                            // contentFontSize: 12,
                            // contentLineHeight: 1.5,
                            // paddingBlock: 10,
                            // paddingInline: 24,
                            controlHeight: 36,
                            // contentFontSizeLG: 14,
                            // contentLineHeightLG: 22 / 14,
                            // paddingBlockLG: 13,
                            // paddingInlineLG: 32,
                            controlHeightLG: 40,
                        },
                        Checkbox: {
                            colorPrimary: "#ff4d4f",
                        },
                    },
                }}
            >
                {children}
            </ConfigProvider>
        </StyleProvider>
    );
}
