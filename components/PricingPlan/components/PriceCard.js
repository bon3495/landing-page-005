import React from 'react';
import classnames from 'classnames';
import PricingList from './PricingList';

import styles from './pricing-components.module.scss';

const PriceCard = ({
  header,
  name,
  description,
  priceWithUnit,
  buttonText,
  anotherOption,
  points,
}) => {
  return (
    <div
      className={classnames(
        'rounded-[20px] relative transition-all duration-300 ease-in-out py-[35px] px-[25px] md:p-[40px] w-[320px] sm:w-[75%] md:w-[90%] my-[40px] mx-auto hover:shadow-pricingBox hover:before:opacity-0 h-[500px] sm:h-[520px] 2md:h-[550px]',
        styles.pricingBox
      )}
    >
      {header && (
        <span className="absolute h-[28px] 2md:h-[32px] bg-yellow rounded-[5px] font-bold text-[15px] leading-tight flex items-center justify-center text-white-fff -top-[15px] p-3 -tracking-[0.14px]">
          {header}
        </span>
      )}
      <div>
        <div
          className={classnames(
            'flex flex-col mb-[30px] lg:mb-[40px]',
            styles.pricingHeader
          )}
        >
          <h3 className="text-heading font-bold text-[18px] md:text-[20px] leading-tight mb-[5px] md:mb-[10px]">
            {name}
          </h3>
          <p className="text-[15px] sm:text-[16px] text-text leading-normal">
            {description}
          </p>
        </div>
        <PricingList items={points} />
        <div className="font-medium text-[20px] md:text-[22px] lg:text-[30px] leading-[1] mb-[10px] flex items-center justify-center text-text pt-5">
          {priceWithUnit}
          <span className="relative pl-[3px] text-[12px] sm:text-[15px] font-normal">
            /Monthly
          </span>
        </div>
        <div className="flex flex-col items-center">
          <button className="button-primary mt-[30px]">{buttonText}</button>
          {anotherOption && (
            <button className="button-text mt-[20px] w-full text-[15px] font-bold">
              {anotherOption}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
