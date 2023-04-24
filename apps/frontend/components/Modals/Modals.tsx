import React, { useContext, useEffect, useState } from 'react';
import {
    fetchModalListSuccess,
    modalActions,
    selectSetModal,
} from '@/redux/ActionsReducer/MenuModal/MenuModalSlice';
import useWindowSize from '@/lib/hooks/common/useWindowSize';
import { EventTargetHandler } from '@/types/common/types';
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks';
import { AnimatePresence, motion } from 'framer-motion';
import  { WindowSizeContext } from '@/Context/WindowSizeProvider';
import { selectSetWindowSize } from '@/redux/ActionsReducer/MenuModal/Common/windowSize/windowSizeSlice';

type Props = {
    children?: React.ReactNode;
};

const Modals = (props: Props) => {
    const isModal = useAppSelector(selectSetModal);
    const dispatch = useAppDispatch();
    const windowSize = useWindowSize();
    // const {width,} = useContext(WindowSizeContext)
    // const windowSize = useAppSelector(selectSetWindowSize)


    useEffect(() => {
        if (isModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModal]);
    const handleCloseModal = (e: EventTargetHandler) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) {
            setTimeout(
                () => {
                    dispatch(modalActions.setModal(!isModal));
                },
                windowSize.width >= 1024 ? 600 : 300
            );
        }
    };

    return (
        <>
            <AnimatePresence>
                {isModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            delay: 0.1,
                        }}
                        className="fixed top-0 left-0 right-0 bottom-0 z-50  "
                    >
                        <div
                            onClick={handleCloseModal}
                            className={`w-full h-full absolute top-0 left-0 transition duration-500 bg-black/70`}
                        >
                            {props.children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Modals;
