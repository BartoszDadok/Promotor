import stripeSrc from "../../../public/assets/pasek.jpg";

import { NavigationDesktop } from "./Navigation.styles";
import { useEffect, useState } from "react";
import MenuDesktop from "../../molecules/MenuDesktop/MenuDesktop";

const Navigation = ({ homePage }: { homePage?: string }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            }
            if (window.scrollY === 0) {
                setIsScrolled(false);
            }
        };
        window.document.addEventListener("scroll", onScroll);

        return () => window.document.removeEventListener("scroll", onScroll);
    });

    return (
        homePage ?
            <NavigationDesktop stripeSrc={ stripeSrc.src } className={ isScrolled ? "isScrolled" : "" }>
                <MenuDesktop isScrolled={ isScrolled }/>
            </NavigationDesktop>
            :
            <NavigationDesktop stripeSrc={ stripeSrc.src } className={ "visible isScrolled" }>
                <MenuDesktop isScrolled={ isScrolled }/>
            </NavigationDesktop>


    );
};

export default Navigation;