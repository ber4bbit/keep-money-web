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

    const renderedLinks = links.map((link: LinkI, index: number): ReactNode => (
        <li key={index}>
            <a
                href={link.route}
                className={'heading-s ' + styles.navigation__link}
            >{link.label}</a>
        </li>
    ))

    return (
        <nav className={styles.navigation}>
            <section className={[styles.navigation__section, styles.navigation__section_top].join(' ')}>
                <a
                    href="/"
                    className={styles.navigation__logo}
                >Here will be an Logo Icon</a>
                <ul>
                    {renderedLinks}
                </ul>
            </section>
            <section className={styles.navigation__section}>

            </section>
        </nav>
    );
};

export default Sidebar;
