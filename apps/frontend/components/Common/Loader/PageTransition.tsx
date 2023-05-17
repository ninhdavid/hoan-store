'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface pageProps {
    children: React.ReactNode;
}
const variants = {
    initial: {
        y: '100svh',
        scale: 0.95,
    },
    animate: {
        y: '0svh',
        scale: 1,
    },
    exit: {
        y: '-100svh',
    },
};

// eslint-disable-next-line no-empty-pattern
const PageTransition: FC<pageProps> = ({ children }) => {
    const pathname = usePathname();
    const [asPath, setAsPath] = useState(pathname);
    const onExitComplete = () => {
        window.scrollTo({ top: 0 });
    };
    useEffect(() => {
        if (pathname !== asPath) {
            setAsPath(pathname);
            window.scrollTo({ top: 0 });
        }
    }, [pathname, asPath]);

    return (
        <AnimatePresence onExitComplete={onExitComplete} initial={false} mode="wait">
            <motion.div
                key={asPath}
                variants={variants}
                initial="initial"
                animate="animate"
                // exit="exit"
                transition={{
                    duration: 0.7,
                    ease: 'easeInOut',
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
