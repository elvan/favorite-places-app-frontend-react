import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './SideDrawer.css';

export const SideDrawer = (props) => {
  const drawerRoot = document.getElementById('drawer-root');

  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit
    >
      <aside className='side-drawer' onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return drawerRoot ? ReactDOM.createPortal(content, drawerRoot) : null;
};
