import React from 'react';
import classnames from 'classnames';

const ButtonCustom = ({ label, children, className, onClick }) => {
  return (
    <button className={classnames(className)} onClick={onClick}>
      {children || label}
    </button>
  );
};

export default ButtonCustom;
