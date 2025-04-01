import { type ReactNode, useState } from "react";
import { type LinkI } from "./Sidebar.types";
import styles from "./styles.module.scss";

const linksMock: LinkI[] = [
    {
        label: "Dashboard",
        route: "/dashboard",
    },
    {
        label: "Settings",
        route: "/settings",
    },
];

const Sidebar = (): ReactNode => {
    const [links] = useState(linksMock);

    return (
        <nav className={styles.navigation}>
            <section className={[styles.navigation__section, styles.navigation__section_top].join(' ')}>
                <a
                    href="/"
                    className={styles.navigation__logo}
                >Here will be an Logo Icon</a>
                <ul>
                    {links.map((item: LinkI, index: number) => (
                        <li key={index}>
                            <a
                                href={item.route}
                                className={'heading-s ' + styles.navigation__link}
                            >{item.label}</a>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles.navigation__section}>

            </section>
        </nav>
    );
};

export default Sidebar;
