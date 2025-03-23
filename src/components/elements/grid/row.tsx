import React from "react";

import s from "./grid.module.scss";

type RowProps = {
    children: React.ReactNode;
    gutter?: [number, number];
};

export const Row = ({ children, gutter = [0, 0] }: RowProps) => {
    const [horizontal, vertical] = gutter;

    return (
        <div
            className={s.row}
            style={{
                marginInline: -horizontal / 2,
                rowGap: vertical,
            }}
        >
            {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) return child;
                return React.cloneElement(child, {
                    ...child.props,
                    style: {
                        ...child.props?.style,
                        paddingInline: horizontal / 2,
                    },
                });
            })}
        </div>
    );
};
