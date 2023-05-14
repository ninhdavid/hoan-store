import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../Button';
import useWindowSize from '@/lib/hooks/common/useWindowSize';
import { CollectionCardStyled } from '@/styles/LandingPage/CollectionCardStyled';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};
const collections = [
    {
        id: 1,
        src: '/assets/collection/jd1-high-retro-chicago.jpg',
        title: 'The Epitome of Style and Performance: Jordan 1 High OG',
        description:
            'Jordan 1 High OG - Khi phong cách và hiệu năng giao thoa, mang đến trải nghiệm tuyệt vời nhất.',
    },
    {
        id: 2,
        src: '/assets/collection/air-force-1-low-skeleton.jpg',
        title: 'Nike Air Max: Embrace Breakthrough and Confidence with Supreme Athletic Style',
        description:
            'Nike Air Max: Khám phá phong cách và sự thoải mái tuyệt vời với công nghệ đệm tiên tiến và thiết kế vượt thời gian.',
    },
    {
        id: 3,
        src: '/assets/collection/happy-air-max-day.jpg',
        title: 'Air Max Day: Celebrating the Iconic Air Max Legacy',
        description:
            'Ngày Air Max: Tôn vinh di sản huyền thoại của dòng giày Air Max. Hãy cùng chúng tôi kỷ niệm và truyền cảm hứng từ những thiết kế đột phá và công nghệ đệm tiên tiến của Air Max. Mỗi ngày Air Max là một cơ hội để chúng ta khám phá thế giới thể thao và thời trang qua một góc nhìn độc đáo và phong cách.',
    },
];
const CollectionCard = (props: Props) => {
    const windowSize = useWindowSize();

    const windowWidthSize = windowSize.width;
    // const collection = collections.map((collection) => collection);
    return (
        <main className="h-full w-full">
            <CollectionCardStyled>
                <section className="overflow-hidden h-full w-full grid gap-y-[24px] md:gap-y-[30px] lg:gap-y-[48px] xl:grid-cols-11 xl:grid xl:grid-rows-6 xl:gap-y-[120px]">
                    <motion.div
                        whileTap={{ opacity: 0.9 }}
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'linear' }}
                        className="relative rounded-3xl xl:rounded-lg xl:col-start-2 xl:row-start-1 xl:row-span-2 xl:col-span-4 bg-red-50 collection-content"
                    >
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer w-full h-full  "
                        >
                            <Image
                                src={collections[0].src}
                                alt="banner"
                                width={400}
                                height={600}
                                className="w-full h-full object-fill rounded-3xl xl:rounded-lg"
                            />
                        </motion.div>
                        <Button
                            href={`/product/id`}
                            rounded
                            dark
                            className="absolute right-[50%] translate-x-[50%] bottom-[20%]"
                        >
                            <span>View Collection</span>
                        </Button>
                    </motion.div>

                    <motion.div
                        whileTap={{ opacity: 0.9 }}
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'linear' }}
                        className="z-10 relative rounded-3xl xl:rounded-lg xl:col-start-7 xl:row-start-3 xl:row-span-2 xl:col-span-4 bg-red-50 collection-content"
                    >
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer h-full w-full"
                        >
                            <Image
                                src={collections[1].src}
                                alt="banner"
                                width={400}
                                height={600}
                                className="h-full w-full object-fill rounded-3xl xl:rounded-lg"
                            />
                        </motion.div>
                        <Button
                            href={`/product/id`}
                            rounded
                            dark
                            className="absolute right-[50%] translate-x-[50%] bottom-[20%]"
                        >
                            <span>View Collection</span>
                        </Button>

                        <motion.div
                            whileInView={{ opacity: 1, width: '1640px' }}
                            initial={{ opacity: 0, width: '0px' }}
                            transition={{ duration: 0.5, ease: 'linear', delay: 0.6 }}
                            className="h-[2px] w-[1000px] bg-gradient-to-r from-transparent via-black via-40% to-[#aaff64] absolute top-0 left-0 translate-x-[-975px] translate-y-[-60px]"
                        ></motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, width: '1640px' }}
                            initial={{ opacity: 0, width: '0px' }}
                            transition={{ duration: 0.6, ease: 'linear', delay: 0.9 }}
                            className="h-[2px] w-[1000px] bg-gradient-to-l from-transparent via-black via-40% to-[#aaff64] absolute bottom-0 right-0 translate-x-[145px] translate-y-[60px]"
                        ></motion.div>
                    </motion.div>

                    <motion.div
                        whileTap={{ opacity: 0.9 }}
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'linear' }}
                        className="relative rounded-3xl xl:rounded-lg xl:col-start-2 xl:row-start-5 xl:row-span-2 xl:col-span-4 bg-red-50 collection-content"
                    >
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer h-full w-full"
                        >
                            <Image
                                src={collections[2].src}
                                alt="banner"
                                width={400}
                                height={600}
                                className="h-full w-full object-fill rounded-3xl xl:rounded-lg"
                            />
                        </motion.div>
                        <Button
                            href={`/product/id`}
                            rounded
                            dark
                            className="absolute right-[50%] translate-x-[50%] bottom-[20%]"
                        >
                            <span>View Collection</span>
                        </Button>
                    </motion.div>

                    {windowWidthSize >= 1280 && (
                        <>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 600 }}
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 22 },
                                    duration: 0.7,
                                    delay: 0.5,
                                }}
                                className="flex flex-col justify-center items-center xl:col-start-7 xl:col-span-3 xl:row-start-1 xl:row-span-2 "
                            >
                                <div className="flex flex-col justify-center h-full w-full ">
                                    <h1 className="text-6xl font-extrabold text-[#aaff64]">
                                        {collections[0]?.title}
                                    </h1>
                                    <h3 className="text-white text-lg">
                                        {collections[0]?.description}
                                    </h3>
                                </div>
                            </motion.div>

                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 900 }}
                                transition={{
                                    x: {
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 22,
                                        duration: 0.6,
                                    },
                                    opacity: { duration: 0.3 },
                                    delay: 1,
                                }}
                                className="flex flex-col justify-center items-center xl:col-start-3 xl:col-span-3 xl:row-start-3 xl:row-span-2 "
                            >
                                <div className="flex flex-col justify-center items-end h-full w-full ">
                                    <h1 className="text-6xl font-extrabold text-[#aaff64]">
                                        {collections[1]?.title}
                                    </h1>
                                    <h3 className="text-white text-lg">
                                        {collections[1]?.description}
                                    </h3>
                                </div>
                            </motion.div>

                            <motion.div
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 300 }}
                                transition={{
                                    y: { type: 'spring', stiffness: 200, damping: 22 },
                                    duration: 0.6,
                                    delay: 1,
                                }}
                                className="flex flex-col justify-center items-center xl:col-start-7 xl:col-span-3 xl:row-start-5 xl:row-span-2 "
                            >
                                <div className="flex flex-col justify-center  h-full w-full ">
                                    <h1 className="text-6xl font-extrabold text-[#aaff64]">
                                        {collections[2]?.title}
                                    </h1>
                                    <h3 className="text-white text-lg">
                                        {collections[2]?.description}
                                    </h3>
                                </div>
                            </motion.div>
                        </>
                    )}
                </section>
            </CollectionCardStyled>
        </main>
    );
};

export default CollectionCard;
