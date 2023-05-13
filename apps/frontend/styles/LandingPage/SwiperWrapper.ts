import styled from 'styled-components';

export const SwiperSlideStyled = styled.div`
    .swiper {
        position: relative;
        margin: 0 -24px;
        padding: 0 24px;
        padding-top: 10px;
        padding-bottom: 40px;
        margin-bottom: 40px;
        min-height: 320px;
    }
    .swiper-slide.swiper-slide-active {
        margin-right: 12px;
        margin-left: 12px;
    }
    .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-next) {
        filter: blur(2px);
    }
    .swiper-slide {
        max-width: 65%;
        width: 65%;
        transform: translateX(0%);
        transition: all 0.3s ease;

        & img {
            border-radius: 24px;
            height: 220px;
        }
    }

    .swiper-button-next,
    .swiper-button-prev {
        padding: 0 8px;
        width: 44px;
        background-color: #dadada;
        border-radius: 999px;
        filter: drop-shadow(0 0 0.15rem #999);

        &:hover {
            background-color: #fff;
        }
    }
    .swiper-button-next {
        margin-right: -16px;
    }
    .swiper-button-prev {
        margin-left: -16px;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
        font-size: 24px;
        border-radius: 999px;
        color: black;
    }
    .swiper-button-prev:after {
        margin-left: -2px;
    }
    .swiper-button-next:after {
        margin-right: -2px;
    }

    @media screen and (min-width: 768px) {
        .swiper {
            margin: 0 -30px;
        }
        .swiper-slide {
            transform: translateX(-19%);
        }
        .swiper-slide.swiper-slide-active {
            margin-right: 10px;
            margin-left: 10px;
        }
    }
    @media screen and (min-width: 1024px) {
        .swiper {
            margin0-left: 0px;
            margin-right: -48px;
            border-radius: 24px;

            & .swiper-slide:first-child {
                margin-left: -72px;
            }
        }
        .swiper-slide {
            & img {
                margin-bottom: 12px;
                height: 300px;
                width: 340px;
                object-fit: fill;
            }
        }
    }
    @media screen and (min-width: 1280px) {
        .swiper {
            margin-right: -60px;
        }
    }
    @media screen and (min-width: 1440px) {
        .swiper {
            & .swiper-slide:first-child {
                margin-left: -80px;
            }
        }
        .swiper-slide.swiper-slide-active {
            margin-right: 0px;
            margin-left: 0px;
        }
        .swiper-button-next {
            transform: translateX(20px);
        }
    }
    @media screen and (min-width: 1538px) {
        .swiper {
            margin-right: -80px;

            & .swiper-slide:first-child {
                margin-left: 60px;
            }
        }
        .swiper-slide {
            & img {
                margin-bottom: 16px;
                height: 360px;
                width: 400px;
                object-fit: fill;
            }
        }
        @media screen and (min-width: 1920px) {
            .swiper {
                margin-right: -140px;
                & .swiper-slide:first-child {
                    margin-left: 50px;
                }
            }
            .swiper-button-next {
                transform: translateX(120px);
            }
            .swiper-button-prev {
                transform: translateX(-50px);
            }
            .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-next) {
                filter: blur(0px);
            }
        }
    }
`;
