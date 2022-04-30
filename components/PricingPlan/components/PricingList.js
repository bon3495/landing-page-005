import React from 'react';
import classnames from 'classnames';

const PricingList = ({ items }) => {
  return (
    <ul className="flex flex-col">
      {items.map(({ id, icon, text }) => (
        <li
          key={id}
          className="flex items-center text-[15px] leading-[1.75] sm:leading-[1.6] mb-[15px]"
        >
          <span className="w-[25px] sm:w-[35px] h-auto text-primary p-0 text-[18px] sm:text-[22px] -ml-[1px] shrink-0 justify-start">
            {icon}
          </span>
          <span className="line-clamp-1">{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default PricingList;
