import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/egnyte-logo.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Egnyte - collaborative editing of checkboxes</h1>
            <img src={logo} alt="egnyte logo"/>
        </header>
    );
};

export default Header;