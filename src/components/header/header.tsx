import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */import { useLocation } from 'react-router-dom';

export const Header = ({ className }: HeaderProps) => {
    const location = useLocation();

    const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Prevent the default anchor click behavior
        event.preventDefault();
        // Use the currentTarget instead of target to ensure we get the anchor element
        const target = event.currentTarget;
        if (location.pathname === target.pathname && target.hash === '#servicesection') {
            const element = document.getElementById(target.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <div className={classNames(styles.root, className)}>
            <a href="/">
                <img
                    src="src/assets/logos/blaide_logo5.svg"
                    alt="Blaide Logo"
                    className={styles.blaidelogo}
                />
            </a>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => classNames({ [styles.active]: isActive })}
                >
                    About
                </NavLink>
                <NavLink to="/#servicesection"
                         className={({ isActive }) => classNames({ [styles.active]: isActive })}
                         onClick={handleNavLinkClick}
                >
                    Services
                </NavLink>
            </div>
        </div>
    );
};
