import Image from 'next/image';
import React, { useRef } from 'react';
import banner from '../../public/hero-gif.webp';
import Marquee from './Marquee';
import styled from 'styled-components';
import useOnScreen from '@/lib/hooks/common/useOnScreen';
import { SpanText } from '@/styles/LandingPage/Header/Hero/SpanTextStyled';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const texts = [
    { id: 1, first: 'A ', second: 'Reusable ', third: 'May of Living . ' },
    { id: 2, first: 'A ', second: 'Reusable ', third: 'May of Living . ' },
    { id: 3, first: 'A ', second: 'Reusable ', third: 'May of Living . ' },
    { id: 4, first: 'A ', second: 'Reusable ', third: 'May of Living . ' },
];

function HeroBanner(props: Props) {
    const textRef= useRef<HTMLDivElement|null>(null)
    const isIntersecting = useOnScreen(textRef, 0.2)
    
    // const memoizedIsIntersecting = React.useMemo(() => isIntersecting, [isIntersecting]); 
    

    return (
        <div className="w-full mt-[60px] lg:mt-20 ">
            <div className="relative  mx-auto">
                <Image
                    src='/hero-gif.webp'
                    alt="hero-banner"
                    width={800}
                    height={450}
                    className="h-[calc(100dvh-60px)] object-cover w-full lg:h-[calc(100dvh-80px)] xl:h-[calc(100vh-80px)]"
                />
                <div className="absolute top-[70%] right-[50%] translate-x-[50%]">
                    <button className="mt-10 flex items-center justify-center rounded-full border border-transparent bg-slate-100 px-8 py-3 text-base font-medium text-black hover:bg-slate-50	focus:outline-none motion-safe:animate-bounce">
                        SHOP NOW
                    </button>
                </div>
            </div>
            { <div ref={textRef}>
                <div className="w-full mt-5 -mb-5 h-[80px] relative overflow-hidden md:mt-8 md:h-[120px] lg:h-[160px] xl:h-[200px] 2xl:h-[260px] ">
                    <div className="h-full whitespace-nowrap flex items-center">
                        {/* dark mode: --color-lime: #aaff64*/}
                        {/* unique mode: --color-lime: #dadada*/}
                        <Marquee 
                            isIntersecting={isIntersecting}
                            direction="backward"
                            className="h-[120px] flex items-center -mb-1 md:-mb-4 lg:-mb-6 xl:-mb-10 2xl:-mb-20"
                        >
                            {texts.map((text) => {
                                return (
                                    <p
                                        key={text.id}
                                        className="text-center font-medium  pl-5 text-5xl md:text-6xl lg:text-7xl xl:font-semibold  2xl:text-8xl 2xl:font-bold "
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
                            isIntersecting={isIntersecting}
                            direction="forward"
                            className="h-[120px] flex items-center -mt-1 md:-mt-4 lg:-mt-6 xl:-mt-10 2xl:-mt-20"
                        >
                            {texts.map((text) => {
                                return (
                                    <p
                                        key={text.id}
                                        className="text-center font-medium  pl-5 text-5xl md:text-6xl lg:text-7xl  xl:font-semibold 2xl:text-8xl 2xl:font-bold  "
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
            </div>}
        </div>
    );
}

export default HeroBanner;
