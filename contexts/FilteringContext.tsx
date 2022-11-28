import React, { createContext, useState } from "react";
import { InitialStateTypes } from "../components/organisms/Offer/OfferTypes";
import preparedDataForState from "../helpers/prepareDateForState";

export const initialState = {
    date: preparedDataForState,
    country: {
        "Włochy": false,
        "Francja": false,
        "Austria": false,
        "Czechy": false,
    },
    board: {
        "Pełne": false,
        "Tylko śniadania": false,
        "Bez wyżywienia": false,
    },
    skipass: { "Skipass": false },
    category: {
        "Wczasy ogólne": false,
        "Wczasy ze szkółkami dla dzieci": false,
        "Obozy młodzieżowe": false,
        "Express narty": false,
        "Ski 50+ aktywnie": false,
    },
    accommodation: {
        "Hotel": false,
        "Apartament": false,
        "Ośrodek sportowy": false,
    },
    transport: {
        "Autokar": false,
        "Dojazd własny": false,
    },
};


export const FilteringContext = createContext({
    filteringState: initialState,
    changeFilteringState: function (obj: InitialStateTypes) {
    },
});

interface Props {
    children: React.ReactNode;
}

const FilteringContextProvider = (props: Props) => {
    const [filteringState, setFilteringState] = useState<InitialStateTypes>(initialState);

    const changeFilteringState = (obj: InitialStateTypes) => {
        setFilteringState(obj);
    };

    const context = {
        filteringState,
        changeFilteringState,
    };

    return (
        <FilteringContext.Provider value={ context }>
            { props.children }
        </FilteringContext.Provider>

    );
};

export default FilteringContextProvider;