import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Navbar from '../src/Navbar/Navbar';

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [...initialProps.styles, ...sheet.getStyleElement()]
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <html>
            <Head>
                <link rel="stylesheet" type="text/css" href="/static/normalize.css"></link>
                <link rel="stylesheet" type="text/css" href="/static/prism.css"></link>
            </Head>
            <body>
            <Navbar />
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}