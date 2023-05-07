import Header from '@/components/Header/Header';
import '../styles/styles.css';
import { Providers } from './provider';
import Footer from '@/components/Footer/Footer';
import StyledComponentsRegistry from '@/app/registry'
import Head from './head';
import "swiper/swiper.min.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
      <html lang="en">
        <Head />
        <body>
          <StyledComponentsRegistry>
            <main className="app">
                <Providers>
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