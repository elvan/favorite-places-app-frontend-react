import ReactDOM from 'react-dom';
import './SideDrawer.css';

export const SideDrawer = (props) => {
  const content = <aside className='side-drawer'>{props.children}</aside>;
  const drawerRoot = document.getElementById('drawer-root');

  return drawerRoot ? ReactDOM.createPortal(content, drawerRoot) : null;
};
