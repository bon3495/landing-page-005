import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const totalRating = Array.from(Array(5).keys()).map(idx => {
    if (idx < rating) {
      return (
        <li className="text-primary mr-[1px]" key={`rating-key${idx}`}>
          <FaStar />
        </li>
      );
    } else {
      return (
        <li className="text-rating-o mr-[1px]" key={`rating-key${idx}`}>
          <FaStar />
        </li>
      );
    }
  });

  return (
    <div className="mb-[5px] 2md:mb-[10px]">
      <ul className="pl-0 mb-0 flex items-center">{totalRating}</ul>
    </div>
  );
};

export default Rating;
