import React, { useRef, useState } from 'react';
import ScrollCard from '../ScrollCard';
import { useScroll, motion, AnimatePresence, Variants, useMotionValue } from 'framer-motion';
import ScrollImageFullWidth from '../ScrollScaleImgPhase2/ScrollImageFullWidth';
import useWindowSize from '@/lib/hooks/common/useWindowSize'
import { ScrollContext } from '@/Context/ScrollProvider';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    children?: React.ReactNode;
};

const textContentVariants  = {
    initial:{opacity:0, y:-300,
     },
    animate:{opacity:1,y:0,
        transition:{
            y:{duration:0.5,},
            opacity:{duration:0.5,},

        },
    },
    exit:{opacity:0,y:-300, transition: {duration:1}
    },
}

function ScrollWrapper(props: Props) {
    const [newStateLastCard, setNewStateLastCard] = useState(false)
    const windowSize = useWindowSize();

    const windowWidthSize = windowSize.width
    const { lastCardInView } = React.useContext(ScrollContext);

    if (lastCardInView) {
        setTimeout(() => setNewStateLastCard(true), 1000)
    } else {
        setTimeout(() => setNewStateLastCard(false), 1000)
    }
    const scrollContainerRef = useRef();
    const { scrollYProgress } = useScroll({
        target: scrollContainerRef,
        offset: ['start end', 'end start'],
    });
    const translateX1440 = windowWidthSize >= 1440 ? 'translate-x-[-60px]' : ''

    
    return (
        <main className=''>
            <section className="h-[5200px] overflow-clip -mx-6 md:-mx-[30px] lg:-mx-[48px] xl:-mx-[60px] 2xl:-mx-[120px]">
                <div className="h-full mt-[3vh] flex flex-col lg:relative lg:flex-row lg:justify-between">
                   <div className='lg:w-[35%] 2xl:w-[40%] '>
                        <AnimatePresence initial={false}>
                            {!lastCardInView && <motion.div
                                variants={textContentVariants}
                                initial='initial'
                                animate='animate'
                                exit='exit'

                                className={`h-full`}>
                                <div className="overflow-hidden md:mr-[-30px] lg:sticky lg:top-[20vh] lg:mr-[0] lg:w-[100%]">
                                    <div className="mb-[33vh] py-6 px-8 bg-slate-300 rounded-3xl md:rounded-r-none md:ml-24 md:pr-[30px] md:py-10 md:mb-[23vh] lg:rounded-r-3xl lg:ml-0 lg:px-[30px] lg:mb-[20vh] lg:bg-transparent xl:px-[60px] 2xl:mb-[15vh] 2xl:py-16 2xl:top-[25vh]">
                                        <p className="text-xs leading-4 mb-3 pl-3 xl:text-[11px] md:mb-4 md:pl-0 xl:leading-[14px] 2xl:mb-6">
                                            <span>/WHAT WE DO</span>
                                        </p>
                                        <p className="text-[38px] font-semibold flex flex-col mb-6 md:mb-8 2xl:mb-6 2xl:text-5xl">
                                            <span>Our cool</span>
                                            <span className="2xl:-translate-y-3">playgrounds</span>
                                        </p>
                                        <p className="text-base mb-3 md:mb-5 2xl:mb-8 2xl:text-lg">
                                            The world has new playgrounds of innovation. Web3 and Metaverse
                                            are new frontiers to explore. It gives new ambitions and it
                                            sparks imagination. We believe it needs craft, storytelling and
                                            culturally-relevant ideas. We help brands explore these spaces
                                            with a consistent story.
                                        </p>
                                        <button className="text-white  text-xl rounded-3xl w-[140px] h-[50px] bg-black 2xl:text-2xl 2xl:w-[160px]">
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>}
                        </AnimatePresence>
                       {lastCardInView &&  <div ></div>}
                   </div>
                    {/* Scroll card start*/}
                    <section
                        ref={scrollContainerRef}
                        className={`max-w-[100vw] overflow-clip ${translateX1440} 2xl:translate-x-[30px]   flex flex-col justify-center  lg:overflow-visible lg:justify-normal  md:mt-[20vh] lg:w-[60%] lg:mt-[40vh] xl:mt-[45vh] 2xl:w-[55%] 2xl:mt-[50vh] will-change-transform `}
                    >
                        {' '}
                        <ScrollCard
                            scrollYProgress={scrollYProgress}
                        />
                    </section>
                    {/* Scroll end start*/}

                    {props?.children}
                </div>
            </section>


        </main>
    );
}

export default ScrollWrapper;
