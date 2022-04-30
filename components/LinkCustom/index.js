import Link from 'next/link';
import React from 'react';

const LinkCustom = ({ children, label, path, ...rest }) => {
  return (
    <Link href={path}>
      <a {...rest}>{children || label}</a>
    </Link>
  );
};

export default LinkCustom;
