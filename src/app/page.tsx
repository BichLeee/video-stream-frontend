"use client";

import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";

import NgocBich from "assets/images/ngocbich.jpg";
import { Introduction } from "./_sections/introduction";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Content>
                    {/* <Image
                        src={NgocBich.src}
                        alt="pretty"
                        width={500}
                        height={300}
                    /> */}
                    <Introduction />
                </Content>
            </main>
        </div>
    );
}

const Content = styled.div``;
