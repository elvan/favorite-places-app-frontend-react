import { NavLink } from 'react-router-dom';
import './NavLinks.css';

export const NavLinks = () => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to='/users/u1/places'>
          <span>MY PLACES</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/places-add'>
          <span>ADD NEW PLACE</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/login'>
          <span>LOGIN</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/register'>
          <span>REGISTER</span>
        </NavLink>
      </li>
    </ul>
  );
};
