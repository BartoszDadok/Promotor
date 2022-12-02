import React, { FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { MobileFilterPanelContext } from "../../../contexts/MobileFilterPanel";
import removedDuplicatedDate from "../../../helpers/collectedDate";
import { InitialStateTypes, Translations } from "../Offer/OfferTypes";
import preparedDataForState from "../../../helpers/prepareDateForState";
import { FilteringContext } from "../../../contexts/FilteringContext";
import { translations } from "../../../helpers/translations";
import { initialState } from "../../../contexts/FilteringContext";

const FilterSidebar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  height: fit-content;
  padding: 1em;
  background-color: white;

`;
export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  margin-bottom: 0.4em;
  width: 100%;
  padding-bottom: 0.5em;

  :last-child {
    border-bottom: none;
  }

  select {
    height: 30px;
  }
`;


export const HeadLineH4 = styled.h4`
  text-align: center;
  font-size: 1.2rem;
  margin: 2em 0;


`;

export const Input = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 0.3em;

`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.2em 0;
`;


export const Label = styled.label`
  display: flex;
  justify-content: center;

`;

export const LabelSelect = styled.label`
  font-weight: bold;
  padding: 0.2em 0 0.3em 0;
`;

export const Legend = styled.legend`
  padding: 0.2em 0;
  font-weight: bold;
`;


export const Select = styled.select`
  margin-bottom: 0.4em;
  margin-top: 0.2em;
  padding-right: 0.5em;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  display: none;
  width: 100%;
  height: 100%;
  z-index: 9999;

  &.activeFilterPanel {
    display: flex;

  }
`;

const ExitButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  border: none;
  padding: 0;
  margin: 0;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: #0173d6;
  padding: 1em;
  color: white;
  border: none;
  font-weight: bold;
`;


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
        const key = target?.parentElement?.parentElement?.dataset.name;

        // @ts-ignore
        const toFilter = translations[target.name as keyof Translations] ? translations[target.name as keyof Translations] : target.name;
        if (target.tagName === "SELECT") {
            // @ts-ignore
            const toFilter = translations[target.value as keyof Translations] ? translations[target.value as keyof Translations] : target.value;
            if (target.value === "all") {
                setState({ ...state, date: { ...preparedDataForState } });
            }
            // @ts-ignore
            setState({ ...state,
                date: {
                    ...preparedDataForState,
                    [toFilter]: !state[key as keyof InitialStateTypes][toFilter as keyof InitialStateTypes],
                },
            });
            return;

        }
        const objectIsNested = Object.keys(state[key as keyof InitialStateTypes]).length;

        if (!objectIsNested) {
            setState({
                ...state,
                [key as keyof InitialStateTypes]: !state[key as keyof InitialStateTypes],
            });
            return;
        } else {
            // @ts-ignore
            setState({ ...state,
                [key as keyof InitialStateTypes]: {
                    ...state[key as keyof InitialStateTypes],
                    [toFilter]: !state[key as keyof InitialStateTypes][toFilter],
                },
            });
            return;

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
                            <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="france-mobile"
                                   name="franceM"/>
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
                            <Label htmlFor="own-mobile/bus">Autokar</Label>
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