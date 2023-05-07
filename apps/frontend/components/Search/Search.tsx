import Link from 'next/link';
import React ,{useState}from 'react';
import { HiXMark } from 'react-icons/hi2';
import {AnimatePresence, TargetAndTransition, motion} from 'framer-motion'
import useWindowSize from '@/lib/hooks/common/useWindowSize';
import { EventTargetHandler } from '@/types/common/types';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    handleOpenShop: (type?:string) => void;

};
const searchHeaderHeight= 300

const animateStyle: TargetAndTransition = {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.17, 0.55, 0.55, 1],
      delay: 0.3,
    },
  };

const Search = (props: Props) => {
    const windowSize = useWindowSize();
    const [isCloseSearch,setIsCloseSearch] = useState(true)
    
    const durationRuntime = windowSize.width >= 1024 ? 600 : 300;
    
    const handleOpenShop = (e: EventTargetHandler) => {
        e.stopPropagation();
        setIsCloseSearch(false)
        setTimeout(() => {
            props.handleOpenShop();
        }, durationRuntime);
    };
    return (
       <>
            <div>
                <AnimatePresence>
                    {isCloseSearch && <motion.div
                    initial={{y:-searchHeaderHeight,opacity:0}}
                    animate={animateStyle}
                    exit={{y:-searchHeaderHeight,opacity:0}}
                    className={`bg-white w-full h-[300px] px-6 `}>
                        <div className="z-10 relative flex items-center justify-end w-full  ">
                            <motion.span
                            onClick={handleOpenShop}
                            whileTap={{ scale: 0.95,opacity:0.5 }}
                            whileHover={{scale:1.1,opacity:1}}
                                className={`absolute flex items-center justify-center top-6  w-10 h-10  text-xl text-gray-800  bg-white rounded-full z-40 border hover:cursor-pointer    `}
                            >
                                <HiXMark />
                            </motion.span>
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
                    </motion.div>}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                <motion.div 
                initial={{opacity:0.8}}
                whileHover={{opacity:1}}
                className={`relative w-full h-[calc(100vh-300px)] z-0 hover:underline`}>
                    {isCloseSearch && <motion.div
                            initial={{ opacity: 0,y:300 }}
                            animate={{ opacity: 1,y:0 }}
                            exit={{ opacity:0,y:300}}
                            transition={{y:{duration:0.7}, opacity:{duration:0.7}}}
                            onClick={handleOpenShop}
                            className={`group flex flex-col w-full h-full`}
                    >
                            <div className='h-[300px] invisible'></div>
                            <div className=" w-full flex items-center justify-center">
                                <span className="text-[20px] bg-black/70 text-gray-300 transition-all duration-200 group-hover:underline hover:text-gray-100 hover:cursor-pointer xl:text-[24px] 2xl:text-[32px] ">
                                    Continue Shopping
                                </span>
                            </div>
                    </motion.div>}
                </motion.div>
            </AnimatePresence>
       </>
    );
};

export default Search;
