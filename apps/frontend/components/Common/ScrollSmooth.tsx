'use client';
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useEffect } from 'react';

type ScrollSmoothLenisProps = {
    children: React.ReactNode;
};
function ScrollSmoothLenis(props: ScrollSmoothLenisProps) {
    const options = {
        // Các tùy chọn của Lenis
        duration: 1.2,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
    };
    return (
        <ReactLenis root options={{ ...options }}>
            {props.children}
        </ReactLenis>
    );
}

export default ScrollSmoothLenis;
