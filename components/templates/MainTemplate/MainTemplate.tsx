import React from "react";
import { Template } from "./MainTemplate.style";

interface Props {
    children: React.ReactNode;
}

const MainTemplate = (props: Props) => {
    return (
        <Template>
            { props.children }
        </Template>
    );
};

export default MainTemplate;