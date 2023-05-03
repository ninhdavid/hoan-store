import React, { useCallback, useRef,useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper'
import 'swiper/css/bundle';
import styled from 'styled-components';
import useWindowSize from '@/lib/hooks/common/useWindowSize';

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
    }
    .swiper-slide.swiper-slide-active {
        margin-right:12px;
        margin-left:12px;
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

    .swiper-button-next,
    .swiper-button-prev{
        padding:0 8px;
        width:44px;
        background-color:#dadada;
        border-radius:999px;
        filter: drop-shadow(0 0 0.15rem #999);

        &:hover{
            background-color:#fff;
        }
    }
    .swiper-button-next{
        margin-right:-16px;
    }
    .swiper-button-prev{
        margin-left:-16px;
    }
        .swiper-button-prev:after,
        .swiper-button-next:after{
            font-size:24px;
            border-radius:999px;     
            color:black;
        }
        .swiper-button-prev:after{
            margin-left:-2px;
        }
        .swiper-button-next:after{
            margin-right:-2px;
        }
    
    @media screen and (min-width: 768px){
        .swiper {
            margin:0 -30px;

        }
        .swiper-slide{
            transform: translateX(-19%)
        }
        .swiper-slide.swiper-slide-active {
            margin-right:10px;
            margin-left:10px;
        }
    }
    @media screen and (min-width:1024px) {
        .swiper {
            margin0-left:0px;
            margin-right:-48px;

            & .swiper-slide:first-child{margin-left:-72px}
        }
        .swiper-slide {

            &  img{
                margin-bottom:12px;
                height:300px;
                width:340px;
                object-fit:fill;
            }
        }
    }
    @media screen and (min-width:1280px) {
        .swiper {
            margin-right:-60px;

        }
    }
    @media screen and (min-width:1538px){       
        .swiper{
            margin-right:-80px;

            & .swiper-slide:first-child{margin-left:60px}
        }
        .swiper-slide {

            &  img{
                margin-bottom:16px;
                height:360px;
                width:400px;
                object-fit:fill;
            }
        }
    @media screen and (min-width:1920px){
        .swiper {
            margin-right:-140px;
        }
        .swiper-button-next {
            transform: translateX(120px)
        }
        .swiper-button-prev {
            transform: translateX(-60px)
        }
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
                navigation={{nextEl:'.swiper-button-next',
                            prevEl:'.swiper-button-prev',}}
                breakpoints={{
                    640:{
                        slidesPerView:"auto",
                        centeredSlides:true,
                    },
                    768:{
                        spaceBetween:8,
                        slidesPerView:2,
                        centeredSlides:false,
                        navigation:{nextEl:'.swiper-button-next',
                            prevEl:'.swiper-button-prev',}
                    },
                    1024:{
                        spaceBetween:6,
                        slidesPerView:2,

                    },
                    1536:{
                        spaceBetween:4,
                        slidesPerView:2.5,
                        centeredSlides:false,
                        navigation:{nextEl:'.swiper-button-next',
                            prevEl:'.swiper-button-prev',}
                    }
                }}
                
            >
                {props.children}
            </Swiper>
                <div className='swiper-button-prev ' ref={prevRef}></div>
                <div className='swiper-button-next ' ref={nextRef}></div>  
        </SwiperSlideStyled>
    );
}

export default SwiperWrapper;
