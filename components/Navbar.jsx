import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import {
  AiOutlineShopping,
  AiOutlineMenu,
  AiOutlineSearch,
} from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='navbar-container'>
      <span onClick={() => setOpenMenu(true)} className='menu'>
        <AiOutlineMenu />
      </span>
      <p className='logo'>
        <Link href='/'>Janzi Kids</Link>
      </p>

      <nav>
        <ul className='navbar-items'>
          <li className='navbar-item'>
            <Link href='/'>Home</Link>
          </li>
          <li className='navbar-item'>
            <Link href='/explore'>Explore</Link>
          </li>
          <li className='navbar-item'>
            <Link href='/collections'>Collections</Link>
          </li>
        </ul>
      </nav>

      <div className='navbar-icons'>
        <button type='button' className='search-icon'>
          <AiOutlineSearch />
        </button>

        <button
          type='button'
          className='cart-icon'
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
      </div>

      {showCart && <Cart />}

      {openMenu && (
        <Fragment>
          <div onClick={() => setOpenMenu(false)} className='overlay'></div>
          <div className='navbar'>
            <span onClick={() => setOpenMenu(false)}>
              <MdCancel />
            </span>
            <ul>
              <li className='navbar-item'>
                <Link href='/' onClick={() => setOpenMenu(false)}>
                  Home
                </Link>
              </li>
              <li className='navbar-item'>
                <Link href='/explore' onClick={() => setOpenMenu(false)}>
                  Explore
                </Link>
              </li>
              <li className='navbar-item'>
                <Link href='/collections' onClick={() => setOpenMenu(false)}>
                  Collections
                </Link>
              </li>
            </ul>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Navbar;
