import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import footerData from './footer-data';
import FooterLogo from '../../assets/logo.svg';

const Footer = () => {
  const { widgets, menuItem } = footerData;
  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 2md:grid-cols-3 py-[80px] md:py-[100px] px-[20px] sm:px-0 md:px-[15px] lg:px-[35px] 2lg:px-[120px] w-full sm:w-[80%] md:w-full mx-auto gap-y-[40px] md:gap-y-[45px] md:gap-x-[30px] lg:gap-y-[60px] 2lg:gap-y-[50px] 2lg:gap-x-[90px]">
          {widgets.map(({ id, iconSrc, altText, title, description }) => (
            <div key={`footer-widget--key${id}`} className="text-center">
              <div className="flex items-center justify-center">
                <Image src={iconSrc} alt={altText} layout="raw" />
              </div>
              <div className="mt-[10px] sm:mt-[15px] 2md:mt-[10px] lg:mt-[20px] -mb-[5px]">
                <h3 className="text-[18px] 2md:text-[16px] lg:text-[18px] 2lg:text-[20px] text-heading leading-[1.4] font-bold mb-[10px] lg:mb-[15px]">
                  {title}
                </h3>
                <p className="text-[15px] font-normal leading-[2]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-[1px] border-solid border-backgroundSecondary flex pt-[50px] md:pt-[80px] pb-[40px] md:pb-[100px] text-center flex-col">
          <Link href="/">
            <a className="mx-auto">
              <Image src={FooterLogo} alt="Logo" layout="raw" />
            </a>
          </Link>
          <div className="my-[25px] sm:my-[35px]">
            <nav className="flex items-center justify-center flex-wrap gap-y-[10px]">
              {menuItem.map(({ path, label }) => (
                <Link key={label} href={path}>
                  <a className="text-[15px] text-text font-normal transition-all ease-in-out duration-300 leading-normal md:leading-[1.8] px-[10px] md:px-[20px] hover:text-primary">
                    {label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
          <p className="text-[15px] w-full text-center">
            Copyright by {new Date().getFullYear()} RedQ, Inc
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
