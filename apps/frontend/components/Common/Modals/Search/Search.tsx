import Link from 'next/link';
import React from 'react';
import { HiXMark } from 'react-icons/hi2';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const Search = (props: Props) => {
    return (
        <div>
            <div className="bg-white w-full h-[300px] px-6">
                <div className="relative flex items-center justify-end w-full ">
                    <span
                        className={`absolute flex items-center justify-center top-6  w-10 h-10  text-xl text-gray-800  bg-white rounded-full z-40 border transition duration-200 hover:bg-gray-100 hover:cursor-pointer focus:bg-white   `}
                    >
                        <HiXMark />
                    </span>
                </div>
                <section className="flex flex-col justify-end h-full pb-10">
                    <div className="text-2xl">
                        <input
                            className=" placeholder:text-slate-300 block bg-white w-full rounded-md py-2 px-3 shadow-sm sm:text-sm"
                            placeholder="Search for anything..."
                            type="text"
                            name="searchInput"
                        />
                    </div>
                    <div className="text-xs md:flex md:pl-12 lg:text-sm xl:text-base xl:justify-center">
                        <div className="py-4 xl:mr-10 2xl:w-[10%] 2xl:text-right">
                            <p>Popular:</p>
                        </div>
                        <div className="flex justify-center items-center md:flex-1 xl:justify-start">
                            <ul className="flex justify-between w-[77%] xl:w-[30%] 2xl:w-[30%]">
                                <li className="p-1 hover:cursor-pointer">
                                    <Link href="/">
                                        <p>Artist Series</p>
                                    </Link>
                                </li>
                                <li className="p-1 hover:cursor-pointer">
                                    <Link href="/">
                                        <p>Black</p>
                                    </Link>
                                </li>
                                <li className="p-1 hover:cursor-pointer">
                                    <Link href="/">
                                        <p>Low</p>
                                    </Link>
                                </li>
                                <li className="p-1 hover:cursor-pointer">
                                    <Link href="/">
                                        <p>High OG</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <div></div>
        </div>
    );
};

export default Search;
