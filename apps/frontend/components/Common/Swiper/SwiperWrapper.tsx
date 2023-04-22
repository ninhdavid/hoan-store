import React, { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper'
import 'swiper/css/bundle';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    children: React.ReactNode;
    className: string;
};
const SwiperSlideStyled = styled.div`
    .swiper {
        position:relative;
        margin: 0 -24px;
        padding: 0 24px;
        padding-top:10px;
        padding-bottom:40px;
        margin-bottom:40px;
        min-height: 320px;
        max-height:420px;
    }
    .swiper-slide.swiper-slide-active {
        margin-right:16px;
        margin-left:16px;
    }

    .swiper-slide {
        max-width: 65%;
        width:65%;
        transform: translateX(0%);
        transition: all 0.3s ease;
        
        &  img{
        border-radius:24px;
        height:220px
        }
    }
    .swiper-button-prev,
    .swiper-button-next{
        
    }

    @media screen and (min-width: 768px){
        .swiper-slide{
            transform: translateX(-19%)
        }
    }
`;
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
                breakpoints={{
                    768:{
                        slidesPerView:2,
                        centeredSlides:false,
                        navigation:{nextEl:'.swiper-button-next',
                            prevEl:'.swiper-button-prev'}
                    }
                }}
                
            >
                {props.children}
            </Swiper>
            <div className='swiper-button-prev' ref={prevRef}>prev</div>
            <div className='swiper-button-next' ref={nextRef}>next</div>
        </SwiperSlideStyled>
    );
}

export default SwiperWrapper;
