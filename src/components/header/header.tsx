import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, NavLink } from 'react-router-dom';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
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
                         scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                    Services
                </NavLink>
            </div>
        </div>
    );
};
