import React, { useEffect, useState } from 'react';
import { fetchModalListSuccess, modalActions, selectSetModal } from './MenuModalSlice';
import useWindowSize from '@/lib/hooks/common/useWindowSize';
import { EventTargetHandler } from '@/types/common/types';
import { useAppDispatch, useAppSelector } from '@/store/reduxHooks';

type Props = {
    children?: React.ReactNode;
};

const Modals = (props: Props) => {
    const isModal = useAppSelector(selectSetModal);
    const dispatch = useAppDispatch();
    const { width, height } = useWindowSize();

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
                width >= 1024 ? 600 : 300
            );
        }
    };

    return (
        <>
            {isModal && (
                <div className="fixed top-0 left-0 right-0 bottom-0 z-50  ">
                    <div
                        onClick={handleCloseModal}
                        className={`w-full h-full absolute top-0 left-0 transition duration-500 bg-black/70`}
                    >
                        {props.children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modals;
