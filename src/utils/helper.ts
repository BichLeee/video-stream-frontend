import { words } from "lodash";

export const getAbbreviations = (name: string | null) => {
    if (typeof name === "string" && name.trim() !== "") {
        const ws = words(name);
        const { length } = ws;
        if (length === 0) return null;

        let sh;
        if (length > 1) {
            sh = ws[0].charAt(0) + ws[length - 1].charAt(0);
        } else {
            sh = ws[0].charAt(0) + ws[0].charAt(ws[0].length - 1);
        }
        return sh.toUpperCase();
    }
    return null;
};
