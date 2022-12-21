import Head from 'next/head';
import React, { Children } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Janzi Kids Store</title>
        <link rel='apple-touch-icon' sizes='180x180' href='/Logo.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/Logo.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/Logo.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
