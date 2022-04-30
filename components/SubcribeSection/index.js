import React from 'react';

const SubscribeSection = () => {
  return (
    <section className="section-b pb-0">
      <div className="container">
        <div className="bg-primary text-center rounded-[10px] py-[60px] md:py-[80px]">
          <div className="w-full md:w-[540px] 2md:w-[600px] mx-auto -mt-[5px] px-[15px] sm:px-[25px]">
            <h2 className="text-[24px] md:text-[28px] 2lg:text-[32px] 2xl:text-[36px] text-white-fff leading-[1.3] 2md:leading-tight font-bold -tracking-[0.5px] md:-tracking-[1.5px] mb-[10px] sm:mb-[15px]">
              Subscribe to our Blog
            </h2>
            <p className="text-[15px] sm:text-[16px] 2lg:text-[17px] 2xl:text-[18px] text-white-fff leading-[1.85] 2md:leading-[2] px-0 md:px-[25px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod
              tempor incididunt labore dolore.
            </p>
            <form>
              <div className="flex items-center mt-[30px] 2md:mt-[50px] bg-[transparent] sm:bg-white-fff rounded-none sm:rounded-full overflow-hidden p-0 sm:p-[5px] flex-col sm:flex-row">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="border-0 rounded-full font-medium text-[14px] md:text-[16px] text-heading py-[5px] px-[20px] md:px-[30px] bg-white-fff sm:bg-[transparent] h-[52px] md:h-[48px] text-center sm:text-left outline-none w-full"
                />
                <button className="button-primary shrink-0 ml-0 sm:ml-[10px] bg-text sm:bg-primary mt-[10px] sm:mt-0 py-[17px] w-full sm:w-auto sm:px-[40px]">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
