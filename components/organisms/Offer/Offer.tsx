import React, { FormEvent, useContext} from "react";
import { PageParagraph } from "../../atoms/PageParagraph/PageParagraph";
import Item from "../Item/Item";
import { InitialStateTypes, Translations, ItemTypes } from "./OfferTypes";
import {
    OfferWrapper,
    FilterWrapper,
    Filter,
    FilterH3,
    Items,
    HeadLineH3,
} from "./Offer.styles";
import preparedDataForState from "../../../helpers/prepareDateForState";

import angelo from "../../../public/assets/hotels/angelo.jpg";
import cevedale from "../../../public/assets/hotels/cevedale.jpg";
import der from "../../../public/assets/hotels/der.jpg";
import front from "../../../public/assets/hotels/front.jpg";
import golf from "../../../public/assets/hotels/golf.jpg";
import gentianes from "../../../public/assets/hotels/gentianes.jpg";
import haus from "../../../public/assets/hotels/haus.jpg";
import lagra from "../../../public/assets/hotels/lagra.jpg";
import laroccasport from "../../../public/assets/hotels/laroccasport.jpg";
import leschaletsladonis from "../../../public/assets/hotels/leschaletsladonis.jpg";
import margarethenbad from "../../../public/assets/hotels/margarethenbad.jpg";
import misurina from "../../../public/assets/hotels/misurina.jpg";
import pampeago from "../../../public/assets/hotels/pampeago.jpg";
import prom from "../../../public/assets/hotels/prom.jpg";
import solaris from "../../../public/assets/hotels/solaris.jpg";
import topresidence from "../../../public/assets/hotels/topresidence.jpg";
import villa from "../../../public/assets/hotels/villa.jpg";
import FilterButton from "../../molecules/FilterButton/FilterButton";
import FilterPanel from "../FilterPanel/FilterPanel";
import removedDuplicatedDate from "../../../helpers/collectedDate";
import { FilteringContext } from "../../../contexts/FilteringContext";
import collectFilteringData from "../../../helpers/collcectFilteringData";
import filterData from "../../../helpers/filterData";
import { translations } from "../../../helpers/translations";


const images = {
    angelo,
    cevedale,
    golf,
    gentianes,
    leschaletsladonis,
    margarethenbad,
    misurina,
    pampeago,
    prom,
    solaris,
    topresidence,
    laroccasport,
    hausanderluck: haus,
    lagranbecca: lagra,
    frontdeneige: front,
    villaggiodolomitico: villa,
    derbyclub: der,
};



const Offer = () => {
    const context = useContext(FilteringContext);
    const filteringState = context.filteringState;
    const setFilteringState = context.changeFilteringState;

    const collectedFilteringData = collectFilteringData(filteringState);

    const getFilteringCategories = () => {
        return Object.keys(collectedFilteringData);
    };
    const filteringCategories = getFilteringCategories();

    const filteredData = filterData(filteringCategories, collectedFilteringData);

    const filteringElements = Object.values(collectedFilteringData).flat(); //any tu jest

    function handleFilteredInputs(e: FormEvent<HTMLInputElement | HTMLSelectElement>) {
        const target = e.target as HTMLInputElement;
        const key = target?.parentElement?.parentElement?.dataset.name;
        const toFilter = translations[target.name as keyof Translations] ? translations[target.name as keyof Translations] : target.name;

        if (target.tagName === "SELECT") {
            // @ts-ignore
            const toFilter = translations[target.value as keyof Translations] ? translations[target.value as keyof Translations] : target.value;
            if (target.value === "all") {
                setFilteringState({ ...filteringState, date: { ...preparedDataForState } });
            }

            setFilteringState({
                ...filteringState,
                date: {
                    ...preparedDataForState,
                    [toFilter]: !filteringState[key as keyof InitialStateTypes][toFilter as keyof InitialStateTypes[keyof InitialStateTypes]],
                },
            });
            return;

        }

        const objectIsNested = Object.keys(filteringState[key as keyof InitialStateTypes]).length;


        if (!objectIsNested) {
            let newState = {
                ...filteringState,
                [key as keyof InitialStateTypes]: !filteringState[key as keyof InitialStateTypes],
            };
            setFilteringState(newState);
            return;
        } else {
            const newState = {
                ...filteringState,
                [key as keyof InitialStateTypes]: {
                    ...filteringState[key as keyof InitialStateTypes],
                    [toFilter]: !filteringState[key as keyof InitialStateTypes][toFilter as keyof InitialStateTypes[keyof InitialStateTypes]],
                },
            };
            setFilteringState(newState);
            return;

        }
    }

    return (
        <>
            <HeadLineH3 id="oferta">Znajdź swoje zimowe wczasy</HeadLineH3>
            <FilterButton/>
            <OfferWrapper>
                <FilterPanel handleFilteredInputs={ handleFilteredInputs }
                             removedDuplicatedDate={ removedDuplicatedDate }/>
                <Items>

                    { filteringElements.length > 0 &&
                    <FilterWrapper>
                        <FilterH3>Twoje filtry: </FilterH3>
                        { filteringElements.map((element: string) => <Filter
                            key={ element }>{ element !== "all" ? element : "Wszystkie terminy" }</Filter>)
                        }
                    </FilterWrapper>
                    }

                    { filteredData.length > 0 ? filteredData.map((itemData: ItemTypes) => {
                            const objectPhoto = itemData.object.replace(/ /g, "").toLowerCase().replace("'", "");
                            // @ts-ignore
                            const src = images[objectPhoto];
                            return (<Item key={ itemData.id } itemData={ itemData } src={ src }/>);
                        })
                        : <div>
                            <div>
                                <PageParagraph fontSize={ "1.rem" } textAlign={ "center" } margin={ "2em 0" }
                                               fontWeight={ "700" }>Nie znaleziono żadnego wyjazdu pasującego do
                                    wybranych filtrów.</PageParagraph>
                            </div>
                        </div> }
                </Items>
            </OfferWrapper>
        </>
    );
};

export default Offer;