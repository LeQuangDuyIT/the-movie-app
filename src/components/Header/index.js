import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { PAGE_NAV } from '../../utils/constants';

const Header = () => {
    const menuItems = Object.values(PAGE_NAV).filter(obj => obj.isMenuItem);
    const menuElements = menuItems.map(item => (
        <li key={item.title}>
            <Link to={item.path}>{item.title}</Link>
        </li>
    ));

    return (
        <header className={styles.header}>
            <ul className={styles.menu}>{menuElements}</ul>
        </header>
    );
};

export default Header;
