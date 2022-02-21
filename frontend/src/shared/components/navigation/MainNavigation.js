import { Link } from 'react-router-dom';
import { MainHeader } from './MainHeader';
import './MainNavigation.css';

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
        <ul>
          <li>
            <Link to='/'>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to='/places'>
              <span>Places</span>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </MainHeader>
  );
};
