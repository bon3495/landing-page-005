import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MemberSection = ({
  imgSrc,
  altText,
  title,
  designation,
  socialProfile,
}) => {
  return (
    <div className="group flex flex-col relative items-center py-0 md:py-5 2md:py-[25px] lg:py-[30px] px-[10px] md:px-[30px] 2md:px-[50px] transition-all ease-in-out duration-300 rounded-[8px] md:hover:shadow-memberCard">
      <Image
        src={imgSrc}
        alt={altText}
        layout="raw"
        className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] 2lg:w-[130px] 2lg:h-[130px] shrink-0 rounded-full border-2 border-primary border-solid"
      />
      <div className="w-full text-center mt-[15px] md:mt-5 cursor-default">
        <h3 className="group-hover:text-primary transition-all ease-in-out duration-300 text-[15px] sm:text-[16px] md:text-[18px] 2lg:text-[20px] leading-tight sm:leading-[1.35] mb-[5px] font-bold line-clamp-1">
          {title}
        </h3>
        <p className="group-hover:text-primary transition-all ease-in-out duration-300 text-[14px] 2md:text-[16px] font-normal text-text leading-normal line-clamp-1">
          {designation}
        </p>
      </div>

      <div className="relative md:absolute group-hover:opacity-100 right-0 md:right-[30px] lg:right-[20px] 2lg:right-[30px] bottom-0 md:bottom-[18px] 2md:bottom-[25px] w-full md:w-auto flex flex-row md:flex-col items-center justify-center transition-all ease-in-out duration-300 opacity-100 md:opacity-0 pt-[10px]">
        {socialProfile.map(({ id, name, path, icon }) => (
          <Link href={path} key={id}>
            <a
              key={id}
              target="_blank"
              className={`${name} group-hover:my-0 group-hover:py-[0] md:group-hover:py-[5px] text-[12px] sm:text-[15px] 2md:text-[16px] text-text md:text-primary px-[10px] transition-all ease-in-out duration-300 hover:text-primary md:hover:text-text`}
            >
              {icon}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MemberSection;
