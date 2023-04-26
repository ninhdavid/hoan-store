import images from '@/public/assets/images';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {motion, MotionValue , useTransform , useInView, AnimatePresence } from 'framer-motion'
import useWindowSize from '@/lib/hooks/common/useWindowSize';
import ScrollImageFullWidth from './ScrollScaleImgPhase2/ScrollImageFullWidth';
import { ScrollContext } from '../../../Context/ScrollProvider';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    className?: string;
    scrollYProgress?:MotionValue<number>;
    setLastCardOutView?:React.Dispatch<React.SetStateAction<boolean>>;
    lastCardOutView?:boolean;
};
interface ScrollCardContentProps {
    index?:number;
    scrollYProgress?: number;
    x?:number|string,
    y?:number|string,
}
const products = [
    {
        id: 1,
        name: 'Jordan 1 High OG Bred',
        color: 'red',
        price: 20000000,
        size: 28,
        quantity: 12,
        src: '/banner.jpg',
        description:'This is new feature',
        subtitle:'Jordan 1'
    },
    {
        id: 2,
        name: 'Jordan 1',
        color: 'blue',
        price: 20000,
        size: 28,
        quantity: 1,
        src: '/banner.jpg',
        description:'This is new feature',
        subtitle:'Jordan 1'
    },
    {
        id: 3,
        name: 'Jordan 1',
        color: 'yellow',
        price: 20000,
        size: 28,
        quantity: 1,
        src: '/banner.jpg',
        description:'This is new feature',
        subtitle:'Jordan 1'
    },
    {
        id: 4,
        name: 'Jordan 1',
        color: 'white',
        price: 20000,
        size: 28,
        quantity: 1,
        src: '/banner.jpg',
        description:'This is new feature',
        subtitle:'Jordan 1'
    },
    {
        id: 5,
        name: 'Jordan 1',
        color: 'green',
        price: 20000,
        size: 28,
        quantity: 1,
        src: '/banner.jpg',
        description:'This is new feature',
        subtitle:'Jordan 1'
    },
];
const variables ={
    idxLength: 4
}

const ScrollCardContent = styled.div<ScrollCardContentProps>`
    top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3.5 + 10}vh` : '25vh'};
    left: ${(props) => props.index % 2 === 0 ? 
    props.index === 0 ? `${(props.index +3) * 3}vw`:`${(props.index +2.5) * 3}vw`: 
    props.index === 1 ? `${props.index * 5}vw`:`${props.index * 3}vw`};

    .text-upright{
        writing-mode: vertical-rl;
        text-orientation: mixed;    
    }

    @media screen and (min-width: 768px){
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3.5 + 12}vh` : '30vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index +3) * 10}%`:`${(props.index + 9) * 3}%`: 
            props.index === 1 ? `${props.index * 25}%`:`${props.index * 7}%`};        
    }
    
    @media screen and (min-width: 1024px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 2   + 15}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 5 ) * 110}px`:`${(props.index + 4.5) * 90}px`: 
            props.index === 1 ? `${props.index * 510}px`:`${props.index * 160}px`};   
            left:${(props) => props.index ===variables.idxLength ? '620px': ''};
    }
            

    @media screen and (min-width:1280px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 2.5 + 15}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 6 ) * 110}px`:`${(props.index + 5.75) * 90}px`: 
            props.index === 1 ? `${props.index * 610}px`:`${props.index * 190}px`};   
            left:${(props) => props.index ===variables.idxLength ? '740px': ''};
    }
    @media screen and (min-width:1440px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3 + 17}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 7 ) * 110}px`:`${(props.index + 6.2) * 100}px`: 
            props.index === 1 ? `${props.index * 740}px`:`${props.index * 235}px`};   
            left:${(props) => props.index ===variables.idxLength ? '860px': ''};
    }
    @media screen and (min-width:1536px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3 + 17}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 8 ) * 105}px`:`${(props.index + 6.8) * 100}px`: 
            props.index === 1 ? `${props.index * 800}px`:`${props.index * 255}px`};   
            left:${(props) => props.index ===variables.idxLength ? '920px': ''};
    }
    @media screen and (min-width:1910px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3 + 10}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 10) * 110}px`:`${(props.index + 9.5) * 100}px`: 
            props.index === 1 ? `${props.index * 1050}px`:`${props.index * 335}px`};   
        left:${(props) => props.index ===variables.idxLength ? '1200px': ''};

    }
    @media screen and (min-width:2200px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3 + 15}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 15.5) * 100}px`:`${(props.index + 14) * 100}px`: 
            props.index === 1 ? `${props.index * 1500}px`:`${props.index * 480}px`};   
        left:${(props) => props.index ===variables.idxLength ? '1750px': ''};
    }


`


const ImageFadeOutVariants = {
    initial:{opacity:1, },
    animate:{opacity:0,transition:{duration:0.4}},
    exit:{opacity:1,},
}

const ScrollCard = (props: Props) => {
    const {lastCardOutView,setLastCardOutView,lastCardInView, setLastCardInView} = React.useContext(ScrollContext)

    const windowSize = useWindowSize();

    const windowWidthSize = windowSize.width

    const lastScrollCardContentRef = useRef(null);
    const lastImageCardRef = useRef(null);

    
    // Card Animation case
    const getAnimation = (index:number) => {
        switch (index) {
          case 0:
            return {animateXValue:firstXValue,animateYValue:firstYValue}
          case 1:
            return {animateXValue:secondXValue,animateYValue:secondYValue };
          case 2:
            return {animateXValue:thirdXValue,animateYValue:thirdYValue };
          case 3:
            return {animateXValue: fourthXValue,animateYValue: fourthYValue };
          case 4:
            return {animateXValue:lastXValue,animateYValue:lastYValue };
          default:
            return {};
        }
      };
  useEffect(()=>{
    const lastScrollImageContent = lastImageCardRef.current;
    const handleScrollView = () => { 
        const { top}  = lastScrollImageContent.getBoundingClientRect()
        const lastCardOutView = top <= 0
        if(lastCardOutView) {
            setLastCardOutView(false)
        }else{
            setLastCardOutView(true)
        }
    }
     
    window.addEventListener('scroll', handleScrollView);
    
    return () => {
        window.removeEventListener('scroll', handleScrollView);
       
    };
  },[])

    useEffect(() => {
    const lastScrollCardContent = lastScrollCardContentRef.current;
    const handleScroll = () => {
        const { offsetTop } = lastScrollCardContent;
        const { height ,top,bottom}  = lastScrollCardContent.getBoundingClientRect()
            const scrollPosition = window.pageYOffset||window.scrollY;
            const isLastScrollCardContentInView =
              offsetTop >= document.body.scrollHeight - scrollPosition -500
            //   console.log(document.body.scrollHeight - scrollPosition  , 'offset', offsetTop);
            if (isLastScrollCardContentInView) {
            setLastCardInView(true)
            
            }else{
            setLastCardInView(false)

            }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


    // Card Animation X-axis output values
    const firstWidth768= windowWidthSize >=640? ['0%','0%','0%','10%','10%']:['0%','0%','8%','8%','8%']
    const firstWidth1024 = windowWidthSize >769? ['0%','0%','-15%','-60%','-60%'] : firstWidth768
    const firstWidth1920 = windowWidthSize >=1920?  ['0%','0%','-15%','-85%','-85%'] : ['0%','0%','-15%','-28%','-28%']
    const firstXOutputValue  =  windowWidthSize >= 1440 ?firstWidth1920 : firstWidth1024

    const secondWidth768= windowWidthSize >=640?  ['0%','0%','20%','160%','160%']:['0%','0%','0%','120%','120%']
    const secondWidth1024 = windowWidthSize >769 ? ['0%','0%','-15%','60%','60%'] : secondWidth768
    const secondWidth1920 = windowWidthSize >=1920? ['0%','0%','20%','25%','25%'] : ['0%','0%','20%','60%','60%']
    const  secondXOutputValue=windowWidthSize >=1440? secondWidth1920:  secondWidth1024
    
    const thirdWidth768= windowWidthSize >=640? ['0%','0%','0%','-135%','-135%']:['0%','0%','0%','-110%','-110%']
    const thirdWidth1024 = windowWidthSize >769?['0%','0%','-15%','-180%','-180%']:thirdWidth768
    const thirdWidth1920 =windowWidthSize >=1920?['0%','0%','-35%','-195%','-195%']:['0%','0%','-35%','-120%','-125%'] 
    const  thirdXOutputValue=windowWidthSize>=1440?  thirdWidth1920:thirdWidth1024
    
    const fourthWidth768= windowWidthSize >=640?['0%','0%','45%','280%','280%'] :['0%','0%','0%','200%','200%']
    const fourthWidth1024 = windowWidthSize >769?['0%','0%','-15%','180%','180%']:fourthWidth768 
    const fourthWidth1920 = windowWidthSize >=1920? ['0%','0%','45%','135%','135%']:['0%','0%','45%','148%','148%'] 
    const  fourthXOutputValue=windowWidthSize >=1440? fourthWidth1920: fourthWidth1024
    
    const lastWidth768= windowWidthSize >=640? ['0%','0%','-5%','-350%','-350%']:['0%','0%','0%','-300%','-300%']
    const lastWidth1024 = windowWidthSize >769 ?['0%','0%','-15%','-300%','-300%']:lastWidth768
    const lastWidth1920=windowWidthSize >=1920?['0%','0%','-35%','-305%','-305%']:['0%','0%','-35%','-210%','-210%']
    const  lastXOutputValue= windowWidthSize >=1440? lastWidth1920: lastWidth1024

    // Card Animation Y-axis output values
    const cardDefaultYOutputValue = ['0vh','0vh','0vh','20vh', '-5vh']

    const firstYOutputValue  = windowWidthSize >=1440 ? cardDefaultYOutputValue: ['0vh','0vh','0vh','25vh', '-200vh']
    const secondYOutputValue =  windowWidthSize >=1440 ? cardDefaultYOutputValue: ['0vh','0vh','0vh','25vh', '-200vh']
    const thirdYOutputValue = windowWidthSize >=1440 ? cardDefaultYOutputValue: ['0vh','0vh','0vh','25vh', '-200vh'] 
    const fourthYOutputValue = windowWidthSize >=1440 ? cardDefaultYOutputValue: ['0vh','0vh','0vh','25vh', '-200vh'] 
    const lastYOutputValue =windowWidthSize >= 1440 ? cardDefaultYOutputValue:  ['0vh','0vh','0vh','25vh', '-200vh']

    // Card Animation default values
    const defaultXInputValue = windowWidthSize >= 768? [0, 0.7, 0.8, 0.9, 1] : [0, 0.5, 0.6, 0.9, 1]
    const defaultYInputValue = windowWidthSize >= 768? [0, 0.7, 0.8, 0.9, 1] : [0, 0.5, 0.6, 0.9, 1]
    const defaultOutputValue = ['0%','0%','0%','0%','0%']

    // Card Animation X-axis
    const lastXValue = useTransform(props.scrollYProgress, defaultXInputValue, lastCardInView? 
    lastXOutputValue : defaultOutputValue ); //last card phase 1 X
    const fourthXValue = useTransform(props.scrollYProgress, defaultXInputValue, lastCardInView? fourthXOutputValue:defaultOutputValue ); //fourth card phase 1 X
    const thirdXValue = useTransform(props.scrollYProgress, defaultXInputValue, lastCardInView? thirdXOutputValue:defaultOutputValue ); //third card phase 1 X
     const secondXValue = useTransform(props.scrollYProgress, defaultXInputValue, lastCardInView? secondXOutputValue:defaultOutputValue ); //second card phase 1 X  
     const firstXValue = useTransform(props.scrollYProgress, defaultXInputValue, lastCardInView? firstXOutputValue:defaultOutputValue ); //first card phase 1 X

     // Card Animation Y-axis
     const firstYValue = useTransform(props.scrollYProgress, defaultYInputValue,lastCardInView? firstYOutputValue:defaultOutputValue ); //first card phase 1 Y 
    const secondYValue = useTransform(props.scrollYProgress, defaultYInputValue,lastCardInView?secondYOutputValue :defaultOutputValue );//second card phase 1 Y 
    const thirdYValue = useTransform(props.scrollYProgress, defaultYInputValue,lastCardInView?thirdYOutputValue:defaultOutputValue );//third card phase 1 Y 
    const fourthYValue = useTransform(props.scrollYProgress, defaultYInputValue,lastCardInView?fourthYOutputValue:defaultOutputValue );//fourth card phase 1 Y 
    const lastYValue = useTransform(props.scrollYProgress, defaultYInputValue,lastCardInView? lastYOutputValue:defaultOutputValue );//last card phase 1 Y 


    return (
        <>
            {products?.map((product, index) => {
                return (
                    <ScrollCardContent
                        layout
                        as={motion.div}
                        key={product.id}
                        index={index}
                        className={`${props?.className} w-[300px] mb-[30vh] sticky xl:w-[30vw] 2xl:w-[20vw] 2xl:max-w-[600px]`}
                        // ref={lastScrollCardContentRef}
                
                            // ref={index === products.length - 1 ? lastScrollCardContentRef :scrollCardRefs[index]}
                            ref={index === products.length - 1 ? lastScrollCardContentRef :null}
                            style={{ translateX: getAnimation(index)?.animateXValue,
                                translateY:getAnimation(index)?.animateYValue,
                                transition: 'transform 0.5s linear' ,
                                // visibility: windowWidthSize <640  && index===4? 'hidden' :'visible' , 
                                position: windowWidthSize <640 ? index===0 ? 'sticky' :'sticky' : 'sticky',
                            }}
                            // initial={getAnimation(index)?.initial}
                            // animate={getAnimation(index)?.animate}
                            // transition={getAnimation(index)?.transition}
                            >
                            <div>
                                <div className='relative'>
                                    <Image
                                        src={images?.svgCardWrapper}
                                        alt="cardWrapper"
                                    />
                                 
                                        <AnimatePresence initial={false}>
                                            <motion.div                   
                                                variants={!lastCardOutView && index===0 ?ImageFadeOutVariants: null}
                                                initial='initial'
                                                animate='animate'
                                                exit='exit'
                                                >
                                                <Image
                                                ref={index===4 ? lastImageCardRef: null}
                                                src="/banner.jpg"
                                                alt="product-card-preview"
                                                width={300}
                                                height={500}
                                                className="z-10 absolute object-cover min-h-[240px] left-[3%] bottom-[-7%] w-[80%] h-[80%] rounded-3xl xl:w-[60%] xl:left-[2%] 2xl:w-[270px] 2xl:left-[10px]"
                                                />
                                            </motion.div>
    
                                        </AnimatePresence>
                                    <div className='absolute top-[9%] left-[8%]'>
                                        <p className='flex flex-col text-xs px-1 xl:leading-[14px] xl:text-[11px]'>
                                        <span className="px-2">{"///"}</span>
                                        <span className="px-2">{product.color}</span>
                                        <span className="px-2">{product.description}</span>
                                        </p>
                                    </div>
                                    <div className='absolute top-[11%] left-[78%] text-upright xl:left-[63%] 2xl:left-[265px] 2xl:top-[55px]'>
                                        <p className='text-6xl font-extrabold'><span>/{product.subtitle}</span></p>
                                    </div>
                                </div>
                            </div>



                        </ScrollCardContent>
                );
            })}
        </>
    );
};

export default ScrollCard;
