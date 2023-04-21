import React, { useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { wrap } from 'popmotion';
import SlideImage from './SlideImage';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    handleOpenShop: () => void;
};

const EmptyProduct = (props: Props) => {
    return (
        <div className="flex justify-end h-[100%]">
            <div className="bg-white h-full w-[88%] 2xl:w-[40%]">
                <div className="px-[30px] pt-[30px] pb-[20px] h-full 2xl:px-20 2xl:pt-14 2xl:pb-6">
                    <div className="relative flex justify-between items-center flex-row-reverse">
                        <span
                            onClick={props.handleOpenShop}
                            className={`flex items-center w-10 h-10  text-xl text-gray-800  bg-white rounded-full z-40 border transition duration-200 hover:bg-gray-100 hover:cursor-pointer focus:bg-white   `}
                        >
                            <HiXMark />
                        </span>
                        <p>0 Items</p>
                    </div>
                    <div className="py-10 h-full">
                        <div className="bg-black h-full text-white flex justify-between flex-col">
                            <div className="bg-white text-black h-[60%] overflow-y-auto">
                                item here
                                <div className="h-20">item 1</div>
                                <div className="h-20">item 1</div>
                                <div className="h-20">item 1</div>
                                <div className="h-20">item 1</div>
                                <div className="h-20">item 1</div>
                                <div className="h-20">item 1</div>
                                <div className="h-20">item 1</div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center pb-[10px] rounded-lg bg-black text-black h-[40%] border border-black">
                                {/* <p className="z-10 text-white uppercase">Studio Collection</p>
                                <button className="z-10 text-sm uppercase rounded-3xl bg-white w-[106px] h-9">
                                    Shop Now
                                </button>
                            <div className="z-0 absolute top-0">need image background</div> */}
                                <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
                                    <SlideImage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyProduct;
