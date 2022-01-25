import React from 'react';
import './Navbar.scss';

const Navbar: React.FC = (props) => {
  return (
    <nav className='header-nav'>
      <ul>
        {props.children}
      </ul>
    </nav>
  );
}

export default Navbar;