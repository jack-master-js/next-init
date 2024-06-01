import Head from 'next/head';
import { StateProvider } from '@/hooks/global';
import MainLayout from '@/layouts/main';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next APP</title>

                <meta name="author" content="Tim"></meta>
                <meta name="description" content="some website" />

                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />

                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StateProvider>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </StateProvider>
        </>
    );
}
