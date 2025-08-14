import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Header.module.css';

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.headerLink} to="/">Blog</Link>
      <Link className={classes.headerLink} to="/contact">お問い合わせ</Link>
    </header>
  );
}
