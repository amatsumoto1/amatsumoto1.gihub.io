import React from 'react';
import Navbar from './Navbar';
import NavItem from './NavItem';
import './index.scss';

const Header: React.VFC = () => {
  return (
    <header className='page-header'>
      <Navbar>
        <NavItem link='/' text='Home' />
        <NavItem link='/about' text='About' />
        <NavItem link='/projects' text='Projects' />
        <NavItem link='/' text='Contact' />
      </Navbar>
    </header>
  );
}

export default Header;