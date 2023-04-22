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
const texts = [
    { id: 1, first: 'A ', second: 'Reusable ', third: 'May of Living . ' },
    { id: 2, first: 'A ', second: 'Reusable ', third: 'May of Living . ' },
    { id: 3, first: 'A ', second: 'Reusable ', third: 'May of Living . ' },
    { id: 4, first: 'A ', second: 'Reusable ', third: 'May of Living . ' },
];

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
                    <button className="mt-10 flex items-center justify-center rounded-full border border-transparent bg-slate-100 px-8 py-3 text-base font-medium text-black hover:bg-slate-50	focus:outline-none motion-safe:animate-bounce">
                        SHOP NOW
                    </button>
                </div>
            </div>
            <div className="w-full mt-5 -mb-5 h-[80px] relative overflow-hidden md:mt-8 md:h-[120px] lg:h-[160px] xl:h-[200px] 2xl:h-[260px] ">
                <div className="h-full whitespace-nowrap flex items-center">
                    {/* dark mode: --color-lime: #aaff64*/}
                    {/* unique mode: --color-lime: #dadada*/}
                    <Marquee
                        direction="backward"
                        className="h-[120px] flex items-center -mb-1 md:-mb-4 lg:-mb-6 2xl:-mb-14"
                    >
                        {texts.map((text) => {
                            return (
                                <p
                                    key={text.id}
                                    className="text-center font-medium  pl-5 text-5xl md:text-7xl lg:text-[84px] xl:text-8xl xl:font-semibold  2xl:text-9xl 2xl:font-bold "
                                >
                                    {text.first}
                                    <SpanText className="text-transparent -ml-3 pl-4 transition duration-300 hover:text-white hover:bg-black">
                                        {text.second}
                                    </SpanText>
                                    {text.third}
                                </p>
                            );
                        })}
                    </Marquee>
                </div>
            </div>
            <div className="w-full -mt-5 h-[80px] relative overflow-hidden md:h-[120px] lg:h-[160px] xl:h-[200px] 2xl:h-[260px]">
                <div className="h-full whitespace-nowrap flex items-center">
                    <Marquee
                        direction="forward"
                        className="h-[120px] flex items-center -mt-1 md:-mt-4 lg:-mt-6 2xl:-mt-14"
                    >
                        {texts.map((text) => {
                            return (
                                <p
                                    key={text.id}
                                    className="text-center font-medium  pl-5 text-5xl md:text-7xl lg:text-[84px] xl:text-8xl  xl:font-semibold 2xl:text-9xl 2xl:font-bold  "
                                >
                                    {text.third.split(' ').reverse().join(' ')}
                                    <SpanText className="text-transparent pl-4 mx-1 transition duration-300 hover:text-white hover:bg-black">
                                        {text.second}
                                    </SpanText>
                                    {text.first}
                                </p>
                            );
                        })}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;
