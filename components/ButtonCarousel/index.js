import React from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const ButtonCarousel = ({ next, previous }) => {
  return (
    <div className="w-full">
      <div className="container">
        <div className="flex justify-center items-center -mt-[20px] gap-x-[10px]">
          <button
            onClick={previous}
            aria-label="Previous"
            className="relative z-10 text-[40px] px-[2px] transition-all ease-in-out duration-300 text-muted hover:text-textSecondary focus:outline-0 cursor-pointer"
          >
            <IoIosArrowRoundBack />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="relative z-10 text-[40px] px-[2px] transition-all ease-in-out duration-300 text-muted hover:text-textSecondary focus:outline-0 cursor-pointer"
          >
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonCarousel;
