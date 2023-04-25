import images from '@/public/assets/images';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {motion, useScroll, useTransform ,ScrollProps } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    className?: string;
    scrollYProgress?:ScrollProps['scrollYProgress'] ;
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
    props.index === 1 ? `${props.index * 5}vw`:`${props.index / 2}vw`};

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
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 2.4 + 15}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 6 ) * 110}px`:`${(props.index + 5.75) * 90}px`: 
            props.index === 1 ? `${props.index * 610}px`:`${props.index * 190}px`};   
            left:${(props) => props.index ===variables.idxLength ? '740px': ''};
    }
    @media screen and (min-width:1440px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 2.7 + 17}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 7 ) * 110}px`:`${(props.index + 6.2) * 100}px`: 
            props.index === 1 ? `${props.index * 740}px`:`${props.index * 235}px`};   
            left:${(props) => props.index ===variables.idxLength ? '860px': ''};
    }
    @media screen and (min-width:1536px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 2.7 + 17}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 8 ) * 105}px`:`${(props.index + 6.8) * 100}px`: 
            props.index === 1 ? `${props.index * 800}px`:`${props.index * 255}px`};   
            left:${(props) => props.index ===variables.idxLength ? '920px': ''};
    }
    @media screen and (min-width:1910px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3.3 + 10}vh` : '28vh'};
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

const CardVariants = {
    initial:{},
    animate:{},
    exit:{},
}

const ScrollCard = (props: Props) => {
    const [lastCardInView,setLastCardInView] = useState(false)

    const lastScrollCardContentRef = useRef(null);
    // const scrollCardRefs =useRef(null)
    const scrollCardRefs = Array.from({ length: 5 }, (_, index) =>
        index === 0 ? lastScrollCardContentRef : lastScrollCardContentRef.current?.previousSibling
    );

    // const firstScrollCardContent = scrollCardRefs[0]?.current;
    // const secondScrollCardContent = scrollCardRefs[1]?.current;
    // const thirdScrollCardContent = scrollCardRefs[2]?.current;
    // const fourthScrollCardContent = scrollCardRefs[3]?.current;

    // const getAnimation = (index) => {
    //     switch (index) {
    //       case 0:
    //         return { initial: { opacity: 0 }, animate: { opacity:1, transform: {translate3d: '50%, 50%, 0' }}, transition: { duration: 3 } };
    //       case 1:
    //         return { initial: { opacity:0 }, animate: { opacity:1, translate3d: '50%, 50%, 0' }, transition: { duration: 3 } };
    //       default:
    //         return {};
    //     }
    //   };
    useEffect(() => {
    const lastScrollCardContent = lastScrollCardContentRef.current;
  
    const handleScroll = () => {
        const { offsetTop } = lastScrollCardContent;

            const scrollPosition = window.pageYOffset||window.scrollY;
            const isLastScrollCardContentInView =
              offsetTop >= document.body.scrollHeight - scrollPosition;
            if (isLastScrollCardContentInView) {
            setLastCardInView(true)
            // console.log('in viewport',document.body.scrollHeight - scrollPosition);
            
        }else{
            setLastCardInView(false)

        }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


    // const { scrollYProgress } = useScroll({
    // target:props.scrollContainerRef,
    // offset: ["start end", "end end"]
    // })
    // const clampedScrollProgress = clamp(scrollYProgress, 0, 0.5);
    const orbXValue = useTransform(props.scrollYProgress, [0, 0.5,1],lastCardInView?['0%','75%','-150%'] :['0%','0%','0%'] );
    const orbYValue = useTransform(props.scrollYProgress, [0, 0.5,1],lastCardInView?['0%','25%','50%'] :['0%','0%','0%'] ) ;
    return (
        <>
            {products?.map((product, index) => {
                return (
                    <ScrollCardContent
                        as={motion.div}
                        key={product.id}
                        index={index}
                        className={`${props?.className} w-[300px] mb-[50vh] -mx-6 sticky xl:w-[30vw] 2xl:w-[20vw] 2xl:max-w-[600px]`}
                        ref={lastScrollCardContentRef}
                        style={{translateX:orbXValue,
                            translateY:orbYValue,
                            transition: 'transform 1s linear'
                        }}

                            // ref={scrollCardRefs[index]}
                            // style={{ translateX: orbValue }}
                            // initial={getAnimation(index)?.initial}
                            // animate={getAnimation(index)?.animate}
                            // transition={getAnimation(index)?.transition}
                            >
                            <div>
                                <div className='relative'>
                                    <Image
                                        src={images?.svgCardWrapper}
                                        alt="cardWrapper"
                                        className=""
                                    />
                                    <Image
                                    src="/banner.jpg"
                                    alt="product-card-preview"
                                    width={300}
                                    height={500}
                                    className="z-10 absolute left-[3%] bottom-[-7%] w-[80%] h-[80%] rounded-3xl xl:w-[60%] xl:left-[2%] 2xl:w-[270px] 2xl:left-[10px]"
                                    />
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
