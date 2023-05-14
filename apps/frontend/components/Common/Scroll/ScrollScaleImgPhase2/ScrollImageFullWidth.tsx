import Image from 'next/image';
import React from 'react';
import { AnimatePresence, motion, MotionValue } from 'framer-motion';
import { ScrollContext } from '@/Context/ScrollProvider';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    style: {
        width?: MotionValue<string>;
        height?: MotionValue<string>;
        scale?: MotionValue<string | number>;
    };
};

const ImageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { opacity: { duration: 0.3 }, width: { duration: 0.2 } } },
    exit: { opacity: 0 },
};

function ScrollImageFullWidth(props: Props) {
    const { lastCardOutView } = React.useContext(ScrollContext);
    const customStyle = {
        transition: 'all 0.3s linear',
        ...props.style,
    };
    return (
        <AnimatePresence initial={false}>
            {!lastCardOutView && (
                <motion.div
                    variants={ImageVariants}
                    initial="initial"
                    animate={{ opacity: 1, transition: { opacity: { duration: 0.3 } } }}
                    exit="exit"
                    className="z-20  mx-auto my-auto sticky top-0 "
                    style={customStyle}
                >
                    <Image
                        src="/assets/poster/jd1-low-travisscott-fragment.jpg"
                        alt="product-card-preview"
                        width={1200}
                        height={800}
                        className={`${
                            !lastCardOutView ? 'z-10' : 'z-0'
                        }  rounded-b-3xl object-cover min-w-[100%] min-h-[100%]`}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ScrollImageFullWidth;
