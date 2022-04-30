import React from 'react';
import classnames from 'classnames';
import HeaderSection from '../HeaderSection';

import styles from './workflow.module.scss';

const data = [
  {
    id: 1,
    title: 'Set disbursement Instructions',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    title: 'Assembly retrieves funds from your account',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    title: 'Assembly initiates disbursement',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    title: 'Customer receives funds payment',
    text: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

const WorkFlow = () => {
  return (
    <section
      id="workflow"
      className={classnames('section-y bg-primary', styles.workflow)}
    >
      <div className="container">
        <HeaderSection
          slogan="Whats the function"
          title="Let’s see how it works"
          isWhite
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[35px] md:gap-y-[45px] md:gap-x-[30px] lg:gap-y-[50px] lg:gap-x-[25px] 2xl:gap-x-[65px]">
          {data.map(({ id, title, text }, idx) => (
            <div
              key={id}
              className={classnames(
                'flex flex-col relative text-center md:text-left w-full sm:w-[80%] md:w-full mx-auto px-[15px] 2md:px-0',
                styles.workflowStep
              )}
            >
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] 2lg:w-[70px] 2lg:h-[70px] shrink-0 rounded-[15px] md:rounded-[23px] 2lg:rounded-[30px] bg-white-fff flex items-center justify-center mb-[25px] 2lg:mb-[30px] mx-auto text-[24px] md:text-[28px] 2lg:text-[30px] font-bold text-textSecondary">
                {`${idx + 1}`.padStart(2, 0)}
              </div>
              <div className="w-full flex flex-col -mt-[5px] grow">
                <h3 className="font-medium text-[18px] md:text-[20px] 2lg:text-[22px] text-white-fff leading-[1.4] 2lg:leading-[1.55] mb-[10px] sm:mb-[15px] line-clamp-2 2lg:line-clamp-none">
                  {title}
                </h3>
                <p className="mt-auto line-clamp-3 2lg:line-clamp-none text-[15px] font-normal leading-[1.85] 2md:leading-[1.9] lg:leading-[2] text-white-fff opacity-75 2lg:text-justify">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
