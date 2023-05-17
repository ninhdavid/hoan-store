import React from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    children?: React.ReactNode;
};

const Preload = (props: Props) => {
    return (
        <main>
            <div className="bg-black h-[100svh] w-full">
                <div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {props.children}
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Preload;
