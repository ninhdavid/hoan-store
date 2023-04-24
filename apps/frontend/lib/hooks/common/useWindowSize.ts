import { selectSetWindowSize, windowSizeActions } from '@/redux/ActionsReducer/MenuModal/Common/windowSize/windowSizeSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store/reduxHooks';
import { useState, useEffect } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width:0,
        height: 0,
    });
    let timeoutId;
    const handleResize = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }, 1000);
    };
    
    useEffect(() => {
            handleResize()
        // if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId); // clear timeout when hook cancel
        };
    // }

    }, []);

    return windowSize;
}

export default useWindowSize;
