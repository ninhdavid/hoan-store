import React from 'react';
import { motion } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    isLoading?: boolean;
};

const SplashLoader = (props: Props) => {
    return (
        <>
            {props.isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    dasdas
                </motion.div>
            )}
        </>
    );
};

export default SplashLoader;
