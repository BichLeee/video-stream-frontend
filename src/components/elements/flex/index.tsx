import React from "react";
import styles from "./flex.module.scss";
import classNames from "classnames";

type FlexProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    vertical?: boolean;
    align?: React.CSSProperties["alignContent"] | null;
    justify?: React.CSSProperties["justifyContent"] | null;
    wrap?: React.CSSProperties["flexWrap"] | null;
    gap?: React.CSSProperties["gap"] | null;
};

export const Flex = ({
    children = null,
    className = "",
    style = {},
    vertical = false,
    align = null,
    justify = null,
    wrap = null,
    gap = 0,
    ...props
}: FlexProps) => {
    const inline = { ...style };
    if (vertical) inline.flexDirection = "column";
    if (wrap) inline.flexWrap = "nowrap";
    if (gap) inline.gap = gap;
    if (align) inline.alignItems = align;
    if (justify) inline.justifyContent = justify;

    return (
        <div
            className={classNames(styles.container, className)}
            style={inline}
            {...props}
        >
            {children}
        </div>
    );
};
