import React, { useContext } from "react";
import { Template } from "./MainTemplate.style";
import MobileFilterPanel, { MobileFilterPanelContext } from "../../../contexts/MobileFilterPanel";
import ModalFilterPanel from "../../organisms/ModalFilterPanel/ModalFilterPanel";


interface Props {
    children: React.ReactNode;
}

const MainTemplate = (props: Props) => {
    const context = useContext(MobileFilterPanelContext);
    const activeFilterPanel = context.activeFilterPanel;
    return (
        <>
            <Template className={ activeFilterPanel ? "modalIsActive" : "" }>
                { props.children }
            </Template>
            <div>
                 <ModalFilterPanel/>
            </div>

        </>
    );
};

export default MainTemplate;