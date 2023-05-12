'use client';
import Modals from '@/components/Modals/Modals';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Router } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import SplashLoader from './SplashLoader';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
    finishLoading?: object;
};

interface SplashLoadStyledProps {
    isLoading?: boolean;
}
const incAnimatePhase1 = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: 30%;
    }
`;

const incAnimatePhase2 = keyframes`
    0% {
        width: 30%;
    }
    
    100%{
        width: 100%;   
    }
`;

const contentWrapperPhase1 = keyframes`
    0% {
        height: 0svh;
    }
    
    100%{
        height:96svh;
    }
`;

const contentWrapperPhase2 = keyframes`
    0%{
        height:96svh;
    }
    70%{
        height:80px;
        opacity:1;
        width:98svw;
        margin: 2svh 0;
        border-radius: 24px;
    }
    100%{
        height:80px;
        opacity:0;
        width:100svw;
        margin:0;
        border-radius: 0px;
    }
`;
const contentPhase1 = keyframes`
    0% {
        opacity: 0;
        visibility: hidden;
    }
    40%{
        opacity: 0;
        visibility: hidden;
    }
    100%{
        opacity: 1;
        visibility: visible;
    }
`;
const contentPhase2 = keyframes`
    0%{
        opacity:1;
    }
    100%{
        opacity:0;
        transform:translateY(30svh);
    }
`;

const SplashLoadStyled = styled.main<SplashLoadStyledProps>`
    .initProgress {
        animation: ${incAnimatePhase1} 1s ease-out forwards;
        animation-delay: 1.2s;
        // delay time === content-wrapper duration
    }
    .initProgress {
        animation: ${(props) =>
            !props.isLoading
                ? css`
                      ${incAnimatePhase2} 3s linear forwards
                  `
                : ''};
    }

    .content-wrapper {
        animation: ${contentWrapperPhase1} 1s cubic-bezier(0.99, 0, 0, 1) forwards;
    }

    .content-wrapper {
        ${(props) =>
            !props.isLoading &&
            css`
                --animation-delay: 3.5s;
                animation: ${contentWrapperPhase2} 1.5s cubic-bezier(0.99, 0, 0, 1) forwards;
                var(--animation-delay);
                animation-delay: var(--animation-delay);
            `}
    }
    .content {
        animation: ${contentPhase1} 2s ease-out forwards;
    }
    .content {
        ${(props) =>
            !props.isLoading
                ? css`
                --animation-delay: 3.2s;
                animation: ${contentPhase2} 1s cubic-bezier(0.99, 0, 0, 1) forwards;
                var(--animation-delay);
                animation-delay: var(--animation-delay);
            `
                : ''}
    }
`;

const parentVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,

        transition: {
            duration: 1,
            when: 'beforeChildren',
            staggerChildren: 1,
        },
    },
    exit: {},
};
const childrenVariants = {
    initial: {
        opacity: 0,
        y: '100svh',
    },
    animate: {
        opacity: 1,
        y: '0',
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
    exit: {},
};

const SplashScreen = (props: Props) => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);

    useEffect(() => {
        if (isLoading) return;
    }, [isLoading]);

    const [progress, setProgress] = useState(20);
    // useEffect(() => {
    //     const isMounted = () => {
    //         setProgress(50);
    //         setIsLoading(false);
    //     };
    //     document.addEventListener('DOMContentLoaded', isMounted);

    //     return () => window.removeEventListener('load', isMounted);
    // }, [isLoading]);
    // useEffect(() => {
    //     const isMounted = () => {
    //         setProgress(100);
    //         setIsLoading(false);
    //     };
    //     window.addEventListener('load', isMounted);

    //     return () => window.removeEventListener('load', isMounted);
    // }, [isLoading]);
    console.log(progress);

    const divRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const div = divRef.current;
        setIsLoading(false);
        function divIsMounted() {
            if (div !== null) {
                div.style.display = 'none';
            }
        }
        setTimeout(() => {
            divIsMounted();
        }, 5000);
    }, [isLoading]);

    return (
        <SplashLoadStyled isLoading={isLoading}>
            <main className="fixed top-0 bottom-0 right-0 left-0 z-[60]" ref={divRef}>
                <div className="absolute w-[100svw] h-[100svh] top-0 left-0 flex  justify-center bg-gray-500">
                    <div className="w-[98svw] my-[2svh] bg-white  rounded-3xl flex items-center justify-center content-wrapper">
                        <div className="flex items-center justify-center flex-col content">
                            <span className="text-center text-5xl font-medium item-opacity">
                                Doom
                            </span>
                            <div className="bg-gray-500 h-2 w-[300px] mt-2 flex">
                                <div
                                    className={`my-auto bg-white h-[4px] max-w-[300px] rounded-sm initProgress`}
                                    // style={{ width: `${progress ? progress : 2}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </SplashLoadStyled>
    );
};

export default SplashScreen;
