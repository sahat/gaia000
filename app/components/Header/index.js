import React from 'react';
import './styles.scss';

const Header = (props) => {
  return (
    <header className="Header">
      <a href="#" className="Header__logo">
        <img src="http://ww1.prweb.com/prfiles/2015/11/21/13096724/gI_134770_Unknown.png" height="32px" alt="Gaia"/>
      </a>
      <nav className="Header__secondary">
        <ul>
          <li className="active"><a href="#">My Gaia</a></li>
          <li><a href="#">Yoga</a></li>
          <li><a href="#">Customers</a></li>
          <li><a href="#">Seeking Truth</a></li>
          <li><a href="#">Transformation</a></li>
          <li><a href="#">Films & Docs</a></li>
          <li><a href="#">Centers</a></li>
        </ul>
      </nav>
      <div className="Header__account-info">
        <a href="#">
          <span>Sahat</span>
          <img src="data:image/jpeg;base64,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"/>
        </a>
      </div>
    </header>
  );
};

export default Header;
