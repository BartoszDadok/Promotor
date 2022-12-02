import React, { useContext } from "react";
import { Template } from "./MainTemplate.style";
import { MobileFilterPanelContext } from "../../../contexts/MobileFilterPanel";
import ModalFilterPanel from "../../organisms/ModalFilterPanel/ModalFilterPanel";
import MobileMenu from "../../organisms/MobileMenu/MobileMenu";
import { HamburgerContext } from "../../../contexts/HamburgerContext";
import Navigation from "../../organisms/Navigation/Navigation";


interface Props {
    children: React.ReactNode;
}

const MainTemplate = (props: Props) => {
    const context = useContext(MobileFilterPanelContext);
    const activeFilterPanel = context.activeFilterPanel;

    const contextHamburger = useContext(HamburgerContext);
    const activeMobileMenu = contextHamburger.activeMobileMenu;
    return (
        <>
            <Navigation homePage={ "homePage" }/>
            <Template className={ (activeFilterPanel || activeMobileMenu) ? "modalIsActive" : "" }>
                { props.children }
            </Template>
            <div>
                <ModalFilterPanel/>
                <MobileMenu/>
            </div>
        </>
    );
};

export default MainTemplate;