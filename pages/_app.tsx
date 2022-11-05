import Head from "next/head";
import "../styles/resets.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainTemplate from "../components/templates/MainTemplate/MainTemplate";
import favicon from "../public/assets/favicon.png";

function MyApp({ Component, pageProps }: AppProps) {
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <Head>
                <title>Zimowe wakacje - Włochy, Francja, Austria, Polska | Promotor</title>
                <meta name="description" content="Biuro podróży Promotor - specjalista od zimowych wakacji"/>
                <link rel="shortcut icon" href={ favicon.src }/>
                <script
                    dangerouslySetInnerHTML={ {
                        __html: `
                    document.fonts.ready.then(function(){
                    document.getElementsByTagName("html")[0].classList.add("fonts-loaded")
                })
                  `,
                    } }
                ></script>

            </Head>
            <MainTemplate>
                <Component { ...pageProps } />
            </MainTemplate>
        </>
    );
}

export default MyApp;