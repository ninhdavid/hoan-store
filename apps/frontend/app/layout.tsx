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

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
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
