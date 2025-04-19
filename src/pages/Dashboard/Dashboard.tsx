import { type ReactNode } from "react";
import styles from "./styles.module.scss";

const Dashboard = (): ReactNode => {
    return (
        <section className={styles.wrapper}>
            <main>dashboard page body content</main>
        </section>
    );
};

export default Dashboard;
