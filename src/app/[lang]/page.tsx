"use client";

import Image from "next/image";

import NgocBich from "assets/images/ngocbich.jpg";
import { Introduction } from "../_sections/introduction";

// eslint-disable-next-line @next/next/no-async-client-component
export default function Home({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    // const { lang } = await params;

    return (
        <div>
            <Introduction />
        </div>
    );
}
