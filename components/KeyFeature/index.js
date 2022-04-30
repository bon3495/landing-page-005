import React from 'react';
import HeaderSection from '../HeaderSection';
import FeatureCardColumn from './FeatureCardColumn';
import keyFeatureData from './keyfeature-date';

const KeyFeature = () => {
  return (
    <section id="feature" className="section-y">
      <div className="container">
        <HeaderSection
          title="Meet the feature of product"
          slogan="Whats the function"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full sm:w-[80%] md:w-full mx-auto gap-y-[35px] gap-x-0 md:gap-10 2md:gap-y-[50px] 2md:gap-x-[60px] lg:gap-[30px] 2lg:gap-y-[50px] 2lg:gap-x-[40px] xl:gap-y-[55px] xl:gap-x-[90px]">
          {keyFeatureData.map(({ id, imgSrc, altText, title, description }) => (
            <FeatureCardColumn
              key={id}
              src={imgSrc}
              alt={altText}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeature;
