import React,{useRef} from 'react';
import ScrollImageFullWidth from './ScrollImageFullWidth';
import { MotionValue, useTransform,motion, useScroll } from 'framer-motion';
import useWindowSize from '@/lib/hooks/common/useWindowSize';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    scrollYProgress?: MotionValue<number>;
};

const ScrollScaleCardPhase2 = (props: Props) => {
    const windowSize = useWindowSize();

    const windowWidthSize = windowSize.width
    const containerRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ['start end' ,'end end']
    })


    
    const scaleXOutputWidth400 = windowWidthSize >= 540 ?['-100vw', '100vw'] :['35vw', '100vw']
    const scaleXOutputWidth768 = windowWidthSize > 768 ?['-90vw', '100vw'] :scaleXOutputWidth400
    const scaleXOutputWidth1440 = windowWidthSize > 1024 ?['-150vw', '100vw'] :scaleXOutputWidth768
    const scaleXOutputWidth1920= windowWidthSize>=1920 ? ['-110vw', '100vw'] : scaleXOutputWidth1440

    const scaleYOutputWidth400 = windowWidthSize >=540  ?['-75vh', '100vh'] :['-50vh', '100vh']
    const scaleYOutputWidth768 = windowWidthSize > 768 ?['-70vh', '100vh'] :scaleYOutputWidth400
    const scaleYOutputWidth1440 = windowWidthSize > 1024 ?['-120vh', '100vh'] :scaleYOutputWidth768
    const scaleYOutputWidth1920= windowWidthSize>=1920 ? ['-40vh', '100vh'] : scaleYOutputWidth1440

    const scaleX = useTransform(scrollYProgress, [0, 1], scaleXOutputWidth1920); //last card width phase 
    const scaleY = useTransform(scrollYProgress, [0, 1], scaleYOutputWidth1920); //last card height phase 2

    // const translateX4xx = useTransform(scrollYProgress, [0, 1], [0, 0]);
    // const translateX768 = useTransform(scrollYProgress, [0, 1], [50, 50]);
    // const translateX1024 = useTransform(scrollYProgress, [0, 1], [80, 80]);
    const translateX1440 = useTransform(scrollYProgress, [0, 1], [0, 0]);

    // const translateXMobile = windowWidthSize >1024 ? translateX768: translateX4xx
    // const translateXSmall =  windowWidthSize >1024 ? translateX1024: translateXMobile
    const translateX =  windowWidthSize >=1440 ? translateX1440:   null
    const translateXConditional = windowWidthSize < 1920   ? translateX : null ;

    const style={
        width:scaleX,
        height:scaleY,
        x: translateXConditional,
    }
    return (
        <section 
            ref={containerRef}
            className=" flex justify-center h-[2000px] overflow-clip mt-[-2400px] md:mt-[-2200px] lg:mt-[-720px] ">

                    <motion.div className=''>
                        <ScrollImageFullWidth style={style}/>
                    </motion.div>

        </section>
    );
};

export default ScrollScaleCardPhase2;
