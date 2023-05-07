import React, { useState, useRef, useEffect ,useContext} from 'react';
import { BsDot } from 'react-icons/bs';
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
import useWindowSize from '@/lib/hooks/common/useWindowSize';
import Link from 'next/link';
import { useAppSelector } from '@/redux/store/reduxHooks';
import { selectSetWindowSize } from '@/redux/ActionsReducer/MenuModal/Common/windowSize/windowSizeSlice';
import { ImageSlide } from '@/styles/LandingPage/Header/Cart/Empty/ImageSlide';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};


// const images = ['/banner.jpg', '/banner.jpg', '/banner.jpg', '/banner.jpg', '/banner.jpg'];
const images = [
    { id: 1, src: '/banner.jpg' },
    { id: 2, src: '/banner.jpg' },
    { id: 3, src: '/banner.jpg' },
    { id: 4, src: '/banner.jpg' },
    { id: 5, src: '/banner.jpg' },
];

function SlideImage(props: Props) {
    const [[page, direction], setPage] = useState([0, 0]);
    const [windowChange, setWindowChange] = useState(0);
    const windowSize = useWindowSize();
    // const {width,} = useContext(WindowSizeContext)
    // const windowSize = useAppSelector(selectSetWindowSize)


    const constraintsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setWindowChange(windowSize.width);
    }, [windowSize.width]);

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
    };
    const paginate = (newDirection: number) => {
        if (0 <= page && page <= 4) {
            setPage([page + newDirection, newDirection]);
        }
    };
    return (
        <>
            {windowChange && (
                <>
                    <ImageSlide className="flex h-full w-full pt-5">
                        <AnimatePresence key={windowSize.width} custom={{ direction, page }} initial={false}>
                            <motion.div className="h-[100px] w-[100px]" ref={constraintsRef}>
                                {images.map((image) => (
                                    <motion.div
                                        style={{}}
                                        className="img-slide"
                                        key={image.id}
                                        initial="enter"
                                        animate={{
                                            scale: image.id === page + 1 ? 1 : 0.9,
                                            zIndex: image.id === page + 1 ? 1 : 0,
                                            opacity: image.id === page + 1 ? 1 : 0.5,
                                            x:
                                                direction > 0
                                                    ? `${(page - image.id) * -100 + 66}%`
                                                    : `${(page - image.id) * -100 + 66}%`,
                                        }}
                                        custom={{ direction, page: image.id }}
                                        transition={{
                                            x: { type: 'spring', stiffness: 300, damping: 25 },
                                            // opacity: { duration: 0.2 },
                                        }}
                                        drag="x"
                                        dragConstraints={constraintsRef}
                                        dragElastic={1}
                                        dragMomentum={false}
                                        dragDirectionLock={true}
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
                                        <div className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center text-center">
                                            <p className="z-10 text-black uppercase">
                                                Studio Collection
                                            </p>
                                            <Link
                                                href="/"
                                                className="z-10 flex items-center justify-center text-sm uppercase rounded-3xl bg-white w-[106px] h-9 mt-2"
                                            >
                                                Shop Now
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                                {windowSize.width < 1024 && (
                                    <>
                                        <div className="z-50  absolute flex flex-row justify-around left-[75%] top-[-3%] text-gray-300 text-3xl">
                                            <BsDot
                                                className={`-ml-4 ${
                                                    page === 0 ? 'text-gray-950' : ''
                                                }`}
                                            />
                                            <BsDot
                                                className={`-ml-4 ${
                                                    page === 1 ? 'text-gray-950' : ''
                                                }`}
                                            />
                                            <BsDot
                                                className={`-ml-4 ${
                                                    page === 2 ? 'text-gray-950' : ''
                                                }`}
                                            />
                                            <BsDot
                                                className={`-ml-4 ${
                                                    page === 3 ? 'text-gray-950' : ''
                                                }`}
                                            />
                                            <BsDot
                                                className={`-ml-4 ${
                                                    page === 4 ? 'text-gray-950' : ''
                                                }`}
                                            />
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {windowSize.width >= 1024 && (
                            <>
                                <div
                                    className={`next ${page === 4 ? 'opacity-30' : ''}`}
                                    onClick={() => {
                                        if (page < images.length - 1 && page >= 0) {
                                            paginate(1);
                                        }
                                    }}
                                >
                                    {'‣'}
                                </div>
                                <div
                                    className={`prev ${page === 0 ? 'opacity-30' : ''}`}
                                    onClick={() => {
                                        if (page <= images.length && page >= 1) {
                                            paginate(-1);
                                        }
                                    }}
                                >
                                    {'‣'}
                                </div>
                            </>
                        )}
                    </ImageSlide>
                </>
            )}
        </>
    );
}

export default SlideImage;
