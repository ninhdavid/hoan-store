import Image from 'next/image';
import React from 'react';
import banner from '../../public/banner.jpg';
import Marquee from './Marquee';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const SpanText = styled.span`
    text-shadow: none;
    -webkit-text-stroke-color: #000;
    -webkit-text-stroke-width: 1px;
}
`;
function HeroBanner(props: Props) {
  return (
    <div className="w-full  h-[calc(100vh - 160px)]  ">
      <div className="relative  mx-auto">
        <Image
          src={banner}
          alt="banner"
          className="h-[calc(100vh - 160px)] object-cover w-full"
        />
        <div className="absolute top-[70%] right-[50%] translate-x-[50%]">
          <button className="mt-10 flex items-center justify-center rounded-full border border-transparent bg-slate-100	px-8 py-3 text-base font-medium text-black hover:bg-slate-50	focus:outline-none motion-safe:animate-bounce">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="w-full h-[140px] relative overflow-hidden lg:h-[180px] xl:h-[240px] 2xl:h-[300px]">
        <div className="h-full whitespace-nowrap flex items-center">
          <Marquee className="h-[120px] flex items-center ">
            <p className="text-center  pl-5 text-5xl md:text-7xl lg:text-[84px] xl:text-8xl 2xl:text-9xl ">
              A{' '}
              <SpanText className="text-transparent -ml-3 pl-4 transition duration-300 hover:text-white hover:bg-black">
                Reusable{' '}
              </SpanText>{' '}
              May of Living.{' '}
            </p>{' '}
            <p className="text-center  pl-5 text-5xl md:text-7xl lg:text-[84px] xl:text-8xl 2xl:text-9xl ">
              A{' '}
              <SpanText className="text-transparent -ml-3 pl-4 transition duration-300 hover:text-white hover:bg-black">
                Reusable{' '}
              </SpanText>{' '}
              May of Living.{' '}
            </p>{' '}
            <p className="text-center  pl-5 text-5xl md:text-7xl lg:text-[84px] xl:text-8xl 2xl:text-9xl ">
              A{' '}
              <SpanText className="text-transparent -ml-3 pl-4 transition duration-300 hover:text-white hover:bg-black">
                Reusable{' '}
              </SpanText>{' '}
              May of Living.{' '}
            </p>
            <p className="text-center  pl-5 text-5xl md:text-7xl lg:text-[84px] xl:text-8xl 2xl:text-9xl ">
              A{' '}
              <SpanText className="text-transparent -ml-3 pl-4 transition duration-300 hover:text-white hover:bg-black">
                Reusable{' '}
              </SpanText>{' '}
              May of Living.{' '}
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
