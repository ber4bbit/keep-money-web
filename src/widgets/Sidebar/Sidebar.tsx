import { type ReactNode, useState } from "react";
import { type LinkI } from "./Sidebar.types";
import { NavLink } from "react-router";
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
            <section
                className={[
                    styles.navigation__section,
                    styles.navigation__section_top,
                ].join(" ")}
            >
                <a href="/" className={styles.navigation__logo}>
                    Here will be an Logo Icon
                </a>
                <ul className={styles.navigation__list}>
                    {links.map((item: LinkI, index: number) => (
                        <li key={index}>
                            <NavLink
                                to={item.route}
                                className={({isActive}: {isActive: boolean}) => [
                                    "heading-s",
                                    styles.navigation__link,
                                    isActive && styles.navigation__link_active
                                ].join(" ")}
                            >{item.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles.navigation__section}></section>
        </nav>
    );
};

export default Sidebar;
