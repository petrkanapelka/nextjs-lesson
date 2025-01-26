import { NextPage } from "next";
import { PropsWithChildren } from "react";
import { Header } from "../Header/Header";
import styles from "./BaseLayout.module.css";

export const BaseLayout: NextPage<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.main}>{children}</div>
        </div>
    );
};
