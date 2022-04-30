import Image from 'next/image';
import React from 'react';
import classnames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import ButtonCustom from '../ButtonCustom';
import bannerImg from '../../assets/banner-thumb.png';
import styles from './banner.module.scss';

const Banner = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 480px)',
  });

  return (
    <section
      id="home"
      className={classnames(
        'pt-[140px] sm:pt-[145px] md:pt-[155px] 2md:pt-[170px] xl:pt-[180px] 2xl:pt-[215px] relative z-10 pb-[10px] md:pb-0 lg:mb-[10px] 2lg:mb-0 2xl:mb-[25px]',
        styles.banner
      )}
    >
      <div className="container min-h-[inherit] flex flex-col justify-center">
        <div className="flex flex-col items-center text-center mx-auto w-full sm:w-[90%] md:w-[535px] lg:w-[57%] 2lg:w-[60%] xl:w-[68%] 2xl:w-[60%] mb-10 2lg:mb-[50px]">
          <h1 className="textHeading mb-5 2lg:mb-[25px]">
            Top Quality Digital Products To Explore
          </h1>
          <p className="textSecondary mb-[25px]">
            Get your blood tests delivered at let home collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </p>
          <ButtonCustom className="button-primary">Explore</ButtonCustom>
        </div>
        <div className="flex items-center justify-center">
          <Image
            layout="raw"
            src={bannerImg}
            alt="Banner"
            style={{
              objectFit: 'contain',
              height: isMobile ? 245 : 'auto',
              position: 'relative',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
