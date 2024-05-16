import Head from 'next/head';
import { StateProvider } from '@/hooks/global';
import MainLayout from '@/layouts/main';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next APP</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Tim"></meta>
                <meta
                    name="description"
                    content="Transparent, decentralized trading bot NFT marketplace!"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <StateProvider>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </StateProvider>
        </>
    );
}
