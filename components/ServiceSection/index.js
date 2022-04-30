import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosPlay } from 'react-icons/io';
import classnames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import serviceThumb from '../../assets/service-thumb.png';
import Secure from '../../assets/services/secure.svg';
import Smart from '../../assets/services/smart.svg';
import shapePattern from '../../assets/shape-pattern1.png';
import HeaderFeature from '../HeaderFeature';

import styles from './service-section.module.scss';

const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

const data = {
  subTitle: 'our services',
  title: 'Business Goals Achieved with Design',
  features: [
    {
      id: 1,
      imgSrc: Smart,
      altText: 'Smart Features',
      title: 'Smart Features',
      text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: 'Secure Contents',
      title: 'Secure Contents',
      text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
    },
  ],
};

const ServiceSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setVideoOpen(true);
  };
  const isLg = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <section
      className={classnames('section-y overflow-hidden', styles.service)}
    >
      <div className="container flex flex-col items-start 2md:flex-row 2md:items-center justify-center 2md:justify-between">
        <div className="relative order-2 2md:order-none mx-auto 2md:mr-[30px] 2md:ml-0 lg:mr-[60px] 2lg:mr-[85px]">
          <Image
            src={serviceThumb}
            layout="raw"
            alt="Service Thumb"
            className="object-contain h-[310px] sm:h-auto relative z-[1]"
          />
          <button
            className="z-10 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[60px] h-[60px] 2md:w-[80px] 2md:h-[80px] 2lg:w-[100px] 2lg:h-[100px] text-[40px] 2md:text-[48px] 2lg:text-[62px] flex items-center justify-center text-white-fff after:absolute after:w-full after:h-full after:bg-[rgba(255,255,255,0.5)] after:rounded-full after:z-[2] before:absolute before:w-full before:h-full before:bg-primary before:opacity-50 before:rounded-full before:animate-videoBtnAnimation before:transition-all"
            aria-label="Play Button"
            onClick={handleClick}
          >
            <span className="relative z-[20]">
              <IoIosPlay />
            </span>
          </button>
          <div className="absolute w-[60%] top-[45%] -left-[15%] sm:top-[50%] sm:-left-[20%] 2md:w-[80%] 2md:top-[30%] 2md:-left-[35%]">
            <Image src={shapePattern} alt="Shape Pattern 1" layout="raw" />
          </div>
        </div>

        <div className="w-full 2md:w-[315px] lg:w-[390px] 2lg:w-[450px] 2xl:w-[500px] shrink-0 mb-[50px] md:mb-[60px] 2md:mb-0">
          <HeaderFeature
            title={data.title}
            subTitle={data.subTitle}
            className="mb-[35px]"
          />
          <div className="grid grid-cols-1 gap-y-[30px] gap-x-0 lg:gap-y-[35px]">
            {data.features?.map(({ id, imgSrc, altText, title, text }) => (
              <div key={id} className="flex items-start">
                <Image
                  src={imgSrc}
                  layout="raw"
                  alt={altText}
                  className="w-[45px] lg:w-[55px] shrink-0 mr-[15px] lg:mr-5"
                />
                <div className="flex flex-col w-full text-left -mt-[5px]">
                  <h3 className="text-[18px] text-headingSecondary leading-[1.4] font-bold mb-[4px] lg:mb-[10px]">
                    {title}
                  </h3>
                  <p className="text-[15px] 2md:text-[14px] font-normal leading-[1.5] lg:text-[15px] line-clamp-2 lg:line-clamp-3">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId="iGBERMGMIvc"
        onClose={() => setVideoOpen(false)}
        classNames={{
          modalVideo: 'modal-video',
          modalVideoClose: 'modal-video-close',
          modalVideoBody: 'modal-video-body',
          modalVideoInner: 'modal-video-inner',
          modalVideoIframeWrap: classnames(
            'modal-video-movie-wrap',
            isLg ? styles.videoWrapper : ''
          ).trim(),
          modalVideoCloseBtn: classnames(
            'modal-video-close-btn',
            isLg ? styles.videoBtnClose : ''
          ).trim(),
        }}
      />
    </section>
  );
};

export default ServiceSection;
