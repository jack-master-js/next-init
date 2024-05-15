import { StateProvider } from '@/hooks/global';
import MainLayout from '@/layouts/main';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <StateProvider>
            <MainLayout>
                <Head>
                    <title>Next APP</title>
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Component {...pageProps} />
            </MainLayout>
        </StateProvider>
    );
}
