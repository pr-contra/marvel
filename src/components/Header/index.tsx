import React, { ReactElement } from 'react';
import '../../styles/header.css';

const Header = (): ReactElement => {
  return (
    <header className="header">
      <img
        src="images/logo-marvel.svg"
        alt="Marvel logo"
        className="header__img"
      />
    </header>
  );
};

export default Header;
