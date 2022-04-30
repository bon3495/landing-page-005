import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const FeatureCardColumn = ({ src, alt, title, description }) => {
  return (
    <div className="flex flex-col items-center sm:items-start -mb-[5px] text-center md:text-left px-[15px] md:px-0">
      <div className="mx-auto md:mx-0 -mb-[10px] lg:self-center">
        <Image
          src={src}
          alt={alt}
          layout="raw"
          className="w-[80px] 2md:w-[90px] lg:w-auto"
        />
      </div>
      <div className="flex flex-col w-full lg:text-center">
        <h3 className="text-[18px] text-headingSecondary leading-[1.4] font-bold mb-[10px] md:mb-[15px]">
          {title}
        </h3>
        <p className="text-[15px] font-normal leading-[1.9] lg:text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCardColumn;
