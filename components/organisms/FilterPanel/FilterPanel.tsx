import React from "react";
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

const FilterPanel = ({
                         handleFilteredInputs,
                         removedDuplicatedDate,
                     }: { handleFilteredInputs: any, removedDuplicatedDate: string[] }) => {
    return (
        <FilterSidebar>
            <HeadLineH4>Filtruj:</HeadLineH4>
            <FieldContainer data-name={ "date" }>
                <div>
                    <LabelSelect data-name={ "date" } htmlFor="date">Wybierz termin: </LabelSelect>
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
                        <Label htmlFor="skipass">Skipass w cenie</Label>
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
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="own/bus"
                               name="own/bus"/>
                        <Label htmlFor="own/bus">Autokar</Label>
                    </InputContainer>
                    <InputContainer>
                        <Input onInput={ (e) => handleFilteredInputs(e) } type="checkbox" id="own"
                               name="own"/>
                        <Label htmlFor="own">Dojazd własny</Label>
                    </InputContainer>
                </fieldset>
            </FieldContainer>
        </FilterSidebar>
    );
};

export default FilterPanel;