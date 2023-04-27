import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../Button'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

const CollectionCard = (props: Props) => {
    return (
        <main className='h-full w-full'>
            <section className='overflow-hidden h-full w-full grid 2xl:grid-cols-11 2xl:grid 2xl:grid-rows-6 2xl:gap-y-[120px]'>
                <motion.div 
                whileTap={{opacity:0.9}}
                whileInView={{opacity:1 }}
                initial={{opacity:0}}
                transition={{ duration: 0.5, ease: "linear" }}
                className='relative rounded-lg 2xl:col-start-2 2xl:row-start-1 2xl:row-span-2 2xl:col-span-4 bg-red-50'>
                    <motion.div
                        whileTap={{scale:0.95}}
                        className='cursor-pointer w-full h-full'
                    >
                        <Image 
                        src='/banner.jpg' alt='banner' width={300} height={400} className='w-full h-full object-fill' />
                    </motion.div>
                    <Button href={`/product/id`} rounded dark className='absolute right-[50%] translate-x-[50%] bottom-[20%]'><span>View Collection</span></Button>
                </motion.div>
                
                <motion.div 
                whileTap={{opacity:0.9}}
                whileInView={{opacity:1 }}
                initial={{opacity:0}}
                transition={{ duration: 0.5, ease: "linear" }}
                className='z-10 relative rounded-lg 2xl:col-start-7 2xl:row-start-3 2xl:row-span-2 2xl:col-span-4 bg-red-50'>
                    <motion.div
                        whileTap={{scale:0.95}}
                        className='cursor-pointer h-full w-full'
                    >
                        <Image src='/banner.jpg' alt='banner' width={300} height={400} className='h-full w-full object-fit' />
                    </motion.div>
                    <Button href={`/product/id`} rounded dark className='absolute right-[50%] translate-x-[50%] bottom-[20%]'><span>View Collection</span></Button>
                </motion.div>

                <motion.div 
                whileTap={{opacity:0.9}}
                whileInView={{opacity:1 }}
                initial={{opacity:0}}
                transition={{ duration: 0.5, ease: "linear" }}
                className='relative rounded-lg 2xl:col-start-2 2xl:row-start-5 2xl:row-span-2 2xl:col-span-4 bg-red-50'>
                    <motion.div
                        whileTap={{scale:0.95}}
                        className='cursor-pointer h-full w-full'
                    >
                        <Image src='/banner.jpg' alt='banner' width={300} height={400} className='h-full w-full object-fit' />
                    </motion.div>
                    <Button href={`/product/id`} rounded dark  className='absolute right-[50%] translate-x-[50%] bottom-[20%]'><span>View Collection</span></Button>
                </motion.div>

                <motion.div 
                whileInView={{opacity:1,x:0}}  
                initial={{opacity:0,x:500}}
                transition={{ 
                    x: { type: "spring", stiffness: 300, damping: 22 },
                    duration: 0.5  ,delay:0.5 }}
                className='flex flex-col justify-center items-center 2xl:col-start-7 2xl:col-span-3 2xl:row-start-1 2xl:row-span-2 bg-gray-50'>
                    <div className='flex flex-col justify-center h-full w-full bg-green-500'>
                        <h1 className='text-[80px] font-extrabold text-white'>Text here</h1></div>
                </motion.div>

                <motion.div 
                whileInView={{opacity:1,x:0}}  
                initial={{opacity:0,x:300}}
                transition={{ 
                    x: { type: "spring", stiffness: 100, damping: 22 , duration: 0.8},
                    opacity:{duration:0.3},
                    delay:1 }}
                className='flex flex-col justify-center items-center 2xl:col-start-3 2xl:col-span-3 2xl:row-start-3 2xl:row-span-2 bg-gray-50'>
            <div className='flex flex-col justify-center items-end h-full w-full bg-green-500'>
                        <h1 className='text-[80px] font-extrabold text-white'>Text here</h1></div>
                </motion.div>

                <motion.div 
                whileInView={{opacity:1,y:0}}  
                initial={{opacity:0,y:300}}
                transition={{ 
                    y: { type: "spring", stiffness: 200, damping: 22 },
                    duration: 0.5  ,delay:0.8 }}
                className='flex flex-col justify-center items-center 2xl:col-start-7 2xl:col-span-3 2xl:row-start-5 2xl:row-span-2 bg-gray-50'>
                    <div className='flex flex-col justify-center  h-full w-full bg-green-500'>
                        <h1 className='text-[80px] font-extrabold text-white'>Text here</h1></div>
                </motion.div>
            </section>
        </main>
    )
}

export default CollectionCard