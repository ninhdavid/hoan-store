import React, { useState, useRef, useEffect } from 'react';
import { HiXMark } from 'react-icons/hi2';
import {
    motion,
    AnimatePresence,
    Variants,
    TargetAndTransition,
    useMotionValue,
} from 'framer-motion';
import { wrap } from 'popmotion';
import styled from 'styled-components';
import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const ImageSlide = styled.div`
    .img-slide {
        position: absolute;
        min-width: 500px;
        width: 70%;
        height: 100%;
        border-radius: 8px;
        overflow: hidden;
        left: -125%;
        cursor: -webkit-grab;
        cursor: grab;
    }
    .next,
    .prev {
        top: calc(50% - 20px);
        position: absolute;
        background: white;
        border-radius: 30px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;
        font-weight: bold;
        font-size: 18px;
        z-index: 2;
    }
    .next {
        right: 0px;
    }

    .prev {
        left: 0px;
        transform: scale(-1);
    }
`;

// const images = ['/banner.jpg', '/banner.jpg', '/banner.jpg', '/banner.jpg', '/banner.jpg'];
const images = [
    { id: 1, src: '/banner.jpg' },
    { id: 2, src: '/banner.jpg' },
    { id: 3, src: '/banner.jpg' },
    { id: 4, src: '/banner.jpg' },
    { id: 5, src: '/banner.jpg' },
];

const variants: Variants = {
    enter: ({ direction, page }) => {
        return {
            opacity: 1,
            zIndex: 1,
        };
    },
    center: ({ direction, page }) => {
        return {
            opacity: 1,
            zIndex: 1,
            x:
                direction > 0
                    ? `${(page - direction) * -100 + 100}%`
                    : `${(page - direction) * -100 + 100}%`,
        };
    },
    exit: ({ direction, page }) => {
        return {
            x: `${(page - direction) * 60 - 30}%`,
            opacity: 1,
            zIndex: 1,
        };
    },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};
enum Direction {
    Back,
    Forward,
}
function SlideImage(props: Props) {
    const [[page, direction], setPage] = useState([0, 0]);
    const [position, setPosition] = useState<number>(0);

    const constraintsRef = useRef(null);
    const motionX = useMotionValue(0);
    const x = useMotionValue(0);

    const imageIndex = wrap(0, images.length, page);
    const handleDragEnd = (event, info) => {
        const dragEndValue = info.offset.x;
        if (dragEndValue === 0) {
            if (page < images.length - 1) {
                paginate(1);
            } else {
                paginate(-1);
            }
        }
        if (dragEndValue < 0) {
            if (page < images.length - 1 && page >= 0) {
                paginate(1);
            } else {
                paginate(-1);
            }
        } else if (dragEndValue > 0) {
            if (page > 0 && page <= images.length - 1) {
                paginate(-1);
            } else {
                paginate(1);
            }
        }

        console.log(dragEndValue);
    };
    const paginate = (newDirection: number) => {
        if (0 <= page && page <= 4) {
            setPage([page + newDirection, newDirection]);
        }
    };

    console.log(page, direction, images.length);
    return (
        <ImageSlide className="flex h-full w-full ">
            <AnimatePresence custom={{ direction, page }} initial={false}>
                <motion.div className="h-[100px] w-[100px]" ref={constraintsRef}>
                    {images.map((image) => (
                        <motion.div
                            style={{}}
                            className="img-slide"
                            key={image.id}
                            // variants={variants}
                            initial="enter"
                            // animate="center"
                            animate={{
                                scale: image.id === page + 1 ? 1 : 0.9,
                                zIndex: image.id === page + 1 ? 1 : 0,
                                opacity: image.id === page + 1 ? 1 : 0.5,
                                x:
                                    direction > 0
                                        ? `${(page - image.id) * -100 + 100}%`
                                        : `${(page - image.id) * -100 + 100}%`,
                            }}
                            custom={{ direction, page: image.id }}
                            transition={{
                                x: { type: 'spring', stiffness: 300, damping: 30 },
                                // opacity: { duration: 0.2 },
                            }}
                            drag="x"
                            // dragConstraints={{ left: 0, right: 0 }}
                            dragConstraints={constraintsRef}
                            dragElastic={1}
                            dragMomentum={false}
                            dragDirectionLock={true}
                            // onDragEnd={(e, { offset, velocity }) => {
                            //     const swipe = swipePower(offset.x, velocity.x);

                            //     if (swipe < -swipeConfidenceThreshold) {
                            //         if (page < images.length - 1 && page >= 0) {
                            //             paginate(1);
                            //         } else {
                            //             paginate(-1);
                            //         }
                            //     } else if (swipe > swipeConfidenceThreshold) {
                            //         if (page > 0 && page <= images.length - 1) {
                            //             paginate(-1);
                            //         } else {
                            //             paginate(1);
                            //         }
                            //     }
                            // }}
                            onDragEnd={handleDragEnd}
                            whileTap={{ cursor: 'grabbing' }}
                            whileDrag={{ cursor: 'grabbing' }}
                        >
                            <Image
                                src={image.src}
                                alt={image.src}
                                width="580"
                                height="480"
                                className="w-full h-full "
                                onDragStart={(event) => event.preventDefault()}
                            ></Image>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            <div
                className="next"
                onClick={() => {
                    if (page < images.length - 1 && page >= 0) {
                        paginate(1);
                    }
                }}
            >
                {'‣'}
            </div>
            <div
                className="prev"
                onClick={() => {
                    if (page <= images.length && page >= 1) {
                        paginate(-1);
                    }
                }}
            >
                {'‣'}
            </div>
        </ImageSlide>
    );
}

export default SlideImage;
