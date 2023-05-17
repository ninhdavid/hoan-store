'use client';

import { useEffect, useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import { modalActions, selectSetModal } from '@/redux/ActionsReducer/MenuModal/MenuModalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks';
import Link from 'next/link';
import { FaRegUserCircle } from 'react-icons/fa';
import { HiBars2 } from 'react-icons/hi2';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { VscChevronDown } from 'react-icons/vsc';
import styled from 'styled-components';
import EmptyProductCart from '../Cart/EmptyProductCart';
import Modals from '../Modals/Modals';
import ShopModalMenu from '../Modals/ShopModalMenu/ShopModalMenu';
import Search from '@/components/Search/Search';
import { NavHoverStyled } from '@/styles/LandingPage/Footer/FooterStyled';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const WrapperStyled = styled.div`
    .is-search {
        cursor: pointer;
    }
`;

const headerVariants = {
    initial: {},
    animate: {},
};
const headerHeight = 200;

const Header = (props: Props) => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);

    const [mobileMenu, setMobileMenu] = useState(false);

    const dispatch = useAppDispatch();
    const isModal = useAppSelector(selectSetModal);
    const [modalType, setModalType] = useState('');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > headerHeight) {
            if (scrollY > lastScrollY && !mobileMenu) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(scrollY);
        }
        if (scrollY === 0) {
            setShowHeader(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastScrollY]);

    useEffect(() => {
        if (!isModal) {
            document.body.style.overflow = 'auto';
        }
    }, [isModal]);

    const handleOpenShop = (type) => {
        setModalType(type);
        dispatch(modalActions.setModal(!isModal)); //loading data thì thêm 0.1>0.2 (if increment this, another same position will be too)
    };

    let modalContent;
    switch (modalType) {
        case 'shopModalMenu':
            modalContent = <ShopModalMenu />;
            break;
        case 'searchModal':
            modalContent = <Search handleOpenShop={handleOpenShop} />;
            break;
        case 'emptyProductCart':
            modalContent = <EmptyProductCart handleOpenShop={handleOpenShop} />;
            break;

        default:
            modalContent = null;
    }
    return (
        <WrapperStyled>
            {isModal && (
                <Modals>
                    {/* <ShopModalMenu /> */}
                    {/* <Search /> */}
                    {/* <EmptyProduct handleOpenShop={handleOpenShop} //> */}
                    {modalContent}
                </Modals>
            )}
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: showHeader ? 0 : -80, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`bg-white font-semibold w-full h-[60px] flex justify-center items-center z-20 fixed top-0  ease-linear lg:h-[80x] xl:mx-auto `}
            >
                {/* ${showHeader} */}
                <div className="w-full bg-white flex justify-center items-center fixed ">
                    <div className=" max-w-[1800px] h-[60px]  w-[100%]  flex items-center px-[24px] md:px-[30px] lg:px-12 xl:px-[60px] lg:mt-2 2xl:mt-3 lg:h-[80px] 2xl:px-[80px] ">
                        <div className="flex-1 lg:block hidden ">
                            <div className="w-[70%] lg:w-[90%] xl:w-[70%] 2xl:w-[60%]">
                                <NavHoverStyled className="w-[100%] flex justify-between items-center ">
                                    <nav className="w-[100%] flex justify-between items-center divHover">
                                        <motion.div
                                            onClick={() => handleOpenShop('shopModalMenu')}
                                            className="flex items-center hover:cursor-pointer linkHover"
                                        >
                                            <span className="font-bold">SHOP</span>
                                            <span className="pl-1 xl:-mr-1">
                                                <VscChevronDown />
                                            </span>
                                        </motion.div>
                                        <div className="linkHover">
                                            <span className="font-bold hover:cursor-pointer">
                                                DISCOVER
                                            </span>
                                        </div>
                                        <div className="lg:-mr-3 xl:-mr-1 linkHover">
                                            <span className="font-bold hover:cursor-pointer">
                                                CO-BRAND
                                            </span>
                                        </div>
                                    </nav>
                                </NavHoverStyled>
                            </div>
                        </div>

                        {/*mobile & table*/}
                        <div className="flex-1 justify-start items-center lg:hidden">
                            <div className="max-w-[64px] flex justify-between items-center sm:max-w-[100px] md:max-w-[120px]">
                                <HiBars2
                                    onClick={() => handleOpenShop('shopModalMenu')}
                                    className="text-2xl text-gray-800 hover:cursor-pointer"
                                />
                                <IoSearchOutline className="text-2xl text-gray-800 lg:hidden hover:cursor-pointer" />
                            </div>
                        </div>

                        <div className="flex flex-1 justify-center ">
                            <Link href="/">
                                {/* <Image src={logo} alt="logo" /> */}
                                {/* eslint-disable-next-line @next/next/no-img-element*/}
                                <img
                                    src="/logo.png"
                                    alt="logo"
                                    className="object-contain h-[40px] hover:cursor-pointer md:object-fill md:w-[120px]"
                                />
                            </Link>
                        </div>
                        <div></div>
                        {/*mobile & table*/}

                        <div className="flex flex-1 justify-end items-center">
                            <div className="flex items-center justify-end w-[100%]">
                                <div className="w-[50%] lg:w-[100%] xl:w-[90%] 2xl:w-[75%]">
                                    <div className="w-[100%] flex justify-end items-center">
                                        <div className="flex justify-between items-center sm:min-w-[100px] md:min-w-[120px] lg:min-w-[100%]">
                                            <div
                                                id="refer-div"
                                                className="hidden justify-self-start mr-5 md:-mr-2 lg:block lg:pr-3 lg:pl-[2px] xl:pr-0 xl:-mr-0 2xl:pl-10  "
                                            >
                                                <span className=" font-semibold hover:cursor-pointer ">
                                                    REFER A FRIEND
                                                </span>
                                            </div>
                                            <motion.div
                                                transition={{ duration: 1 }}
                                                onClick={() => handleOpenShop('searchModal')}
                                                className="hidden group/item overflow-hidden max-w-[] text-2xl mr-5 text-gray-800 border border-slate-300 transition ease-in-out duration-500 rounded-full hover:bg-slate-100 md:-mr-2 lg:block 2xl:text-3xl is-search "
                                            >
                                                <label className="relative flex items-center justify-between py-1 transition-all ease-in-out duration-500 hover:cursor-pointer">
                                                    <span className="sr-only">Search</span>
                                                    <span className="px-1 inset-y-0 flex items-center ">
                                                        <IoSearchOutline className="py-1" />
                                                    </span>
                                                    <motion.span
                                                        transition={{ duration: 1 }}
                                                        className="hidden opacity-0 py-1 px-2 text-center bg-transparent  shadow-sm transition-all ease-in-out duration-500 text-sm group-hover/item:opacity-100 group-hover/item:block "
                                                    >
                                                        Search
                                                    </motion.span>
                                                </label>
                                            </motion.div>
                                            <div className="flex flex-1 items-center justify-between md:max-w-[120px] lg:flex-0 lg:max-w-[86px] lg:pl-2 xl:pl-1 xl:max-w-[86px] 2xl:max-w-[100px]">
                                                <IoCartOutline
                                                    onClick={() =>
                                                        handleOpenShop('emptyProductCart')
                                                    }
                                                    className="text-2xl mr-4 text-gray-800 hover:cursor-pointer lg:-mr-2 2xl:text-3xl"
                                                />
                                                <FaRegUserCircle className="text-2xl  text-gray-800  hover:cursor-pointer  md:-mr-0 2xl:text-3xl" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.header>
        </WrapperStyled>
    );
};

export default Header;
