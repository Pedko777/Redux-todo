import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

// import routes from '../../routes';

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to="/">ToDo</NavLink>
          </li>

          <li className={styles.item}>
            <NavLink to="/todo">Form</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;