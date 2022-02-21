import { MainHeader } from './MainHeader';
import './MainNavigation.css';
import { NavLinks } from './NavLinks';

export const MainNavigation = () => {
  return (
    <MainHeader>
      <button className='main-navigation__menu-btn'>
        <span />
        <span />
        <span />
      </button>
      <h1 className='main-navigation__title'>Your Places</h1>
      <nav className='main-navigation__items'>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};
