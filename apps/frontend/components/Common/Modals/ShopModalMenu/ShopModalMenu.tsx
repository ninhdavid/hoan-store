import React, { useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { modalActions, selectSetModal } from '../MenuModalSlice';
import Link from 'next/link';
import { EventTargetHandler } from '@/types/common/types';
import useWindowSize from '@/lib/hooks/common/useWindowSize';
import { useAppDispatch, useAppSelector } from '@/store/reduxHooks';
import { ModalWrapperStyled } from '@/styles/ModalMenu';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const ProductNavigation = [
    { id: 1, name: 'Shoes', url: '/' },
    { id: 2, name: 'Figure', url: '/' },
    { id: 3, name: 'Custom', url: '/' },
    { id: 4, name: 'Bundles', url: '/' },
    { id: 5, name: 'Accessories', url: '/' },
];
const CustomersNavigation = [
    { id: 1, name: 'Discover', url: '/' },
    { id: 2, name: 'Co-Brand', url: '/' },
    { id: 3, name: 'Delivery', url: '/' },
    { id: 4, name: 'Returns', url: '/' },
    { id: 5, name: 'Help Center', url: '/' },
    { id: 6, name: 'Refer a Friend', url: '/' },
];

function ShopModalMenu({ ...props }: Props) {
    const [isModalClose, setIsModalClose] = useState(false);
    const isModal = useAppSelector(selectSetModal);
    const dispatch = useAppDispatch();
    const { width, height } = useWindowSize();
    const handleCloseModal = (e: EventTargetHandler) => {
        e.stopPropagation();
        setIsModalClose(true);
        setTimeout(
            () => {
                dispatch(modalActions.setModal(!isModal));
            },
            width >= 1024 ? 600 : 300
        );
    };

    return (
        <ModalWrapperStyled>
            <span
                onClick={handleCloseModal}
                className={`absolute flex items-center justify-center -top-[60px] right-[85%] w-10 h-10  text-xl text-gray-800  bg-white rounded-full z-40 border transition duration-200 hover:bg-gray-100 hover:cursor-pointer focus:bg-white sm:right-[90%]  md:right-[92%] lg:invisible ${
                    !isModalClose ? 'buttonPopup' : 'willHiddenButtonPopup'
                }`}
            >
                <HiXMark />
            </span>
            {isModal && (
                <div
                    className={`h-[95%] w-[100%] absolute bottom-0 lg:h-[100%] lg:w-[42%] xl:w-[33%] 2xl:w-[28%] overflow-y-scroll lg:overflow-visible ${
                        width < 1024 ? (!isModalClose ? 'modalPopup' : 'closeModalPopupTop') : ''
                    }`}
                >
                    <div className=" relative lg:h-full bg-white lg:bg-transparent ">
                        <div className="px-6 lg:px-0 lg:h-full ">
                            <div className="h-full pt-11 pb-6 lg:pt-0 lg:pb-0 ">
                                {width <= 1024 && (
                                    <div className="lg:hidden">
                                        <div className="bg-gradient-to-r from-cyan-300 to-rose-300 h-[100px] text-center flex items-center justify-center rounded-lg lg:rounded-none lg:border-b lg:border-l lg:border-slate-400  lg:min-h-[400px] lg:h-full">
                                            <p>Original Sneaker Shoes</p>
                                            <p>Need Image background</p>
                                        </div>
                                    </div>
                                )}
                                <div className="relative flex flex-row justify-end h-full w-full 2xl:max-w-[712px]  ">
                                    <div
                                        className={`z-10 bg-white flex-1 -translate-x-[100%] ${
                                            !isModalClose ? 'modalPopup' : 'closeModalPopup'
                                        }
                                        `}
                                    >
                                        <div className=" bg-white lg:pt-[140px] lg:px-16 lg:ml-1">
                                            <span
                                                onClick={handleCloseModal}
                                                className="invisible absolute items-center justify-center top-[60px] right-[75%] w-10 h-10 text-xl text-gray-800 bg-white rounded-full z-40 border drop-shadow-lg transition-all duration-200 hover:cursor-pointer hover:-translate-y-1 hover:shadow-lg focus:bg-white lg:visible lg:flex xl:right-[73%] 2xl:right-[84%]"
                                            >
                                                <HiXMark />
                                            </span>
                                            <ul>
                                                {ProductNavigation.map((item) => {
                                                    return (
                                                        <li
                                                            key={item.id}
                                                            className="px-[30px] py-[15px] mt-[10px] bg-gray-100/40 rounded-lg transition duration-200  hover:cursor-pointer hover:bg-gray-100"
                                                        >
                                                            <Link
                                                                href={item?.url}
                                                                className="h-[70px] flex items-center justify-between "
                                                            >
                                                                <p className="flex-1 inline-block text-lg font-semibold">
                                                                    {item.name}
                                                                </p>
                                                                <p className="min-w-[100px]">
                                                                    NEED IMAGE
                                                                </p>
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                            <ul className="lg:hidden">
                                                {CustomersNavigation.map((item) => {
                                                    return (
                                                        <li
                                                            key={item.id}
                                                            className="text-lg font-medium py-[15px] mt-[25px] hover:cursor-pointer"
                                                        >
                                                            <Link href={item?.url}>
                                                                <p>{item.name}</p>
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                        <section className="absolute bottom-0 right-0 left-0">
                                            <div className="flex justify-center items-center mt-1 mb-4 lg:bottom-8">
                                                <a
                                                    href="#"
                                                    title="facebook/hoanShop"
                                                    className="mr-[20px] p-[6px] text-[30px] transition duration-200 hover:drop-shadow-lg hover:-translate-y-1"
                                                >
                                                    <FaFacebook />
                                                </a>
                                                <a
                                                    href="#"
                                                    title="instagram/hoanShop"
                                                    className=" p-[6px] text-[30px] transition duration-200 hover:drop-shadow-lg hover:-translate-y-1"
                                                >
                                                    <FaInstagram />
                                                </a>
                                            </div>
                                        </section>
                                    </div>
                                    {width >= 1024 && (
                                        <div
                                            className={`z-0 w-[360px] -translate-x-[540px] absolute overflow-y-scroll h-full bg-white opacity-0 ${
                                                !isModalClose
                                                    ? 'subModalPopup '
                                                    : 'closeSubModalPopup'
                                            }`}
                                        >
                                            <div className="h-full">
                                                <div className=" absolute h-full grid lg:grid-row">
                                                    <div className="hidden bg-gradient-to-r from-cyan-300 to-rose-300 h-[100px] text-center  items-center justify-center rounded-lg lg:rounded-none lg:border-b lg:border-l lg:border-slate-400 lg:flex lg:min-h-[400px] lg:h-full">
                                                        <p>Original Sneaker Shoes</p>
                                                        <p>Need Image background</p>
                                                    </div>
                                                    <div className="hidden bg-gradient-to-r from-cyan-300 to-rose-300 h-[100px] text-center  items-center justify-center rounded-lg lg:rounded-none lg:border-b lg:border-l lg:border-slate-400 lg:flex lg:min-h-[400px] lg:h-full">
                                                        <p>Original Sneaker Shoes</p>
                                                        <p>Need Image background</p>
                                                    </div>
                                                    <div className="hidden bg-gradient-to-r from-cyan-300 to-rose-300 h-[100px] text-center  items-center justify-center rounded-lg lg:rounded-none lg:border-b lg:border-l lg:border-slate-400 lg:flex  lg:visible lg:min-h-[400px] lg:h-full">
                                                        <p>Original Sneaker Shoes</p>
                                                        <p>Need Image background</p>
                                                    </div>
                                                    <div className="hidden bg-gradient-to-r from-cyan-300 to-rose-300 h-[100px] text-center  items-center justify-center rounded-lg lg:rounded-none lg:border-b lg:border-l lg:border-slate-400 lg:flex  lg:visible lg:min-h-[400px] lg:h-full">
                                                        <p>Original Sneaker Shoes</p>
                                                        <p>Need Image background</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {width >= 1024 && (
                <div
                    onClick={handleCloseModal}
                    className="group absolute invisible h-full w-[23%] right-0 top-0 lg:visible xl:w-[37%] 2xl:w-[55%]"
                >
                    <div className="h-full flex items-center justify-center">
                        <span className="text-[20px] bg-black/70 text-gray-300 transition-all duration-200 group-hover:underline hover:text-gray-100 hover:cursor-pointer xl:text-[24px] 2xl:text-[32px] ">
                            Continue Shopping
                        </span>
                    </div>
                </div>
            )}
            {width < 1024 && (
                <div
                    onClick={handleCloseModal}
                    className="group absolute h-[5%] w-full right-0 top-0 lg:hidden"
                >
                    <div className="h-full flex items-center justify-center">
                        <span className="text-[20px] bg-black/70 text-gray-300 transition-all duration-200 group-hover:underline hover:text-gray-100 hover:cursor-pointer xl:text-[24px] 2xl:text-[32px] "></span>
                    </div>
                </div>
            )}
        </ModalWrapperStyled>
    );
}

export default ShopModalMenu;
