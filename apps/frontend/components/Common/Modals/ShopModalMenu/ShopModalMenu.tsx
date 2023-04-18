import React from 'react';
import { HiXMark } from 'react-icons/hi2';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { modalActions, selectSetModal } from '../MenuModalSlice';
import { useAppDispatch, useAppSelector } from 'apps/frontend/store/reduxHooks';
import { EventTargetHandler } from 'apps/frontend/types/common/types';
import useWindowSize from 'apps/frontend/lib/hooks/common/useWindowSize';
import Link from 'next/link';
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
    const isModal = useAppSelector(selectSetModal);
    const dispatch = useAppDispatch();
    const windowSize = useWindowSize();
    const handleCloseModal = (e: EventTargetHandler) => {
        e.stopPropagation();
        dispatch(modalActions.setModal(!isModal));
    };
    return (
        // <div className="h-full w-[60%] flex justify-between ">
        //     <div className="bg-white ">
        //         <div className="h-full ">ShopModalMenu</div>
        //         <div className=""></div>
        //     </div>
        // </div>
        <>
            <span
                onClick={handleCloseModal}
                className="absolute flex items-center justify-center top-5 right-[85%] w-10 h-10  text-xl text-gray-800  bg-white rounded-full z-40 border sm:right-[90%] sm:top-8 md:top-8 md:right-[92%] lg:hidden"
            >
                <HiXMark />
            </span>
            <div className="h-[95%] w-[100%] absolute bottom-0 overflow-y-auto lg:h-[100%] lg:w-[77%] xl:w-[63%] 2xl:w-[45%] 2xl:max-w-[1080] 2xl:left-0">
                <div className="bg-white relative lg:h-full">
                    <div className="px-6 lg:px-0 lg:h-full">
                        <div className="h-full pt-11 pb-6 lg:pt-0 lg:pb-0 lg:flex lg:flex-row-reverse">
                            <div className="lg:grid lg:grid-row lg:overflow-y-auto">
                                <div className="bg-gradient-to-r from-cyan-300 to-rose-300 h-[100px] text-center flex items-center justify-center rounded-lg lg:rounded-none lg:border-b lg:border-l lg:border-slate-400  lg:min-h-[400px] lg:h-full">
                                    <p>Original Sneaker Shoes</p>
                                    <p>Need Image background</p>
                                </div>
                                {windowSize.width >= 1024 && (
                                    <>
                                        <div className="bg-gradient-to-r from-cyan-300 to-rose-300 h-[100px] text-center flex items-center justify-center rounded-lg lg:rounded-none lg:border-b lg:border-l lg:border-slate-400  lg:min-h-[400px] lg:h-full">
                                            <p>Original Sneaker Shoes</p>
                                            <p>Need Image background</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-cyan-300 to-rose-300 h-[100px] text-center flex items-center justify-center rounded-lg lg:rounded-none lg:border-b lg:border-l lg:border-slate-400  lg:min-h-[400px] lg:h-full">
                                            <p>Original Sneaker Shoes</p>
                                            <p>Need Image background</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-cyan-300 to-rose-300 h-[100px] text-center flex items-center justify-center rounded-lg lg:rounded-none lg:border-b lg:border-l lg:border-slate-400  lg:min-h-[400px] lg:h-full">
                                            <p>Original Sneaker Shoes</p>
                                            <p>Need Image background</p>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="h-full flex flex-col justify-between lg:w-[62%] lg:pt-[140px] lg:px-16 lg:ml-1 2xl:max-w-[768px]">
                                <div className="relative">
                                    <span
                                        onClick={handleCloseModal}
                                        className="hidden absolute items-center justify-center -top-12 right-[83%] w-10 h-10 text-xl text-gray-800 bg-white rounded-full z-40 border lg:flex xl:right-[84%] 2xl:right-[86%]"
                                    >
                                        <HiXMark />
                                    </span>
                                    <ul>
                                        {ProductNavigation.map((item) => {
                                            return (
                                                <li
                                                    key={item.id}
                                                    className="px-[30px] py-[15px] lg:mb-[10px]"
                                                >
                                                    <Link
                                                        href={item?.url}
                                                        className="h-[70px] flex items-center justify-between"
                                                    >
                                                        <p className="flex-1 inline-block text-lg font-semibold">
                                                            {item.name}
                                                        </p>
                                                        <p className="min-w-[100px]">NEED IMAGE</p>
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
                                                    className="text-lg font-medium py-[15px]"
                                                >
                                                    <Link href={item?.url}>
                                                        <p>{item.name}</p>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <section>
                                    <div className="flex justify-center items-center mt-1 mb-4 lg:bottom-8">
                                        <a
                                            href="#"
                                            title="facebook/hoanShop"
                                            className="mr-[20px] p-[6px] text-[30px]"
                                        >
                                            <FaFacebook />
                                        </a>
                                        <a
                                            href="#"
                                            title="instagram/hoanShop"
                                            className=" p-[6px] text-[30px]"
                                        >
                                            <FaInstagram />
                                        </a>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopModalMenu;
