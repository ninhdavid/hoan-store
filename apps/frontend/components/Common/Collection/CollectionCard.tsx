import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../Button'
import useWindowSize from '@/lib/hooks/common/useWindowSize'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

const CollectionCard = (props: Props) => {
    const windowSize = useWindowSize();

    const windowWidthSize = windowSize.width
    return (
        <main className='h-full w-full'>
            <section className='overflow-hidden h-full w-full grid gap-y-[24px] md:gap-y-[30px] lg:gap-y-[48px] xl:grid-cols-11 xl:grid xl:grid-rows-6 xl:gap-y-[120px]'>
                <motion.div 
                whileTap={{opacity:0.9}}
                whileInView={{opacity:1 }}
                initial={{opacity:0}}
                transition={{ duration: 0.5, ease: "linear" }}
                className='relative rounded-3xl xl:rounded-lg xl:col-start-2 xl:row-start-1 xl:row-span-2 xl:col-span-4 bg-red-50'>
                    <motion.div
                        whileTap={{scale:0.95}}
                        className='cursor-pointer w-full h-full  '
                    >
                        <Image 
                        src='/banner.jpg' alt='banner' width={300} height={400} className='w-full h-full object-fill rounded-3xl' />
                    </motion.div>
                    <Button href={`/product/id`} rounded dark className='absolute right-[50%] translate-x-[50%] bottom-[20%]'><span>View Collection</span></Button>
                </motion.div>
                
                <motion.div 
                whileTap={{opacity:0.9}}
                whileInView={{opacity:1 }}
                initial={{opacity:0}}
                transition={{ duration: 0.5, ease: "linear" }}
                className='z-10 relative rounded-3xl xl:rounded-lg xl:col-start-7 xl:row-start-3 xl:row-span-2 xl:col-span-4 bg-red-50'>
                    <motion.div
                        whileTap={{scale:0.95}}
                        className='cursor-pointer h-full w-full'
                    >
                        <Image src='/banner.jpg' alt='banner' width={300} height={400} className='h-full w-full object-fit rounded-3xl' />
                    </motion.div>
                    <Button href={`/product/id`} rounded dark className='absolute right-[50%] translate-x-[50%] bottom-[20%]'><span>View Collection</span></Button>

                    <motion.div 
                    whileInView={{opacity:1,width:'1640px'}}
                    initial={{opacity:0,width:'0px'}}
                    transition={{ duration: 0.5, ease: "linear",delay:0.6}}
                    className='h-[2px] w-[1000px] bg-gradient-to-r from-transparent via-black via-40% to-[#aaff64] absolute top-0 left-0 translate-x-[-940px] translate-y-[-60px]'></motion.div>
                    
                    <motion.div 
                    whileInView={{opacity:1,width:'1640px'}}
                    initial={{opacity:0,width:'0px'}}
                    transition={{ duration: 0.6, ease: "linear",delay:0.9}}
                    className='h-[2px] w-[1000px] bg-gradient-to-l from-transparent via-black via-40% to-[#aaff64] absolute bottom-0 right-0 translate-x-[70px] translate-y-[60px]'></motion.div>

                </motion.div>

                <motion.div 
                whileTap={{opacity:0.9}}
                whileInView={{opacity:1 }}
                initial={{opacity:0}}
                transition={{ duration: 0.5, ease: "linear" }}
                className='relative rounded-3xl xl:rounded-lg xl:col-start-2 xl:row-start-5 xl:row-span-2 xl:col-span-4 bg-red-50'>
                    <motion.div
                        whileTap={{scale:0.95}}
                        className='cursor-pointer h-full w-full'
                    >
                        <Image src='/banner.jpg' alt='banner' width={300} height={400} className='h-full w-full object-fit rounded-3xl' />
                    </motion.div>
                    <Button href={`/product/id`} rounded dark  className='absolute right-[50%] translate-x-[50%] bottom-[20%]'><span>View Collection</span></Button>
                </motion.div>

                {windowWidthSize >=1280 && 
                <>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}  
                    initial={{opacity:0,x:810}}
                    transition={{ 
                        x: { type: "spring", stiffness: 300, damping: 22 },
                        duration: 0.6 ,delay:0.6 }}
                    className='flex flex-col justify-center items-center xl:col-start-7 xl:col-span-3 xl:row-start-1 xl:row-span-2 bg-gray-50'>
                        <div className='flex flex-col justify-center h-full w-full bg-green-500'>
                            <h1 className='text-[80px] font-extrabold text-white'>Text here</h1>
                            <h3></h3>
                        </div>
                    </motion.div>
    
                    <motion.div 
                    animate={{opacity:1,x:0 }}  
                    initial={{opacity:0,x:900}}
                    transition={{ 
                        x: { type: "spring", stiffness: 100, damping: 22 , duration: 0.6},
                        opacity:{duration:0.3},
                        delay:1 }}
                    className='flex flex-col justify-center items-center xl:col-start-3 xl:col-span-3 xl:row-start-3 xl:row-span-2 bg-gray-50'>
                <div className='flex flex-col justify-center items-end h-full w-full bg-green-500'>
                            <h1 className='text-[80px] font-extrabold text-white'>Text here</h1>
                            <h3></h3>
                        </div>
                    </motion.div>
    
                    <motion.div 
                    whileInView={{opacity:1,y:0}}  
                    initial={{opacity:0,y:300}}
                    transition={{ 
                        y: { type: "spring", stiffness: 200, damping: 22 },
                        duration: 0.6  ,delay:1 }}
                    className='flex flex-col justify-center items-center xl:col-start-7 xl:col-span-3 xl:row-start-5 xl:row-span-2 bg-gray-50'>
                        <div className='flex flex-col justify-center  h-full w-full bg-green-500'>
                            <h1 className='text-[80px] font-extrabold text-white'>Text here</h1>
                            <h3></h3>
                        </div>
                    </motion.div>
                </>}
            </section>
        </main>
    )
}

export default CollectionCard