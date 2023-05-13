'use client';
import styled from 'styled-components';
import Wrapper from '../components/Common/Wrapper/Wrapper';
import HeroBanner from '../components/Common/HeroBanner';
import CategoryCarousel from '@/components/Carousel/CategoryCarousel';
import ScrollCard from '@/components/Common/Scroll/ScrollCard';
import ScrollWrapper from '@/components/Common/Scroll/ScrollWrapper/ScrollWrapper';
import ScrollImageFullWidth from '@/components/Common/Scroll/ScrollScaleImgPhase2/ScrollImageFullWidth';
import ScrollWrapperPhase2 from '@/components/Common/Scroll/ScrollWrapper/ScrollWrapperPhase2';
import ScrollProvider from '@/Context/ScrollProvider';
import CollectionWrapper from '@/components/Common/Collection/CollectionWrapper';
import { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SplashScreen from '@/components/Common/Loader/SplashScreen';

const StyledPage = styled.div`
    z-index: 0;
`;

export function Home() {
    /*
     * Replace the elements below with your own.
     *
     * Note: The corresponding styles are in the ./index.styled-components file.
     */

    return (
        <main>
            <div className=" mx-auto">
                <HeroBanner />
                <StyledPage className="w-full">
                    <Wrapper className="scroll-smooth">
                        <CategoryCarousel></CategoryCarousel>
                        <CategoryCarousel
                            spanText
                            className="lg:-mt-5 lg:mb-[3vh] 2xl:-mt-20 2xl:mb-[4vh]"
                        ></CategoryCarousel>
                        <ScrollProvider>
                            <ScrollWrapper></ScrollWrapper>
                            <ScrollWrapperPhase2></ScrollWrapperPhase2>
                        </ScrollProvider>
                        <CollectionWrapper></CollectionWrapper>
                    </Wrapper>
                </StyledPage>
            </div>
        </main>
    );
}

export default Home;
