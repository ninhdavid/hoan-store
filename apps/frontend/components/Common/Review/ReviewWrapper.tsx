'use client';

import React, { useRef } from 'react'
import styled from 'styled-components';
import ReviewSlide from './ReviewSlide'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}
export type Reviews = {
  title?: string;
  description?: string;
  userName?: string;
  userId?: number;
};

const star = [1, 2, 3, 4, 5]

const reviews: Reviews[] = [
  { title: 'An absolutely beautiful shoe', description: 'i absolutely love the Chicago, this shoe is my favorite through. The colors are beautiful and it\'s', userName: 'Annoy', userId: 1 },
  { title: 'An absolutely beautiful shoe', description: 'i absolutely love the Chicago, this shoe is my favorite through. The colors are beautiful and it\'s', userName: 'Annoy', userId: 2 },
  { title: 'An absolutely beautiful shoe', description: 'i absolutely love the Chicago, this shoe is my favorite through. The colors are beautiful and it\'s', userName: 'Annoy', userId: 3 },
  { title: 'An absolutely beautiful shoe', description: 'i absolutely love the Chicago, this shoe is my favorite through. The colors are beautiful and it\'s', userName: 'Annoy', userId: 4 },
  { title: 'An absolutely beautiful shoe', description: 'i absolutely love the Chicago, this shoe is my favorite through. The colors are beautiful and it\'s', userName: 'Annoy', userId: 5 }
];



const ReviewWrapper = (props: Props) => {

  return (

    <main className="flex flex-col justify-between  items-center lg:flex-row xl:py-10">

      <section className='relative mb-5 lg:w-[25%] xl:w-[20%]'>
        <div className='flex flex-row items-center justify-center mb-3 xl:mb-4'>
          <div className='fill-green-400 w-7 h-7 '><svg viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" /></svg></div>
          <p className='text-lg font-semibold xl:text-xl'>Trustpilot</p>
        </div>
        <div className='flex justify-center items-center flex-row'>
          {star?.map((i) => {
            return <div key={i} className='w-7 h-7 rounded-sm bg-green-400 flex  items-center justify-center ml-1 '>
              <div className='fill-white text-white w-6 h-6 '><svg viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" /></svg></div>
            </div>
          })}
        </div>
        <div className=' flex flex-row justify-center items-center text-xs mt-2 xl:text-sm xl:mt-4'>
          <p className='relative border-r pr-2 border-gray-300 '>TrustScore <span className='font-semibold'> 4.5</span>
          </p>
          <p className='ml-2 underline '><span className='font-semibold'>1,023</span>reviews </p>
        </div>
      </section>

      <ReviewSlide data={reviews}/>

    </main>

  )
}

export default ReviewWrapper