import { useAppDispatch, useAppSelector } from 'apps/frontend/store/reduxHooks';
import React, { useEffect, useState } from 'react';
import { fetchModalListSuccess, modalActions, selectSetModal } from './MenuModalSlice';
import { EventTargetHandler } from 'apps/frontend/types/common/types';
import useWindowSize from 'apps/frontend/lib/hooks/common/useWindowSize';

type Props = {
    children?: React.ReactNode;
};

const Modals = (props: Props) => {
    const isModal = useAppSelector(selectSetModal);
    const dispatch = useAppDispatch();
    const windowSize = useWindowSize();
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
            dispatch(modalActions.setModal(!isModal));
        }
    };

    return (
        <>
            {isModal && (
                <div className="fixed top-0 left-0 right-0 bottom-0 z-50  ">
                    <div
                        onClick={handleCloseModal}
                        className="w-full h-full bg-black/70 absolute top-0 left-0"
                    >
                        {props.children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modals;
