'use client';

import React,{useRef} from 'react'

import { IoStarOutline } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Virtual, Pagination } from 'swiper'
import { ReviewsStyled } from '@/styles/LandingPage/ReviewsStyled'
import { Reviews } from './ReviewWrapper'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    data?:Reviews[];
}

const ReviewSlide = (props: Props) => {
    
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className='w-full mt-5 lg:w-[70%] lg:relative lg:mr-5 xl:w-[75%]'>
        <div className='flex flex-col justify-between text-xs tracking-tight after:content-[""] after:border-t after:absolute after:left-[5%] after:translate-y-[-20px] after:w-[90%] after:h-[1px] after:border-gray-300  lg:after:hidden'>
          <p className='text-gray-400 font-semibold'>Showing our 5 stars reviews</p>
          <ReviewsStyled>

            <Swiper
              modules={[Pagination, Navigation]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}

              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1024: {
                  spaceBetween: 6,
                  slidesPerView: 3,
                },
                1536: {
                  spaceBetween: 8,
                  slidesPerView: 4,
                  grabCursor: true

                },
                1921: {
                  spaceBetween: 10,
                  slidesPerView: 5,
                  grabCursor: true

                }

              }}

            >

              {props?.data?.map((item) => {
                return <SwiperSlide key={item.userId} >
                  <div className='flex flex-col justify-between mb-10 lg:px-4 xl:text-sm xl:mb-[60px]'>
                    <p className='mt-4 text-base font-semibold xl:text-lg xl:mt-5'>{item.title}</p>
                    <p className='mt-3 '>{item.description}</p>
                    <p className='mt-3 text-gray-600 font-semibold lg:mt-4 xl:mt-5'>{item.userName}</p>
                  </div>
                </SwiperSlide>
              }
              )
              }
            </Swiper>
            <div className='swiper-button-prev ' ref={prevRef}></div>
            <div className='swiper-button-next ' ref={nextRef}></div>
          </ReviewsStyled>

        </div>
      </section>
  )
}

export default ReviewSlide