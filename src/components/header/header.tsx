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
import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';

export const Header = ({ className }: HeaderProps) => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [headerVisible, setHeaderVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop) {
                setHeaderVisible(false);
            } else {
                setHeaderVisible(true);
            }
            setLastScrollTop(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [headerVisible, setHeaderVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setHeaderVisible(false);
            } else {
                // Scrolling up
                setHeaderVisible(true);
            }
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

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
        <div className={classNames(styles.root, { [styles.hidden]: !headerVisible }, className)}>
            <a href="/">
                <img
                    src="images/blaid_logo_canva_black.png"
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
