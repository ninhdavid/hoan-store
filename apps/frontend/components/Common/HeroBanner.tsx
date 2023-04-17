import Image from 'next/image';
import React from 'react';
import banner from '../../public/banner.jpg';
import Marquee from './Marquee';

type Props = {};
function HeroBanner(props: Props) {
  return (
    <div className="mt-[60px] lg:mt-[80px] h-[calc(100vh - 160px)]  ">
      <div className="relative">
        <Image src={banner} alt="banner" className="h-[calc(100vh - 160px)]" />
        <div className="absolute top-[70%] right-[50%] translate-x-[50%]">
          <button className="mt-10 flex items-center justify-center rounded-full border border-transparent bg-slate-100	px-8 py-3 text-base font-medium text-black hover:bg-slate-50	focus:outline-none motion-safe:animate-bounce">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="w-full h-[240px] flex items-center">
        <div className="w-full whitespace-nowrap overflow-hidden">
          <Marquee className="h-[160px]">
            <p className="text-center pl-5 text-5xl md:text-7xl lg:text-[84px] xl:text-8xl 2xl:text-9xl ">
              A{' '}
              <span className="-ml-3 pl-4 transition duration-300 hover:text-white hover:bg-black">
                Reusable{' '}
              </span>{' '}
              May of Living.{' '}
            </p>{' '}
            <p className="text-center pl-5 text-5xl md:text-7xl lg:text-[84px] xl:text-8xl 2xl:text-9xl ">
              A{' '}
              <span className="-ml-3 pl-4 transition duration-300 hover:text-white hover:bg-black">
                Reusable{' '}
              </span>{' '}
              May of Living.{' '}
            </p>{' '}
            <p className="text-center pl-5 text-5xl md:text-7xl lg:text-[84px] xl:text-8xl 2xl:text-9xl ">
              A{' '}
              <span className="-ml-3 pl-4 transition duration-300 hover:text-white hover:bg-black">
                Reusable{' '}
              </span>{' '}
              May of Living.{' '}
            </p>
            <p className="text-center pl-5 text-5xl md:text-7xl lg:text-[84px] xl:text-8xl 2xl:text-9xl ">
              A{' '}
              <span className="-ml-3 pl-4 transition duration-300 hover:text-white hover:bg-black">
                Reusable{' '}
              </span>{' '}
              May of Living.{' '}
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
