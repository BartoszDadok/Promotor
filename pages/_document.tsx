import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/*To preload heroImage photo only on desktops*/}
                    <link rel="preload" href="/_next/static/media/promotor-family-image.3c1a7147.jpg" as="image"
                          media="(min-width: 1000px)"/>

                    <link rel="preload" href="/fonts/subset-Lato-BoldItalic.woff2" as="font" type="font/woff2"
                          crossOrigin=""/>
                    <link rel="preload" href="/fonts/subset-Lato-Regular.woff2" as="font" type="font/woff2"
                          crossOrigin=""/>
                    <link rel="preload" href="/fonts/subset-Lato-Light.woff2" as="font" type="font/woff2"
                          crossOrigin=""/>
                    <link rel="preload" href="/fonts/subset-Lato-Bold.woff2" as="font" type="font/woff2"
                          crossOrigin=""/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>

            </Html>
        );
    }

    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App { ...props } />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        { initialProps.styles }
                        { sheet.getStyleElement() }
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}