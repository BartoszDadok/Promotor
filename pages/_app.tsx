import Head from "next/head";
import "../styles/resets.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainTemplate from "../components/templates/MainTemplate/MainTemplate";
import favicon from "../public/assets/favicon.png";
import HamburgerContext from "../contexts/HamburgerContext";
import MobileFilterPanelContext from "../contexts/MobileFilterPanel";
import FilteringContext from "../contexts/FilteringContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>

            <HamburgerContext>
                <MobileFilterPanelContext>
                    <FilteringContext>
                        <Head>
                            <title>Zimowe wakacje - Włochy, Francja, Austria, Polska | Promotor</title>
                            <meta name="description"
                                  content="Biuro podróży Promotor - specjalista od zimowych wakacji"/>
                            <link rel="shortcut icon" href={ favicon.src }/>
           
                        </Head>
                        <MainTemplate>
                            <Component { ...pageProps } />
                        </MainTemplate>
                    </FilteringContext>
                </MobileFilterPanelContext>
            </HamburgerContext>

        </>
    );
}

export default MyApp;