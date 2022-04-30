import React from 'react';
import RcDrawer from 'rc-drawer';
import classnames from 'classnames';

const Drawer = ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width = '320px',
  placement = 'left',
  drawerStyle,
  closeBtnStyle,
  ...props
}) => {
  return (
    <>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={classnames('drawer', className)}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration={'0.4s'}
        {...props}
      >
        {closeButton && (
          <button onClick={toggleHandler} className={closeBtnStyle}>
            {closeButton}
          </button>
        )}
        <div className={drawerStyle}>{children}</div>
      </RcDrawer>
      <div className="drawer__handler inline-block" onClick={toggleHandler}>
        {drawerHandler}
      </div>
    </>
  );
};

export default Drawer;
