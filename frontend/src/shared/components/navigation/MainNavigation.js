import { useState } from 'react';
import { Backdrop } from '../elements/Backdrop';
import { MainHeader } from './MainHeader';
import './MainNavigation.css';
import { NavLinks } from './NavLinks';
import { SideDrawer } from './SideDrawer';

export const MainNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {isDrawerOpen && <Backdrop onClick={closeDrawer} />}
      {isDrawerOpen && (
        <SideDrawer>
          <nav className='main-navigation__drawer-nav'>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className='main-navigation__title'>FavoritePlaces</h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};
