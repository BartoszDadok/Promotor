import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import heroImgSrc from "../../../public/assets/promotor-family-image.jpg";
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
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