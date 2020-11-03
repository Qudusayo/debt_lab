import React from "react";
import { NavLink } from "react-router-dom";
import styles from './style.module.scss'

function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="/" activeClassName={styles.activeLink} exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/form" activeClassName={styles.activeLink}>Form</NavLink>
                </li>
                <li>
                    <NavLink to="/transactions" activeClassName={styles.activeLink}>Trans</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
