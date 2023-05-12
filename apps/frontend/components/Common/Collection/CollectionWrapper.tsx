'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import CollectionCard from './CollectionCard'
type Props = {
    children?: React.ReactNode
}

const CollectionWrapper = (props: Props) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    })

    const clipPath = useTransform(scrollYProgress, [0, 1], ['circle(0% at 0% 0%)', 'circle(166% at 0% 0%)'])
    const widthClipPath = useTransform(scrollYProgress, [0, 1], ['100%', '100%'])
    const style = {
        clipPath: clipPath,
        width: widthClipPath,
        transition: 'all linear',
    }
    return (
        <main
            ref={containerRef}
            className='h-[3200px] mt-[-300px] bg-white -mx-6 md:-mx-[30px] lg:-mx-[48px] xl:-mx-[60px] 2xl:-mx-[140px]'>
            <div className='flex h-full w-full '>
                <motion.div
                    style={style}
                    className='bg-black top-0 z-20 relative'>

                    <div className='absolute px-[24px] pt-[500px] pb-[200px] w-full h-full md:px-[30px] lg:px-[48px] lg:pt-[700px]'>
                        <CollectionCard ></CollectionCard>
                    </div>
                </motion.div>
            </div>

            {/* <div className='text-white h-[1000px]'></div>   */}
        </main>
    )
}

export default CollectionWrapper