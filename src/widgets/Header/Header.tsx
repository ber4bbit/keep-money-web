import { type ReactNode } from "react";
import styles from "./styles.module.scss";
import { useLocation } from "react-router";

const Header = (): ReactNode => {
    const location = useLocation();

    return (
        <header className={styles.header}>
            <span>
                {location.pathname && location.pathname.replace("/", "")}
            </span>
        </header>
    );
};

export default Header;
