import React from 'react';
import classnames from 'classnames';

const HeaderSection = ({ title, slogan, isWhite }) => {
  return (
    <div className="w-full md:w-[540px] flex flex-col items-center mb-[50px] md:mb-[60px] 2lg:mb-[65px] 2xl:mb-[80px] -mt-[3px] 2md:-mt-[1px] mx-auto text-center">
      <p
        className={classnames(
          'text-[12px] sm:text-[13px] 2md:text-[14px]  font-bold mb-[10px] leading-normal uppercase tracking-[1.5px] md:tracking-[2px]',
          isWhite ? 'text-white-fff opacity-70' : 'text-primary opacity-100'
        )}
      >
        {slogan}
      </p>
      <h2
        className={classnames(
          'text-[24px] md:text-[28px] 2lg:text-[32px] 2xl:text-[36px] font-bold -tracking-[0.5px] leading-[1.3] 2md:leading-tight',
          isWhite ? 'text-white-fff' : 'text-heading'
        )}
      >
        {title}
      </h2>
    </div>
  );
};

export default HeaderSection;
