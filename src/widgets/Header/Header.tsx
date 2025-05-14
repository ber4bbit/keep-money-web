import { type ReactElement } from "react";
import { useLocation } from "react-router";
import { useTitleFormat } from "../../features/hooks/useTitleFormat.ts";
import styles from "./styles.module.scss";

const Header = (): ReactElement => {
    const location = useLocation();

    const formattedToTitleLocation = useTitleFormat(location.pathname.replace("/", ""));

    return (
        <header className={styles.header}>
            <span className='heading-l'>
                {location.pathname && formattedToTitleLocation}
            </span>
        </header>
    );
};

export default Header;
