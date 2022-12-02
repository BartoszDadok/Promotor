import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  padding: 0.5em;
  margin: 1em 0 2em 0;
  border: 1px dashed white;
  border-radius: 3px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  textarea {
    height: 70px;
  }
`;

const LabelForm = styled.label`
  color: white;
  margin-bottom: 0.2em;
`;
const InputForm = styled.input`
  border: none;
  padding: 0.6em;
  margin-bottom: 0.6em;
`;
const SelectForm = styled.select`
  width: 100%;
  border: none;
  padding: 0.4em;
  margin-bottom: 0.6em;
`;
const ButtonForm = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  background-color: #f5e23f;
  width: 150px;
  border: none;
  padding: 0.5em;
  margin-top: 0.5em;
`;
const TitleWhite = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin: 0 0 0.3em 0;
  text-align: center;
`;

const TextArea = styled.textarea`
font-family: inherit;
`;
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