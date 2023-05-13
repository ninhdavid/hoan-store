'use client';

import React, { useCallback, useRef, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// import 'swiper/css/bundle';
import styled from 'styled-components';
import useWindowSize from '@/lib/hooks/common/useWindowSize';
import { SwiperSlideStyled } from '@/styles/LandingPage/SwiperWrapper';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    children: React.ReactNode;
    className: string;
};
function SwiperWrapper(props: Props) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <SwiperSlideStyled>
            <Swiper
                modules={[Navigation]}
                className={props.className}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                slideActiveClass="swiper-slide-active"
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                breakpoints={{
                    640: {
                        slidesPerView: 'auto',
                        centeredSlides: true,
                    },
                    768: {
                        spaceBetween: 8,
                        slidesPerView: 2,
                        centeredSlides: false,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    },
                    1024: {
                        spaceBetween: 6,
                        slidesPerView: 2,
                    },
                    1440: {
                        spaceBetween: 12,
                        slidesPerView: 3,
                    },
                    1536: {
                        spaceBetween: 12,
                        slidesPerView: 3,
                        centeredSlides: false,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    },
                }}
            >
                {props.children}
            </Swiper>
            <div className="swiper-button-prev " ref={prevRef}></div>
            <div className="swiper-button-next " ref={nextRef}></div>
        </SwiperSlideStyled>
    );
}

export default SwiperWrapper;
