import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.css';
import Header from '../components/Common/Header/Header';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
