import React, { createContext, useState } from "react";


export const HamburgerContext = createContext({
    activeMobileMenu: false,
    openMobileMenu: function () {
    },
    closeMobileMenu: function () {
    },
});

interface Props {
    children: React.ReactNode;
}

const HamburgerContextProvider = (props: Props) => {
    const [activeMobileMenu, setActiveMobileMenu] = useState(false);

    function openMobileMenu() {
        if (!activeMobileMenu) {
            setActiveMobileMenu(true);
        }

    }

    function closeMobileMenu() {
        if (activeMobileMenu) {
            setActiveMobileMenu(false);
        }

    }

    const context = {
        activeMobileMenu,
        openMobileMenu,
        closeMobileMenu,
    };

    return (
        <HamburgerContext.Provider value={ context }>
            { props.children }
        </HamburgerContext.Provider>

    );
};

export default HamburgerContextProvider;