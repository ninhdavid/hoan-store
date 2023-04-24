import images from '@/public/assets/images';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    className?: string;
};
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
const ScrollCardContent2 = styled.div<{ index: number }>`
    .scroll-card-sc {
        // top: ${(props) => props.index !== variables.idxLength ? `${props.index * 30}px` : '160px'};
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 2 + 10}vh` : '18vh'};
        top: ${(props) => props.index % 2 !== 0 ? `${props.index *3}vh` :''};
        left: ${(props) => props.index === 0 ? '2vw' : ''}; 
        ${(props) => props.index % 2 !== 0 ? `transform: translateX(-${props.index * 2.5}vw)`: `transform: translateX(${props.index *3.3}vw)`};
    
        // ${(props) => props.index % 2 !== 0 ? `right: ${props.index }vw;` : `left: ${props.index * 2}vw;`};

        // ${(props) =>props.index % 2 !== 0? `margin-right: ${(props.index) +10}vw;`: `margin-left: ${(props.index) +10}vw;`};
    }

    
`;
const ScrollCardContent = styled.div<{ index: number }>` 
top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3.5 + 10}vh` : '30vh'};
left: ${(props) => props.index % 2 === 0 ? 
    props.index === 0 ? `${(props.index +3) * 3}vw`:`${(props.index +2.5) * 3}vw`: 
    props.index === 1 ? `${props.index * 5}vw`:`${props.index / 2}vw`};

    .text-upright{
        writing-mode: vertical-rl;
        text-orientation: mixed;    
    }
`

const ScrollCard = (props: Props) => {
    // h-[460px] 
    return (
        <>
            {products?.map((product, index) => {
                return (
                    <ScrollCardContent
                        key={product.id}
                        index={index}
                        className={`${props?.className} w-[300px] mb-[50vh] -mx-6 sticky top-[10vh] xl:w-[30vw] `}
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
                                    className="z-10 absolute left-[3%] bottom-[-7%] w-[80%] h-[80%] rounded-3xl"
                                    />
                                    <div className='absolute top-[9%] left-[8%]'>
                                        <p className='flex flex-col text-xs px-1 xl:leading-[14px] xl:text-[11px]'>
                                        <span className="px-2">{"///"}</span>
                                        <span className="px-2">{product.color}</span>
                                        <span className="px-2">{product.description}</span>
                                        </p>
                                    </div>
                                    <div className='absolute top-[11%] left-[78%] text-upright'>
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
