import { type ReactNode, type ReactElement } from "react";
import { NavLink } from "react-router";
import styles from "./styles.module.scss";
import useStore from "../../features/store";
import { type SidebarLinkI } from "../../features/store/state.types.ts";

const Sidebar = (): ReactNode => {
    const links = useStore(({sidebarLinks}) => sidebarLinks);

    const linksList: ReactElement[] = links.map((item: SidebarLinkI, index: number): ReactElement => (
        <li key={Date.now() + index}>
            <NavLink
                to={item.route}
                className={({isActive}: {isActive: boolean}): string => [
                    "heading-s",
                    styles.navigation__link,
                    isActive && styles.navigation__link_active
                ].join(" ")}
            >
                <item.icon />
                {item.label}
            </NavLink>
        </li>
    ));

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
                <ul className={styles.navigation__list}>{linksList}</ul>
            </section>
            <section className={styles.navigation__section}></section>
        </nav>
    );
};

export default Sidebar;
