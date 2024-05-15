import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const cache = createCache();
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        (
                            <StyleProvider cache={cache}>
                                {sheet.collectStyles(<App {...props} />)}
                            </StyleProvider>
                        ),
                });

            const initialProps = await Document.getInitialProps(ctx);
            const style = extractStyle(cache, true);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                        <style dangerouslySetInnerHTML={{ __html: style }} />
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
