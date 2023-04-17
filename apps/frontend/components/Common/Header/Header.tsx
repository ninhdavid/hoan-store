import { useEffect, useState } from 'react';
import NavMobile from './NavMobile';

import Link from 'next/link';
import { HiBars2 } from 'react-icons/hi2';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { VscChevronDown } from 'react-icons/vsc';
import { FaRegUserCircle } from 'react-icons/fa';

type Props = {};

const Header = (props: Props) => {
  const [navMobile, setNavMobile] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState('translate-y-0');
  const [mobileMenu, setMobileMenu] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShowHeader('-translate-y-[80px]');
      } else {
        setShowHeader('shadow-sm');
      }
    } else {
      setShowHeader('translate-y-0');
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  const handleOpenShop = () => {
    setNavMobile(true);
  };
  return (
    <div
      className={`w-full flex justify-center z-20 sticky top-0 transition-transform duration-300 ${showHeader} `}
    >
      {navMobile && (
        <div>
          <NavMobile />
        </div>
      )}
      <div className="w-full max-w-[1800px]  bg-white  h-[60px]  flex justify-center items-center fixed px-[30px] lg:px-14 xl:px-[80px] md:h-[80px]">
        <div className="w-[100%] mt-2 flex items-center  ">
          <div className="flex-1 lg:block hidden ">
            <div className="w-[70%] lg:w-[80%] xl:w-[60%] 2xl:w-[50%]">
              <div className="w-[100%] flex justify-between items-center">
                <div className="flex items-center hover:cursor-pointer">
                  <span onClick={handleOpenShop} className="font-medium">
                    SHOP
                  </span>
                  <span className="pl-1 xl:-mr-1">
                    <VscChevronDown />
                  </span>
                </div>
                <div>
                  <span className="font-medium hover:cursor-pointer">
                    DISCOVER
                  </span>
                </div>
                <div className="lg:-mr-3 xl:-mr-1">
                  <span className="font-medium hover:cursor-pointer">
                    CO-BRAND
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*mobile & table*/}
          <div className="flex-1 justify-start items-center lg:hidden">
            <div className="max-w-[64px] flex justify-between items-center sm:max-w-[100px] md:max-w-[120px]">
              <HiBars2 className="text-2xl text-gray-800 hover:cursor-pointer" />
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
              <div className="w-[50%] lg:w-[95%] xl:w-[66%] 2xl:w-[60%]">
                <div className="w-[100%] flex justify-end items-center">
                  <div className="flex justify-around items-center sm:min-w-[120px] md:min-w-[160px] md:-mr-3 lg:min-w-[100%]">
                    <div className=" mr-5 lg:block hidden md:mr-0">
                      <span className="font-medium hover:cursor-pointer">
                        REFER A FRIEND
                      </span>
                    </div>
                    <IoSearchOutline className="hidden text-2xl mr-5 text-gray-800 hover:cursor-pointer md:-mr-2 lg:block 2xl:text-3xl" />
                    <IoCartOutline className="text-2xl mr-5 text-gray-800 hover:cursor-pointer md:-mr-2 2xl:text-3xl" />
                    <FaRegUserCircle className="text-2xl text-gray-800 hover:cursor-pointer md:mr-0 2xl:text-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
