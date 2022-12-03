import React, { useContext } from "react";
import {
    FieldContainer, FilterSidebar,
    HeadLineH4,
    Input,
    InputContainer,
    Label,
    LabelSelect,
    Legend,
    Select,
} from "../FilterPanel/FilterPanel.styles";
import { FilteringContext } from "../../../contexts/FilteringContext";

const FilterPanel = ({
                         handleFilteredInputs,
                         removedDuplicatedDate,
                     }: { handleFilteredInputs: any, removedDuplicatedDate: string[] }) => {

    const context = useContext(FilteringContext);
    const filteringState = context.filteringState;
    // @ts-ignore
    const dateSelected = Object.keys(filteringState.date).filter((singleDate) => filteringState.date[singleDate] && filteringState.date[singleDate]);

    return (
        <FilterSidebar>
            <HeadLineH4>Filtruj:</HeadLineH4>
            <FieldContainer data-name={ "date" }>
                <div>
                    <LabelSelect data-name={ "date" } htmlFor="date">Wybierz termin: </LabelSelect>
                    <Select defaultValue={ dateSelected.length > 0 ? dateSelected[0] : "Wszyskie terminy" }
                            onChange={ (e) => {
                                handleFilteredInputs(e);
                            } } name="date" id="date">
                        <option value="all">Wszystkie terminy</option>
                        { removedDuplicatedDate.map((date: any) => {
                            return (
                                // @ts-ignore
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
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="italy"
                               name="italy" defaultChecked={ filteringState.country["Włochy"] }/>
                        <Label htmlFor="italy">Włochy</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="france"
                               name="france" defaultChecked={ filteringState.country["Francja"] }/>
                        <Label htmlFor="france">Francja</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="austin"
                               name="austin" defaultChecked={ filteringState.country["Austria"] }/>
                        <Label htmlFor="austin">Austria</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="czech"
                               name="czech" defaultChecked={ filteringState.country["Czechy"] }/>
                        <Label htmlFor="czech">Czechy</Label>
                    </InputContainer>
                </fieldset>
            </FieldContainer>
            <FieldContainer>
                <fieldset data-name={ "board" }>
                    <Legend>Wyżywienie:</Legend>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="fullCatering"
                               name="fullCatering" defaultChecked={ filteringState.board["Pełne"] }/>
                        <Label htmlFor="fullCatering">Pełne</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="onlyBreakfast"
                               name="onlyBreakfast" defaultChecked={ filteringState.board["Tylko śniadania"] }/>
                        <Label htmlFor="onlyBreakfast">Tylko śniadnia</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="withoutCatering"
                               name="withoutCatering" defaultChecked={ filteringState.board["Bez wyżywienia"] }/>
                        <Label htmlFor="withoutCatering">Bez wyżywienia</Label>
                    </InputContainer>
                </fieldset>
            </FieldContainer>
            <FieldContainer>
                <fieldset data-name={ "skipass" }>
                    <Legend>Skipass:</Legend>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="skipass"
                               name="skipass" defaultChecked={ filteringState.skipass["Skipass"] }/>
                        <Label htmlFor="skipass">Skipass w cenie</Label>
                    </InputContainer>
                </fieldset>
            </FieldContainer>
            <FieldContainer>

                <fieldset data-name={ "category" }>
                    <Legend>Forma wyjazdu:</Legend>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="holidays"
                               name="holidays" defaultChecked={ filteringState.category["Wczasy ogólne"] }/>
                        <Label htmlFor="holidays">Wczasy ogólne</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox"
                               id="withLessonsForKids"
                               name="withLessonsForKids"
                               defaultChecked={ filteringState.category["Wczasy ze szkółkami dla dzieci"] }/>
                        <Label htmlFor="withLessonsForKids">Wczasy ze szkółkami dla dzieci</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="youthCamps"
                               name="youthCamps" defaultChecked={ filteringState.category["Obozy młodzieżowe"] }/>
                        <Label htmlFor="youthCamps">Obozy młodzieżowe</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="expressSki"
                               name="expressSki" defaultChecked={ filteringState.category["Express narty"] }/>
                        <Label htmlFor="expressSki">Express narty (wyjazdy weekendowe)</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="ski50"
                               name="ski50" defaultChecked={ filteringState.category["Ski 50+ aktywnie"] }/>
                        <Label htmlFor="ski50">Ski 50+ aktywnie</Label>
                    </InputContainer>
                </fieldset>
            </FieldContainer>
            <FieldContainer>
                <fieldset data-name={ "accommodation" }>
                    <Legend>Zakwaterowanie:</Legend>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="hotel"
                               name="hotel" defaultChecked={ filteringState.accommodation["Hotel"] }/>
                        <Label htmlFor="hotel">Hotel</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="apartment"
                               name="apartment" defaultChecked={ filteringState.accommodation["Apartament"] }/>
                        <Label htmlFor="apartment">Apartament</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="sportCenter"
                               name="sportCenter" defaultChecked={ filteringState.accommodation["Ośrodek sportowy"] }/>
                        <Label htmlFor="sportCenter">Ośrodek sportowy</Label>
                    </InputContainer>
                </fieldset>
            </FieldContainer>
            <FieldContainer>
                <fieldset data-name={ "transport" }>
                    <Legend>Dojazd:</Legend>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="own/bus"
                               name="own/bus" defaultChecked={ filteringState.transport["Autokar"] }/>
                        <Label htmlFor="own/bus">Autokar</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="own"
                               name="own" defaultChecked={ filteringState.transport["Dojazd własny"] }/>
                        <Label htmlFor="own">Dojazd własny</Label>
                    </InputContainer>
                </fieldset>
            </FieldContainer>
        </FilterSidebar>
    );
};

export default FilterPanel;