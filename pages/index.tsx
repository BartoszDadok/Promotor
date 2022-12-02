import type { NextPage } from "next";
import Navigation from "../components/organisms/Navigation/Navigation";
import Header from "../components/organisms/Header/Header";
import News from "../components/organisms/News/News";
import Offer from "../components/organisms/Offer/Offer";
import Footer from "../components/organisms/Footer/Footer";

const Home: NextPage = () => {
    return (
        <div>

            <Header/>
            <News/>
            <Offer/>
            <Footer/>
        </div>
    );
};

export default Home;