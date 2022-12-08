import React, { FormEvent, useContext } from "react";
import { PageParagraph } from "../../atoms/PageParagraph/PageParagraph";
import Item from "../Item/Item";
import {
    ItemTypes,
    DateTypes, TranslationKeys, InitialStateKeysWithoutDate, NestedKeys,
} from "./OfferTypes";
import {
    OfferWrapper,
    FilterWrapper,
    Filter,
    FilterH3,
    Items,
    HeadLineH3,
} from "./Offer.styles";
import preparedDataForState from "../../../helpers/prepareDateForState";
import FilterButton from "../../molecules/FilterButton/FilterButton";
import FilterPanel from "../FilterPanel/FilterPanel";
import removedDuplicatedDate from "../../../helpers/collectedDate";
import { FilteringContext } from "../../../contexts/FilteringContext";
import collectFilteringData from "../../../helpers/collcectFilteringData";
import filterData from "../../../helpers/filterData";
import { translations } from "../../../helpers/translations";
import { images } from "../../../utils/mainImages";


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

    const filteringElements: string[] = Object.values(collectedFilteringData).flat(); //any tu jest

    function handleFilteredInputs(e: FormEvent<HTMLInputElement | HTMLSelectElement>) {
        const target = e.target as HTMLInputElement;

        if (target.tagName === "SELECT") {
            const key = target?.parentElement?.parentElement?.dataset.name as "date";
            const toFilter = target.value as keyof DateTypes;

            if (target.value === "all") {
                setFilteringState({ ...filteringState, date: { ...preparedDataForState } });
            }

            setFilteringState({
                ...filteringState,
                date: {
                    ...preparedDataForState,
                    [toFilter]: !filteringState[key][toFilter],
                },
            });
            return;

        } else {
            const key = target?.parentElement?.parentElement?.dataset.name as InitialStateKeysWithoutDate;
            const targetName = target.name as TranslationKeys;
            const toFilter = translations[targetName] as NestedKeys;

            const objectIsNested = Object.keys(filteringState[key]).length;
            if (!objectIsNested) {
                let newState = {
                    ...filteringState,
                    [key]: !filteringState[key],
                };
                setFilteringState(newState);
                return;
            } else {
                const newState = {
                    ...filteringState,
                    [key]: {
                        ...filteringState[key],
                        [toFilter]: !filteringState[key][toFilter],
                    },
                };
                setFilteringState(newState);
                return;
            }

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

                    { filteredData.length > 0
                        ? filteredData.map((itemData: ItemTypes) => {
                            const objectPhoto = itemData.object.replace(/ /g, "").toLowerCase().replace("'", "");
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