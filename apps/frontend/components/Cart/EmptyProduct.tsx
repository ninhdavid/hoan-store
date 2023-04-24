import React, { useState ,useContext} from 'react';
import { HiXMark } from 'react-icons/hi2';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { wrap } from 'popmotion';
import SlideImage from './SlideImage';
import useWindowSize from '@/lib/hooks/common/useWindowSize';
import { EventTargetHandler } from '@/types/common/types';
import Image from 'next/image';
import { WindowSizeContext } from '@/Context/WindowSizeProvider';
import { useAppSelector } from '@/redux/store/reduxHooks';
import { selectSetWindowSize } from '@/redux/ActionsReducer/MenuModal/Common/windowSize/windowSizeSlice';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    handleOpenShop: () => void;
};
const variants: Variants = {
    enter: {
        x: '100vw',
        opacity: 1,
    },
    animate: {
        x: '0%',
        opacity: 1,
    },
    exit: (durationRuntime) => ({
        x: '100vw',
        opacity: durationRuntime > 300 ? 0 : 1,
        transition: {
            duration: durationRuntime,
            delay: durationRuntime > 300 ? 0.2 : 0,
            ease: 'easeOut',
        },
    }),
};
const product = [
    {
        id: 1,
        name: 'Jordan 1 High OG Bred',
        color: 'red',
        price: 20000000,
        size: 28,
        quantity: 12,
        src: '/banner.jpg',
    },
    {
        id: 2,
        name: 'Jordan 1',
        color: 'blue',
        price: 20000,
        size: 28,
        quantity: 1,
        src: '/banner.jpg',
    },
    {
        id: 3,
        name: 'Jordan 1',
        color: 'yellow',
        price: 20000,
        size: 28,
        quantity: 1,
        src: '/banner.jpg',
    },
    {
        id: 4,
        name: 'Jordan 1',
        color: 'white',
        price: 20000,
        size: 28,
        quantity: 1,
        src: '/banner.jpg',
    },
    {
        id: 5,
        name: 'Jordan 1',
        color: 'green',
        price: 20000,
        size: 28,
        quantity: 1,
        src: '/banner.jpg',
    },
];
const EmptyProduct = (props: Props) => {
    const [unMounted, setUnMounted] = useState(true);
    const windowSize = useWindowSize();
// const {width,} =useContext(WindowSizeContext)
// const windowSize =useAppSelector(selectSetWindowSize)
    const durationRuntime = windowSize.width >= 1024 ? 600 : 300;
    
    const handleOpenShop = (e: EventTargetHandler) => {
        e.stopPropagation();
        setUnMounted(false);
        setTimeout(() => {
            props.handleOpenShop();
        }, durationRuntime);
    };
    return (
        <>
            <AnimatePresence onExitComplete={() => null}>
                {unMounted && (
                    <motion.div
                        key={unMounted ? 'myComponent' : 'myComponentHidden'}
                        className="flex justify-end h-[100%] z-10"
                        variants={variants}
                        custom={durationRuntime / 1000}
                        initial="enter"
                        animate="animate"
                        exit="exit"
                        transition={{
                            x: {
                                type: 'spring',
                                stiffness: 300,
                                damping: 29,
                            },
                        }}
                    >
                        <div className="bg-white h-full w-[88%] lg:w-[68%] xl:w-[55%] 2xl:w-[40%] z-10 ">
                            <div className="px-[30px] pt-[30px] pb-[20px] h-full 2xl:px-20 2xl:pt-14 2xl:pb-6">
                                <div className="relative flex justify-between items-center flex-row-reverse">
                                    <span
                                        onClick={handleOpenShop}
                                        className={`flex items-center justify-center w-10 h-10 -translate-y-2 text-xl text-gray-800  bg-white rounded-full z-40 border transition duration-200 hover:bg-gray-100 hover:cursor-pointer hover:-translate-y-1 focus:bg-white  `}
                                    >
                                        <HiXMark />
                                    </span>
                                    <p className="text-sm ">0 Items</p>
                                </div>
                                <div className="py-10 h-full">
                                    <div className="h-full text-white flex justify-between flex-col">
                                        <div className="pr-[30px] mr-[-30px] bg-white flex flex-col justify-center items-center text-black h-[60%] overflow-y-auto overflow-x-hidden">
                                            <div className="container h-full ">
                                                {product.map((item) => {
                                                    return (
                                                        <div
                                                            key={item.id}
                                                            className="pt-2 mb-4 border-b"
                                                        >
                                                            <div className="flex">
                                                                <div className="w-[100px] ">
                                                                    <Image
                                                                        src="/banner.jpg"
                                                                        alt="product"
                                                                        width={200}
                                                                        height={100}
                                                                        className="object-cover mr-[30px] pr-[30px]"
                                                                    ></Image>
                                                                </div>
                                                                <div className="flex-1 -ml-5 -mt-3">
                                                                    <div className="flex flex-col justify-between">
                                                                        <div className="font-medium leading-6">
                                                                            <div className="text-sm font-medium uppercase">
                                                                                <p className="pr-2">
                                                                                    {item.name}
                                                                                </p>
                                                                            </div>
                                                                            <div>
                                                                                <p>
                                                                                    <span className="text-xs font-normal">
                                                                                        Color:
                                                                                    </span>{' '}
                                                                                    <span className="uppercase text-xs">
                                                                                        {item.color}
                                                                                    </span>
                                                                                </p>
                                                                            </div>
                                                                            <div className="pt-1 pb-2 text-xs font-normal">
                                                                                <p>
                                                                                    <span className="pr-2">
                                                                                        Size:
                                                                                    </span>{' '}
                                                                                    {item.size}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-row items-center mb-5">
                                                                            <button className="group/increase p-3 mr-2 -ml-3 hover:cursor-pointer ">
                                                                                <span className="transition duration-200 rounded-full bg-gray-100 p-2 group-hover/increase:bg-gray-200">
                                                                                    -
                                                                                </span>
                                                                            </button>
                                                                            <div>
                                                                                {item.quantity}
                                                                            </div>
                                                                            <button className="group/decrease p-3 mx-2  hover:cursor-pointer ">
                                                                                <span className="transition duration-200  rounded-full bg-gray-100 p-2 group-hover/decrease:bg-gray-200">
                                                                                    +
                                                                                </span>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col justify-between mb-5 -mt-3 text-right">
                                                                    <div className="font-semibold text-sm">
                                                                        &#8363;{item.price}
                                                                    </div>
                                                                    <button className="py-5 pl-5 -mb-1 text-xs font-light text-gray-500 hover:cursor-pointer hover:underline hover:text-black">
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            {/* empty start */}

                                            {/* <div className="flex justify-center items-center">
                                                <p className="text-center text-lg font-semibold">
                                                    <span>
                                                        There&#39;s nothing in your Cart (yet). Have
                                                        you seen these Collections?
                                                    </span>
                                                </p>
                                            </div> */}

                                            {/* empty end */}
                                        </div>
                                        <div
                                            className={`z-10 relative -mx-[30px] flex flex-col justify-center items-center pb-[10px] rounded-lg text-black h-[40%]`}
                                        >
                                            <div className="relative w-full h-full flex justify-center items-center overflow-x-hidden">
                                                {/* slide start */}

                                                {/* <SlideImage /> */}

                                                {/* slide end */}

                                                {/* sum cart start */}

                                                <div className="flex flex-col px-[30px] md:px-0">
                                                    <div className=" text-xs py-2 bg-slate-100 rounded-xl -mx-3 xl:text-sm">
                                                        <div className="flex flex-row items-center h-[80px] rounded-2xl px-[10px] md:px-[20px] xl:px-[60px] 2xl:px-[40px] ">
                                                            <div className="pr-5 leading-4 -mt-3 xl:pr-14">
                                                                <p className="text-base font-medium leading-7">
                                                                    Add a Gift Note
                                                                </p>
                                                                <p className="font-light">
                                                                    Add a personal touch to your
                                                                    order with a Gift Note
                                                                </p>
                                                            </div>

                                                            <div className="flex flex-row items-center text-center h-10 px-3 -mx-3 rounded-3xl bg-white hover:cursor-pointer transition duration-200 hover:bg-gray-200 ">
                                                                <p className="font-semibold ">
                                                                    ADD
                                                                </p>
                                                                <p className="font-light pl-1  ">
                                                                    &#8363;30.000
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col pt-10 relative md:pt-20 lg:pt-[60px] xl:pt-[20px]">
                                                        <div className="before:content=[''] before:border-t before:h-[1px] before:absolute before:top-3 before:w-full before:translate-y-[1/2] md:before:top-8 lg:before:top-6 xl:before:top-4">
                                                            <div className="flex flex-row items-center justify-between pb-5 lg:p-6 xl:p-8">
                                                                <p className="font-semibold text-xl">
                                                                    &#8363;SUM.SUM
                                                                </p>
                                                                <button className="uppercase text-sm flex items-center justify-center rounded-3xl bg-gray-300 w-[140px] h-12 hover:bg-gray-400 transition duration-200 hover:cursor-pointer">
                                                                    CHECKOUT
                                                                </button>
                                                            </div>
                                                            <div className="text-center leading-5 text-xs font-light">
                                                                <p>
                                                                    Your Express Delivery is Free!
                                                                </p>
                                                                <p>
                                                                    Delivered DPD:1 to 3days from
                                                                    despatch
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* sum cart end */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {windowSize.width >= 1024 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className=" group/item absolute invisible h-full w-[31%] left-0 top-0 lg:visible xl:w-[44%] 2xl:w-[59%] hover:cursor-pointer"
                >
                    <div
                        onClick={handleOpenShop}
                        className="h-full  flex items-center justify-center"
                    >
                        <span className="hidden text-[20px] text-gray-300 transition-all duration-200 hover:underline group-hover/item:text-gray-100 lg:block xl:text-[24px] 2xl:text-[32px] ">
                            Continue Shopping
                        </span>
                    </div>
                </motion.div>
            )}
            {windowSize.width < 1024 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleOpenShop}
                    className="group absolute h-full w-[12%] left-0 top-0 lg:hidden"
                >
                    <div className="h-full flex items-center justify-center">
                        <span className="text-[20px] bg-black/70 text-gray-300 transition-all duration-200 group-hover:underline hover:text-gray-100 hover:cursor-pointer xl:text-[24px] 2xl:text-[32px] "></span>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default EmptyProduct;
