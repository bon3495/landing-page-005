import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Footer from '../Footer';
import Header from '../Header';
import classnames from 'classnames';

const Layout = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = ({ status }) => {
    if (status === Sticky.STATUS_FIXED) setIsSticky(true);
    else if (status === Sticky.STATUS_ORIGINAL) setIsSticky(false);
  };

  return (
    <>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header
          className={
            isSticky
              ? 'fixed bg-white-fff text-dark shadow-header py-[15px]'
              : 'unSticky'
          }
        />
      </Sticky>
      <main id="content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
