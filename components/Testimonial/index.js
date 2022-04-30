import React from 'react';
import HeaderSection from '../HeaderSection';
import Carousel from 'react-multi-carousel';

import Avatar1 from '../../assets/testimonial/avatar1.png';
import Avatar2 from '../../assets/testimonial/avatar2.png';
import Avatar3 from '../../assets/testimonial/avatar3.png';
import Avatar4 from '../../assets/testimonial/avatar4.png';
import Rating from './components/Rating';
import Image from 'next/image';
import ButtonCarousel from '../ButtonCarousel';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};

const data = [
  {
    id: 1,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar1,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },
  {
    id: 2,
    title: 'Design Quality & performance',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar2,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 3,
    title: 'Layout and organized layers',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar3,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 4,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar4,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },
];

const Testimonial = () => {
  return (
    <section className="section-y overflow-hidden" id="testimonial">
      <div className="container">
        <HeaderSection slogan="Testimonial" title="Meet Client Satisfaction" />
      </div>
      <div className="flex justify-end flex-col items-end -mt-[30px] px-[15px]">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={5000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonCarousel />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map(
            ({ id, title, description, avatar, name, designation, review }) => (
              <div
                key={`testimonial--key${id}`}
                className="shadow-reviewCard transition-all ease-in-out duration-300 rounded-[6px] py-[30px] px-[20px] 2md:py-[35px] 2md:px-[30px] bg-white-fff text-left hover:shadow-reviewCardHover my-[30px] mx-[10px] sm:mx-[20px] md:mx-[15px] lg:mx-[20px] lg:mb-[40px]"
              >
                <Rating rating={review} />
                <h3 className="text-[15px] sm:text-[16px] font-bold mb-[15px] 2md:mb-[22px] text-text leading-[1.6] -tracking-[0.55px]">
                  {title}
                </h3>
                <p className="text-[15px] 2md:text-[16px] text-text font-normal leading-[1.85] md:leading-[2]">
                  {description}
                </p>
                <div className="flex items-center mt-[25px] 2md:mt-[33px]">
                  <div className="shrink-0 mr-[15px] 2md:mr-5 flex">
                    <Image
                      src={avatar}
                      alt={name}
                      layout="raw"
                      className="w-[55px] h-[55px] rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[15px] 2md:text-[16px] font-bold mb-[3px] text-text leading-[1.3]">
                      {name}
                    </h4>
                    <p className="text-primary text-[15px] leading-[1.4] font-medium">
                      {designation}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
