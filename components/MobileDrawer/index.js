import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link as LinkScroll } from 'react-scroll';
import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
} from 'react-icons/fa';
import Drawer from '../Drawer';
import headerData from '../Header/header-data';

const socials = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    icon: <FaDribbble />,
  },
];

const MobileDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  };

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <button className="flex items-center justify-center shrink-0 w-[26px] cursor-pointer lg:hidden transition-all ease-in-out duration-200 hover:opacity-50">
          <IoMdMenu size="26px" />
        </button>
      }
      open={isDrawerOpen}
      toggleHandler={handleToggleDrawer}
      closeButton={<IoMdClose size="24px" color="#000" />}
      drawerStyle="w-full h-full bg-white-fff"
      closeBtnStyle="flex items-center justify-center absolute top-[25px] right-[30px] cursor-pointer z-[1] transition-all ease-in-out duration-300 hover:opacity-50"
    >
      <Scrollbars>
        <div className="w-full h-full px-[30px] pt-[100px] pb-10 flex flex-col">
          <ul className="flex flex-col items-start">
            {headerData.map(({ label, path }, idx) => (
              <li
                key={idx}
                className="w-full border-b-[1px] border-solid border-[#e8e5e5]"
              >
                <LinkScroll
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  key={idx}
                  onClick={() => setIsDrawerOpen(false)}
                  className="block py-[15px] text-base leading-[1.8] text-heading hover:text-secondary transition-all ease-in-out duration-300 font-medium cursor-pointer"
                  activeClass="!text-secondary"
                >
                  {label}
                </LinkScroll>
              </li>
            ))}
          </ul>
          <ul className="mt-auto flex items-center justify-center gap-x-6">
            {socials.map(({ path, icon }, idx) => (
              <li key={idx}>
                <a
                  href={path}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text hover:text-secondary transition-all ease-in-out duration-300 text-[14px] leading-tight"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Scrollbars>
    </Drawer>
  );
};

export default MobileDrawer;
