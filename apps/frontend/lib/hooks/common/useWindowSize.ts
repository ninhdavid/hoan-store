import { useState, useEffect } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
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

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId); // clear timeout when hook cancel
        };
    }, []);

    return windowSize;
}

export default useWindowSize;
