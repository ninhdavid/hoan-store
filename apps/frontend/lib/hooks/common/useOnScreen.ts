'use client';
import { useState, useEffect } from 'react';

function useOnScreen(ref: React.RefObject<HTMLDivElement>, threshold = 0.3) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update state when observer callback fires
                setIntersecting(entry?.isIntersecting ?? false);
            },
            {
                rootMargin: '0px',
                threshold,
            }
        );
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, threshold]); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}
export default useOnScreen;
