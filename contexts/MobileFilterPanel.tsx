import React, { createContext, useState } from "react";


export const MobileFilterPanelContext = createContext({
    activeFilterPanel: false,
    openFilterPanel: function () {
    },
    closeFilterPanel: function () {
    },
});

interface Props {
    children: React.ReactNode;
}

const MobileFilterPanelContextProvider = (props: Props) => {
    const [activeFilterPanel, setActiveFilterPanel] = useState(false);

    function openFilterPanel() {
        if (!activeFilterPanel) {
            setActiveFilterPanel(true);
        }

    }

    function closeFilterPanel() {
        if (activeFilterPanel) {
            setActiveFilterPanel(false);
        }

    }

    const context = {
        activeFilterPanel,
        openFilterPanel,
        closeFilterPanel,
    };

    return (
        <MobileFilterPanelContext.Provider value={ context }>
            { props.children }
        </MobileFilterPanelContext.Provider>

    );
};

export default MobileFilterPanelContextProvider;