'use client'
import React ,{useRef, useState}from 'react';
import ScrollImageFullWidth from '../ScrollScaleImgPhase2/ScrollImageFullWidth';
import { useScroll,motion,useInView } from 'framer-motion';
import ScrollScaleCardPhase2 from '../ScrollScaleImgPhase2/ScrollScaleCardPhase2';
import ReviewWrapper from '../../Review/ReviewWrapper';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const textVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 300, transition: { duration: 0.3 } },
}


function ScrollWrapperPhase2(props: Props) {
    const containerScrollRef = React.useRef(null)
    const {scrollYProgress} = useScroll({
        target: containerScrollRef,
        offset: ['start end' ,'end start']
    })

    return (
        <main className='w-full'>
        <section ref={containerScrollRef} className="relative h-[3000px] z-20 -mx-6 md:-mx-[30px] lg:-mx-[48px] xl:-mx-[60px] 2xl:-mx-[140px]">
                <ScrollScaleCardPhase2 scrollYProgress={scrollYProgress}/>
            </section>

                <motion.section          
                className=' relative z-30 mt-[-1200px]'>
                    <motion.div 
                    whileInView = {{opacity:1,y:0}}
                    initial={{opacity:0,y:200}}
                    transition={{duration:0.5, delay:0.5}}
                    className='z-30 bg-white min-h-[380px] rounded-3xl p-[30px] lg:h-[500px] '>
                            <ReviewWrapper ></ReviewWrapper>
                    </motion.div>
                </motion.section>
        </main>
    );
}

export default ScrollWrapperPhase2;
