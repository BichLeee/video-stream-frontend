import React from "react";

import s from "./grid.module.scss";

type ColProps = {
    children?: React.ReactNode;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;

export const Col = ({
    children,
    xs = 24,
    sm,
    md,
    lg,
    xl,
    xxl,
    ...props
}: ColProps) => {
    const getValueForBreakpoint = (
        breakpointIndex: number,
    ): number | undefined => {
        for (let i = breakpointIndex; i >= 0; i--) {
            const size = sizes[i];
            const value = size === "xs" ? xs : { sm, md, lg, xl, xxl }[size];
            if (value !== undefined && value >= 0 && value <= 24) {
                return value;
            }
        }
        return undefined;
    };

    const sizeClasses = sizes
        .map((size, index) => {
            const value = getValueForBreakpoint(index);
            if (value === undefined) return "";
            return s[`col-${size}-${value}`];
        })
        .filter(Boolean)
        .join(" ");

    return (
        <div className={`${s.col} ${sizeClasses}`.trim()} {...props}>
            {children}
        </div>
    );
};
