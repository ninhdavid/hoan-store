import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.css';
import Header from '../components/Header/Header';
import { reduxWrapper } from '@/redux/store/store';
import { Provider } from 'react-redux';

function CustomApp({ Component, ...rest }: AppProps) {
    const { store, props } = reduxWrapper.useWrappedStore(rest);

    return (
        <>
            <Head>
                <title>Welcome to frontend!</title>
            </Head>
            <main className="app">
                <Provider store={store}>
                    <Header />
                    <Component {...props.pageProps} />
                </Provider>
            </main>
        </>
    );
}

// export default reduxWrapper.withRedux(CustomApp);
export default CustomApp;
