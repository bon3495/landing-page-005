import Image from 'next/image';
import React from 'react';
import HeaderFeature from '../HeaderFeature';
import coreFeatureImg from '../../assets/core-feature.png';
import shapePattern from '../../assets/shape-pattern2.png';

const CoreFeature = () => {
  return (
    <section className="section-y overflow-hidden">
      <div className="container flex flex-col 2md:flex-row justify-between items-center">
        <div className="shrink-0 px-0 md:px-[30px] 2md:px-0 2md:pr-[40px] lg:pr-0 text-center 2md:text-left w-full sm:w-[80%] 2md:w-[340px] lg:w-[400px] 2lg:w-[430px] 2xl:w-[485px] pb-[50px] 2md:pb-0 mx-auto 2md:mx-0">
          <HeaderFeature
            subTitle="Core features"
            title="Smart Jackpots that you may love this anytime & anywhere"
            description="Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
            btnName="Get Started"
            btnStyle="button-primary"
            url="/"
          />
        </div>
        <div className="relative mr-auto ml-auto lg:ml-[50px]">
          <Image
            src={coreFeatureImg}
            alt="Core Feature Image"
            layout="raw"
            className="object-contain h-[310px] sm:h-auto relative z-[1]"
          />
          <div className="absolute w-[60%] top-[45%] -right-[15%] sm:top-[50%] sm:-right-[20%] 2md:w-[80%] 2md:top-[30%] 2md:-right-[35%]">
            <Image src={shapePattern} alt="Shape Pattern 2" layout="raw" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeature;
