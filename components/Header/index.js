import classnames from 'classnames';
import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import headerLogo from '../../assets/logo.svg';
import ButtonCustom from '../ButtonCustom';
import Logo from '../Logo';
import MobileDrawer from '../MobileDrawer';
import headerData from './header-data';

const Header = ({ className }) => {
  return (
    <header
      className={classnames(
        className,
        'text-text font-normal py-5 max-w-full absolute top-0 left-0 bg-[transparent] ease-linear duration-300 animate-positionAnimation w-full'
      )}
      id="header"
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          <Logo src={headerLogo} alt="Nextjs Landing Page Logo" />
          <ul className="hidden lg:flex lg:items-center mx-auto gap-x-[50px]">
            {headerData.map(({ path, label }, idx) => (
              <li key={idx} className="">
                <LinkScroll
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  className="inline-block text-base leading-tight font-normal cursor-pointer transition-all ease-in-out duration-200 hover:text-primary"
                  activeClass="!text-primary"
                >
                  {label}
                </LinkScroll>
              </li>
            ))}
          </ul>
          <ButtonCustom className="button-secondary shrink-0 mr-[15px] sm:mr-5 lg:mr-0 ml-auto 2lg:ml-0">
            Get Started
          </ButtonCustom>
          <MobileDrawer />
        </nav>
      </div>
    </header>
  );
};

export default Header;
