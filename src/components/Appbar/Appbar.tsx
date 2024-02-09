import React from 'react';
import {NavLink} from 'react-router-dom';

const Appbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <span className="navbar-brand "> <h3 className='display-6'>Beksultan Chomoev's Blog</h3></span>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/new-post" className="nav-link">Add</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Appbar;