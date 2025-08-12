import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header className="header">
      <Link className="headerLink" to="/">Blog</Link>
      <Link className="headerLink" to="/contact">お問い合わせ</Link>
    </header>
  );
}
