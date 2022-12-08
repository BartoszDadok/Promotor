import React, { FormEvent, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { MobileFilterPanelContext } from "../../../contexts/MobileFilterPanel";
import removedDuplicatedDate from "../../../helpers/collectedDate";
import {
    DateTypes,
    InitialStateKeysWithoutDate,
    InitialStateTypes, NestedKeys,
    TranslationKeys,
} from "../Offer/OfferTypes";
import {
    FilterSidebar,
    ModalWrapper,
    Input,
    InputContainer,
    Label,
    LabelSelect,
    Legend,
    Select,
    FieldContainer,
    Button,
    ExitButton,
    HeadLineH4,
} from "./ModalFilterPanel.styles";
import preparedDataForState from "../../../helpers/prepareDateForState";
import { FilteringContext } from "../../../contexts/FilteringContext";
import { translations } from "../../../helpers/translations";
import { initialState } from "../../../contexts/FilteringContext";

const ModalFilterPanel = () => {
    const [state, setState] = useState<InitialStateTypes>(initialState);

    const context = useContext(MobileFilterPanelContext);
    const activeFilterPanel = context.activeFilterPanel;
    const closeFilterPanel = context.closeFilterPanel;

    const filteringContext = useContext(FilteringContext);
    const setFilteringState = filteringContext.changeFilteringState;

    const applyFilters = () => {
        setFilteringState(state);
        closeFilterPanel();
    };


    function handleFilteredInputs(e: FormEvent<HTMLInputElement | HTMLSelectElement>) {
        const target = e.target as HTMLInputElement;

        if (target.tagName === "SELECT") {
            const key = target?.parentElement?.parentElement?.dataset.name as "date";
            const toFilter = target.value as keyof DateTypes;

            setState({
                ...state,
                date: {
                    ...preparedDataForState,
                    [toFilter]: !state[key][toFilter],
                },
            });
            return;

        } else {
            const key = target?.parentElement?.parentElement?.dataset.name as InitialStateKeysWithoutDate;
            const targetName = target.name as TranslationKeys;
            const toFilter = translations[targetName] as NestedKeys;

            const objectIsNested = Object.keys(state[key]).length;

            if (!objectIsNested) {
                setState({
                    ...state,
                    [key]: !state[key],
                });
                return;
            } else {
                setState({
                    ...state,
                    [key]: {
                        ...state[key],
                        [toFilter]: !state[key][toFilter],
                    },
                });
                return;
            }
        }
    }

    const handleExitButton = () => {
        closeFilterPanel();
    };

    return (
        <ModalWrapper className={ activeFilterPanel ? "activeFilterPanel" : "" }>
            <ExitButton onClick={ handleExitButton }>
                <FontAwesomeIcon width={ "35px" } color={ "#353535" } icon={ faCircleXmark }/>
            </ExitButton>
            <FilterSidebar>
                <HeadLineH4>Filtruj:</HeadLineH4>
                <FieldContainer data-name={ "date" }>
                    <div>
                        <LabelSelect data-name={ "date" } htmlFor="date-mobile">Wybierz termin: </LabelSelect>
                        <Select onChange={ (e) => {
                            handleFilteredInputs(e);
                        } } name="date" id="date">
                            <option value="all">Wszystkie terminy</option>
                            { removedDuplicatedDate.map((date: any) => {
                                return (
                                    <option key={ date } value={ date }>{ date }</option>
                                );
                            }) }
                        </Select>
                    </div>
                </FieldContainer>
                <FieldContainer>
                    <fieldset data-name={ "country" }>
                        <Legend>Wybierz kraj:</Legend>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="italy-mobile"
                                   name="italy"/>
                            <Label htmlFor="italy-mobile">Włochy</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="franceM-mobile"
                                   name="france"/>
                            <Label htmlFor="franceM-mobile">Francja</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="austin-mobile"
                                   name="austin"/>
                            <Label htmlFor="austin-mobile">Austria</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="czech-mobile"
                                   name="czech"/>
                            <Label htmlFor="czech-mobile">Czechy</Label>
                        </InputContainer>
                    </fieldset>
                </FieldContainer>
                <FieldContainer>
                    <fieldset data-name={ "board" }>
                        <Legend>Wyżywienie:</Legend>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="fullCatering-mobile"
                                   name="fullCatering"/>
                            <Label htmlFor="fullCatering-mobile">Pełne</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="onlyBreakfast-mobile"
                                   name="onlyBreakfast"/>
                            <Label htmlFor="onlyBreakfast-mobile">Tylko śniadnia</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox"
                                   id="withoutCatering-mobile"
                                   name="withoutCatering"/>
                            <Label htmlFor="withoutCatering-mobile">Bez wyżywienia</Label>
                        </InputContainer>
                    </fieldset>
                </FieldContainer>
                <FieldContainer>
                    <fieldset data-name={ "skipass" }>
                        <Legend>Skipass:</Legend>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="skipass-mobile"
                                   name="skipass"/>
                            <Label htmlFor="skipass-mobile">Skipass w cenie</Label>
                        </InputContainer>
                    </fieldset>
                </FieldContainer>
                <FieldContainer>

                    <fieldset data-name={ "category" }>
                        <Legend>Forma wyjazdu:</Legend>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="holidays-mobile"
                                   name="holidays"/>
                            <Label htmlFor="holidays-mobile">Wczasy ogólne</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox"
                                   id="withLessonsForKids-mobile"
                                   name="withLessonsForKids"/>
                            <Label htmlFor="withLessonsForKids-mobile">Wczasy ze szkółkami dla dzieci</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="youthCamps-mobile"
                                   name="youthCamps"/>
                            <Label htmlFor="youthCamps-mobile">Obozy młodzieżowe</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="expressSki-mobile"
                                   name="expressSki"/>
                            <Label htmlFor="expressSki-mobile">Express narty (wyjazdy weekendowe)</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="ski50-mobile"
                                   name="ski50"/>
                            <Label htmlFor="ski50-mobile">Ski 50+ aktywnie</Label>
                        </InputContainer>
                    </fieldset>
                </FieldContainer>
                <FieldContainer>
                    <fieldset data-name={ "accommodation" }>
                        <Legend>Zakwaterowanie:</Legend>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="hotel-mobile"
                                   name="hotel"/>
                            <Label htmlFor="hotel-mobile">Hotel</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="apartment-mobile"
                                   name="apartment"/>
                            <Label htmlFor="apartment-mobile">Apartament</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="sportCenter-mobile"
                                   name="sportCenter"/>
                            <Label htmlFor="sportCenter-mobile">Ośrodek sportowy</Label>
                        </InputContainer>
                    </fieldset>
                </FieldContainer>
                <FieldContainer>
                    <fieldset data-name={ "transport" }>
                        <Legend>Dojazd:</Legend>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="own/bus-mobile"
                                   name="own/bus"/>
                            <Label htmlFor="own/bus-mobile">Autokar</Label>
                        </InputContainer>
                        <InputContainer>
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="own-mobile"
                                   name="own"/>
                            <Label htmlFor="own-mobile">Dojazd własny</Label>
                        </InputContainer>
                    </fieldset>
                </FieldContainer>
                <Button onClick={ applyFilters }>Zastosuj filtry</Button>
            </FilterSidebar>

        </ModalWrapper>
    );
};

export default ModalFilterPanel;