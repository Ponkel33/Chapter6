import React from 'react';
import { Link } from 'react-router-dom';
// import classes from '../styles/Header.module.css';

export const Header = () => {
  return (
    <header className="bg-gray-800 p-4 mb-8 flex justify-between items-center">
      <Link className="text-lg font-bold text-white" to="/">Blog</Link>
      <Link className="text-lg font-bold text-white" to="/contact">お問い合わせ</Link>
    </header>
  );
}
