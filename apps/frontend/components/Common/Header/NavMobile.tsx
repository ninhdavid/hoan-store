import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiBars2 } from 'react-icons/hi2';
import { BiSearchAlt } from 'react-icons/bi';
import { GoPackage } from 'react-icons/go';
import logo from '../../../public/logo.png';

export default function NavMobile() {
  return (
    <div className="w-full h-[60px] flex items-center fixed px-6">
      <div className="w-[100%] mt-2 flex items-center ">
        <div className="flex-1 justify-start">
          <HiBars2 className="text-2xl text-gray-800" />
        </div>
        <div className="flex flex-1 justify-center ">
          <Link href="/">
            {/* <Image src={logo} alt="logo" /> */}
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src="/logo.png"
              alt="logo"
              className="object-cover h-[40px] md:w-[100px]"
            />
          </Link>
        </div>
        <div className="flex justify-end flex-1">
          <BiSearchAlt className="text-2xl mr-5 text-gray-800" />
          <GoPackage className="text-2xl text-gray-800" />
        </div>
      </div>
    </div>
  );
}
