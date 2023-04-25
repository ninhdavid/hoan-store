import React from 'react';
import SwiperWrapper from '../Common/Swiper/SwiperWrapper';
import { SwiperSlide } from 'swiper/react';
import ProductCard from '../Product/ProductCard';

/* eslint-disable-next-line */
type Props = {
    children?: React.ReactNode;
    className?: string;
};
const products = [
    {
        id: 1,
        name: 'Jordan 1 High OG Bred',
        color: 'red',
        price: 20000000,
        size: 28,
        quantity: 12,
        src: '/banner.jpg',
    },
    {
        id: 2,
        name: 'Jordan 1',
        color: 'blue',
        price: 20000,
        size: 28,
        quantity: 1,
        src: '/banner.jpg',
    },
    {
        id: 3,
        name: 'Jordan 1',
        color: 'yellow',
        price: 20000,
        size: 28,
        quantity: 1,
        src: '/banner.jpg',
    },
    {
        id: 4,
        name: 'Jordan 1',
        color: 'white',
        price: 20000,
        size: 28,
        quantity: 1,
        src: '/banner.jpg',
    },
    {
        id: 5,
        name: 'Jordan 1',
        color: 'green',
        price: 20000,
        size: 28,
        quantity: 1,
        src: '/banner.jpg',
    },
];
function CategoryCarousel(props: Props) {
    return (
        <div className={`md:flex md:flex-row md:pt-[80px] 2xl:pt-[100px] ${props?.className}`}>
            <div className="pb-10 mt-10 flex flex-col justify-between md:w-[50%] md:flex-1 md:pr-16 md:justify-normal 2xl:pr-[120px]">
                <p className="text-[38px] leading-normal mb-2 font-semibold md:mb-2 2xl:text-5xl 2xl:mb-8">Jordan 1</p>
                <p className="mb-5 md:text-sm 2xl:text-lg 2xl:mb-7">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque repellendus
                    saepe ducimus amet ipsa laboriosam nemo. Reprehenderit alias laborum, id non
                    dolorem, minima ea aperiam a amet voluptas repellat error.
                </p>
                <button className="text-white text-xl rounded-3xl mb-5 w-[140px] h-[50px] bg-black 2xl:text-2xl 2xl:w-[160px]">
                    Shop Now
                </button>
            </div>
            <div className='relative md:w-[50%] lg:w-[60%] 2xl:w-[60%]'>
                <p>image png -- background transparent.
                </p>
                <SwiperWrapper className="swiper">
                    {products.map((product) => {
                        return (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} className='flex flex-col justify-center items-center text-center' />
                            </SwiperSlide>
                        );
                    })}
                    {props?.children}
                </SwiperWrapper>
            </div>
        </div>
    );
}

export default CategoryCarousel;
