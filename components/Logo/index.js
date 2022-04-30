import Image from 'next/image';
import React from 'react';
import LinkCustom from '../LinkCustom';

const Logo = ({ src, alt }) => {
  return (
    <LinkCustom path="/" className="flex cursor-pointer mr-[15px]">
      <Image src={src} alt={alt} />
    </LinkCustom>
  );
};

export default Logo;
