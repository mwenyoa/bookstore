import React from 'react';
import { Link } from 'react-router-dom';

const appTitle = 'Bookstore CMS';

const Header = () => (

  <header>
    <div className="left-header-items">
      <h1 className="text-primary">{appTitle}</h1>
      <nav>
        <Link to="/" className="nav-link active">BOOKS</Link>
        <Link to="/categories" className="nav-link">CATEGORIES</Link>
      </nav>
    </div>
    <div>
      <p><i className="fa fa-1x fa-user-circle fa-user-alt fa-circle" /></p>
    </div>
  </header>
);

export default Header;
