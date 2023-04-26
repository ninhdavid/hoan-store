import React from 'react';
import ScrollImageFullWidth from '../ScrollScaleImgPhase2/ScrollImageFullWidth';
import { useScroll } from 'framer-motion';
import ScrollScaleCardPhase2 from '../ScrollScaleImgPhase2/ScrollScaleCardPhase2';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

function ScrollWrapperPhase2(props: Props) {
    const containerScrollRef = React.useRef()
    const {scrollYProgress} = useScroll({
        target: containerScrollRef,
        offset: ['start end' ,'end start']
    })

    
    
    return (
        <main>
            <section ref={containerScrollRef} className="h-[3000px] bg-slate-300 z-20 -mx-6 md:-mx-[30px] lg:-mx-[48px] xl:-mx-[60px] 2xl:-mx-[120px]">
                <ScrollScaleCardPhase2 scrollYProgress={scrollYProgress}/>
            </section>
        </main>
    );
}

export default ScrollWrapperPhase2;
