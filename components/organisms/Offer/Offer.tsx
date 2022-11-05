import React, { FormEvent, useState } from "react";
import { data } from "../../../public/assets/data";
import { PageParagraph } from "../../atoms/PageParagraph/PageParagraph";
import Item from "../Item/Item";
import { InitialStateTypes, DateTypes, Translations, FilteringDataTypes, ItemTypes } from "./OfferTypes";
import {
    OfferWrapper,
    FilterWrapper,
    Filter,
    FilterH3,
    Input,
    Legend,
    Label,
    InputContainer,
    FieldContainer,
    FilterSidebar,
    LabelSelect,
    Select,
    Items,
    HeadLineH3,
    HeadLineH4,
} from "./Offer.styles";
import angelo from "../../../public/assets/hotels/angelo.jpg";
import cevedale from "../../../public/assets/hotels/cevedale.jpg";
import derbyclub from "../../../public/assets/hotels/derbyclub.jpg";
// import frontdeneige from "../../../public/assets/hotels/frontdeneige.jpg";
import golf from "../../../public/assets/hotels/golf.jpg";
import gentianes from "../../../public/assets/hotels/gentianes.jpg";
// import hausanderluck from "../../../public/assets/hotels/hausanderluck.jpg";
// import lagranbecca from "../../../public/assets/hotels/lagranbecca.jpg";
import laroccasport from "../../../public/assets/hotels/laroccasport.jpg";
import leschaletsladonis from "../../../public/assets/hotels/leschaletsladonis.jpg";
import margarethenbad from "../../../public/assets/hotels/margarethenbad.jpg";
import misurina from "../../../public/assets/hotels/misurina.jpg";
import pampeago from "../../../public/assets/hotels/pampeago.jpg";
import prom from "../../../public/assets/hotels/prom.jpg";
import solaris from "../../../public/assets/hotels/solaris.jpg";
import topresidence from "../../../public/assets/hotels/topresidence.jpg";

const images = {
    angelo,
    derbyclub,
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
    laroccasport
};

const Offer = () => {
    const convertedData = data.map((item: ItemTypes) => {
        return [item.date, item.startingDate];
    });

    const sortedData = convertedData.sort((a, b) => new Date(a[1]).getTime() - new Date(b[1]).getTime());


    const removeDuplicatedDate = (arr: string[][]) => {
        let withoutDuplicates = [] as string[][];
        arr.forEach((element) => {
            if (!withoutDuplicates.map((item: string[]) => item[1]).includes(element[1])) {
                withoutDuplicates.push(element);
            }
        });
        return withoutDuplicates;
    };

    const removedDuplicatedDate = removeDuplicatedDate(sortedData);


    const selectedDateOfTrip = (removedDuplicatedDate.map((item: string[]) => item[0]));


    const prepareDateForState = () => {
        let object = {} as DateTypes;

        selectedDateOfTrip.map((item: string) => {
            return object[item as keyof DateTypes] = false;
        });
        return { ...object };
    };
    const preparedDataForState = prepareDateForState();

    const initialState = {
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
            "Dojazd własny/autokar": false,
            "Autokar w cenie": false,
            "Dojazd własny": false,
        },
    };

    const translations = {
        "italy": "Włochy",
        "france": "Francja",
        "austin": "Austria",
        "czech": "Czechy",
        "fullCatering": "Pełne",
        "onlyBreakfast": "Tylko śniadania",
        "withoutCatering": "Bez wyżywienia",
        "holidays": "Wczasy ogólne",
        "withLessonsForKids": "Wczasy ze szkółkami dla dzieci",
        "youthCamps": "Obozy młodzieżowe",
        "expressSki": "Express narty",
        "ski50": "Ski 50+ aktywnie",
        "hotel": "Hotel",
        "apartment": "Apartament",
        "sportCenter": "Ośrodek sportowy",
        "skipass": "Skipass",
        "own/bus": "Dojazd własny/autokar",
        "busIncluded": "Autokar w cenie",
        "own": "Dojazd własny",
    };


    const [filteringState, setFilteringState] = useState<InitialStateTypes>(initialState);

    function handleFilteredInputs(e: FormEvent<HTMLInputElement | HTMLSelectElement>) {
        const target = e.target as HTMLInputElement;
        const key = target?.parentElement?.parentElement?.dataset.name;

        const toFilter = translations[target.name as keyof Translations] ? translations[target.name as keyof Translations] : target.name;
        if (target.tagName === "SELECT") {
            const toFilter = translations[target.value as keyof Translations] ? translations[target.value as keyof Translations] : target.value;
            if (target.value === "all") {
                setFilteringState({ ...filteringState, date: { ...preparedDataForState } });
            }
            // @ts-ignore
            setFilteringState({ ...filteringState, date: { ...preparedDataForState, [toFilter]: !filteringState[key as keyof InitialStateTypes][toFilter as keyof InitialStateTypes], },
            });
            return;

        }
        const objectIsNested = Object.keys(filteringState[key as keyof InitialStateTypes]).length;

        if (!objectIsNested) {
            setFilteringState({
                ...filteringState,
                [key as keyof InitialStateTypes]: !filteringState[key as keyof InitialStateTypes],
            });
            return;
        } else {
            // @ts-ignore
            setFilteringState({ ...filteringState, [key as keyof InitialStateTypes]: { ...filteringState[key as keyof InitialStateTypes], [toFilter]: !filteringState[key as keyof InitialStateTypes][toFilter], },
            });
            return;

        }
    }


    const collectFilteringData = () => {
        let filteringData = {} as FilteringDataTypes;
        Object.keys(filteringState).forEach((item) => {
            Object.keys(filteringState[item as keyof InitialStateTypes]).forEach((el) => {
                // @ts-ignore
                if (filteringState[item][el]) {
                    if (!filteringData[item as keyof FilteringDataTypes]) {
                        filteringData[item as keyof FilteringDataTypes] = [el];
                    } else {
                        filteringData[item as keyof FilteringDataTypes] = [...filteringData[item as keyof FilteringDataTypes], el];
                    }
                }
            });
        });
        return filteringData;
    };
    const collectedFilteringData = collectFilteringData();


    const getFilteringCategories = () => {
        return Object.keys(collectedFilteringData);
    };
    const filteringCategories = getFilteringCategories();


    const filterData = () => {
        const pureData = [...data];
        return filteringCategories.reduce((acc: ItemTypes[], category: string) => {
            const filtered = acc.filter((item: ItemTypes) => {
                const dataToCheck = Object.values(item).flat();
                // @ts-ignore
                return collectedFilteringData[category].some(r => {
                    if (r === "all") {
                        return item;
                    }
                    if (dataToCheck.includes(r)) {
                        return item;
                    }
                });
            });
            return filtered;
        }, [...pureData]);
    };

    const filteringElements = Object.values(collectedFilteringData).flat();

    const filteredData = filterData();

    return (
        <>
            <HeadLineH4 id="oferta">Znajdź swoje zimowe wczasy</HeadLineH4>
            <OfferWrapper>
                <FilterSidebar>
                    <HeadLineH3>Filtruj:</HeadLineH3>
                    <FieldContainer data-name={ "date" }>
                        <div>
                            <LabelSelect data-name={ "date" } htmlFor="date">Wybierz termin:</LabelSelect>
                            <Select onChange={ (e) => {
                                handleFilteredInputs(e);
                            } } name="date" id="date">
                                <option value="all">Wszystkie terminy</option>
                                { removedDuplicatedDate.map((date: any) => {
                                    return (
                                        <option key={ date[0] } value={ date[0] }>{ date[0] }</option>
                                    );
                                }) }
                            </Select>
                        </div>
                    </FieldContainer>
                    <FieldContainer>
                        <fieldset data-name={ "country" }>
                            <Legend>Wybierz kraj:</Legend>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="italy"
                                       name="italy"/>
                                <Label htmlFor="italy">Włochy</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="france"
                                       name="france"/>
                                <Label htmlFor="france">Francja</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="austin"
                                       name="austin"/>
                                <Label htmlFor="austin">Austria</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="czech"
                                       name="czech"/>
                                <Label htmlFor="czech">Czechy</Label>
                            </InputContainer>
                        </fieldset>
                    </FieldContainer>
                    <FieldContainer>
                        <fieldset data-name={ "board" }>
                            <Legend>Wyżywienie:</Legend>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="fullCatering"
                                       name="fullCatering"/>
                                <Label htmlFor="fullCatering">Pełne</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="onlyBreakfast"
                                       name="onlyBreakfast"/>
                                <Label htmlFor="onlyBreakfast">Tylko śniadnia</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="withoutCatering"
                                       name="withoutCatering"/>
                                <Label htmlFor="withoutCatering">Bez wyżywienia</Label>
                            </InputContainer>
                        </fieldset>
                    </FieldContainer>
                    <FieldContainer>
                        <fieldset data-name={ "skipass" }>
                            <Legend>Skipass:</Legend>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="skipass"
                                       name="skipass"/>
                                <Label htmlFor="skipass">Skipass w cenie (Free Ski)</Label>
                            </InputContainer>
                        </fieldset>
                    </FieldContainer>
                    <FieldContainer>

                        <fieldset data-name={ "category" }>
                            <Legend>Forma wyjazdu:</Legend>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="holidays"
                                       name="holidays"/>
                                <Label htmlFor="holidays">Wczasy ogólne</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox"
                                       id="withLessonsForKids"
                                       name="withLessonsForKids"/>
                                <Label htmlFor="withLessonsForKids">Wczasy ze szkółkami dla dzieci</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="youthCamps"
                                       name="youthCamps"/>
                                <Label htmlFor="youthCamps">Obozy młodzieżowe</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="expressSki"
                                       name="expressSki"/>
                                <Label htmlFor="expressSki">Express narty (wyjazdy weekendowe)</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="ski50"
                                       name="ski50"/>
                                <Label htmlFor="ski50">Ski 50+ aktywnie</Label>
                            </InputContainer>
                        </fieldset>
                    </FieldContainer>
                    <FieldContainer>
                        <fieldset data-name={ "accommodation" }>
                            <Legend>Zakwaterowanie:</Legend>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="hotel"
                                       name="hotel"/>
                                <Label htmlFor="hotel">Hotel</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="apartment"
                                       name="apartment"/>
                                <Label htmlFor="apartment">Apartament</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="sportCenter"
                                       name="sportCenter"/>
                                <Label htmlFor="sportCenter">Ośrodek sportowy</Label>
                            </InputContainer>
                        </fieldset>
                    </FieldContainer>
                    <FieldContainer>
                        <fieldset data-name={ "transport" }>
                            <Legend>Dojazd:</Legend>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="own"
                                       name="own"/>
                                <Label htmlFor="own">Dojazd własny</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="own/bus"
                                       name="own/bus"/>
                                <Label htmlFor="own/bus">Dojazd własny/autokar</Label>
                            </InputContainer>
                            <InputContainer>
                                <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="busIncluded"
                                       name="busIncluded"/>
                                <Label htmlFor="busIncluded">Autokar w cenie</Label>
                            </InputContainer>
                        </fieldset>
                    </FieldContainer>
                </FilterSidebar>

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
                            console.log(objectPhoto);
                            // @ts-ignore
                            console.log(images[objectPhoto]);
                            // @ts-ignore
                            const src = images[objectPhoto] ? images[objectPhoto] : images["laroccasport"];
                            return (<Item key={ itemData.id } itemData={ itemData } src={ src }/>);
                        })
                        : <div>
                            <div>
                                <PageParagraph fontSize={ "1.rem" } textAlign={ "center" } margin={ "2em 0" }
                                               fontWeight={ "700" }>Nie znaleziono żadnej wycieczki pasującej do
                                    wybranych
                                    filtrów.</PageParagraph>
                            </div>
                        </div> }
                </Items>
            </OfferWrapper>
        </>
    );
};

export default Offer;