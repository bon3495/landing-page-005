import Image from 'next/image';
import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

const HeaderFeature = ({
  description,
  subTitle,
  title,
  className,
  btnName,
  btnStyle,
  url = '/',
}) => {
  return (
    <div
      className={classnames(
        'flex flex-col shrink-0 items-center text-center 2md:text-left',
        className
      )}
    >
      <div className="w-full flex flex-col">
        <p className="text-primary text-[12px] md:text-[15px] uppercase font-bold mb-[10px] sm:mb-[15px] leading-normal tracking-[1.5px] md:tracking-[2px]">
          {subTitle}
        </p>
        <h2 className="text-[24px] lg:text-[36px] 2lg:text-[42px] 2xl:text-[48px] text-headingSecondary font-bold leading-[1.3] lg:leading-[1.2] -tracking-[0.5px] line-clamp-2 lg:line-clamp-none">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-[15px] sm:text-[16px] 2lg:text-[17px] 2xl:text-[18px] font-normal leading-[1.85] 2md:leading-loose 2lg:leading-[2.2] text-textSecondary mt-[20px] mb-[30px]">
          {description}
        </p>
      )}
      {btnName && (
        <Link href={url}>
          <a
            className={classnames(btnStyle, 'my-0 mx-auto 2md:m-0')}
            aria-label={btnName}
          >
            {btnName}
          </a>
        </Link>
      )}
    </div>
  );
};

export default HeaderFeature;
