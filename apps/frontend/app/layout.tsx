import StyledComponentsRegistry from '@/app/registry';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper.min.css';
import '../styles/styles.css';
import Head from './head';
import { Providers } from './provider';
import SplashScreen from '@/components/Common/Loader/SplashScreen';
import { Metadata } from 'next';

import localFont from 'next/font/local';
const modernEra = localFont({
    src: [
        {
            path: '../public/fonts/modernEra/modern-era-light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/modernEra/modern-era-regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/modernEra/modern-era-medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/modernEra/modern-era-bold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/modernEra/modern-era-bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/modernEra/modern-era-extrabold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../public/fonts/modernEra/modern-era-black.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
    // display: 'swap',
    variable: '--font-modernEra',
});
export const metadata: Metadata = {
    title: 'Home',
    description: 'Welcome to frontend!',
};
export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${modernEra.variable} font-sans`}>
            <body>
                <StyledComponentsRegistry>
                    <main className="app">
                        <Providers>
                            <SplashScreen />
                            <Header />
                            {children}
                            <Footer />
                        </Providers>
                    </main>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
