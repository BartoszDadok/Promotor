import React from "react";
import { FormWrapper, TitleWhite, Form, ButtonForm, LabelForm, SelectForm, TextArea, InputForm } from "./ReservationForm.styles";

const ReservationForm = ({ date }: { date: string[] }) => {
    return (
        <FormWrapper>
            <TitleWhite>Rezerwacja</TitleWhite>
            <Form>
                <LabelForm>Imię i nazwisko</LabelForm>
                <InputForm type="text" id="name" name="name" required/>
                <LabelForm>Email</LabelForm>
                <InputForm type="email" id="email" name="email" required/>
                <LabelForm>Telefon</LabelForm>
                <InputForm type="tel" id="tel" name="tel" required/>
                <LabelForm>Termin</LabelForm>
                <SelectForm>
                    <option value="Wybierz termin">Wybierz termin</option>
                    <option value={ date[0] }>{ date[0] + " - dojazd własny" }</option>
                    <option value={ date[1] }>{ date[1] + " - dojazd autokarem" }</option>
                </SelectForm>
                <LabelForm>Liczba osób</LabelForm>
                <InputForm type="number" id="guest" name="guest" required/>
                <LabelForm>Uwagi</LabelForm>
                <TextArea/>
                <ButtonForm>Zapytaj</ButtonForm>
            </Form>
        </FormWrapper>
    );
};

export default ReservationForm;