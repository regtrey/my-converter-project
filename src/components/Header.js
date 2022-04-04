import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <h1 className={classes.logo}>Converter</h1>
    </header>
  );
};

export default Header;
