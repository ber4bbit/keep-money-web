import { type ReactNode, type ReactElement, useState } from "react";
import { type LinkI } from "./sidebar.types.ts";
import { NavLink } from "react-router";
import styles from "./styles.module.scss";
import { FaGear, FaHouse } from "react-icons/fa6";

const linksMock: LinkI[] = [
    {
        label: "Dashboard",
        route: "/dashboard",
        icon: FaHouse
    },
    {
        label: "Settings",
        route: "/settings",
        icon: FaGear
    },
];

const Sidebar = (): ReactNode => {
    const [links] = useState<LinkI[]>(linksMock);

    return (
        <nav className={styles.navigation}>
            <section
                className={[
                    styles.navigation__section,
                    styles.navigation__section_top,
                ].join(" ")}
            >
                <a href="/" className={styles.navigation__logo}>
                    KeepMoney Web
                </a>
                <ul className={styles.navigation__list}>
                    {links.map((item: LinkI, index: number): ReactElement => (
                        <li key={Date.now() + index}>
                            <NavLink
                                to={item.route}
                                className={({isActive}: {isActive: boolean}) => [
                                    "heading-s",
                                    styles.navigation__link,
                                    isActive && styles.navigation__link_active
                                ].join(" ")}
                            >
                                <item.icon size="18px" />
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles.navigation__section}></section>
        </nav>
    );
};

export default Sidebar;
