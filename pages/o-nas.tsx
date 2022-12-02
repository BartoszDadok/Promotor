import React from "react";
import Navigation from "../components/organisms/Navigation/Navigation";
import styled from "styled-components";
import ContactInfo from "../components/molecules/ContactInfo/ContactInfo";
import Footer from "../components/organisms/Footer/Footer";
import avatar from "../public/assets/avatar.svg";
import Image from "next/image";
import { PageParagraph } from "../components/atoms/PageParagraph/PageParagraph";

const AboutUsWrapper = styled.div`
  width: 70%;
  margin: 0 auto 4em auto;
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
  padding-top: 100px;
  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr
  }
`;
const Title = styled.h2`
  font-size: 2rem;
  margin: 0.6em 0;
`;

const AboutUsContainer = styled.div`
  width: 100%;
  padding: 0 2em;
  margin-bottom: 2em;
`;
const AvatarsWrapper = styled.div`
  width: 100%;
  margin: 2em 0;
  display: flex;
`;
const UnderlinedLink = styled.a`
  text-decoration: underline;
  color: #0173d6;
`;
const StyledLink = styled.a`
  color: #0173d6;
`;
const List = styled.ol`
  list-style: disc;
  padding-left: 2em;
  li{
    margin-bottom: 0.3em;
  }
`;
const AboutUs = () => {
    return (
        <div>
            <Navigation/>
            <AboutUsWrapper>
                <AboutUsContainer>
                    <Title>Wita Cię ciepło nasza załoga:</Title>
                    <AvatarsWrapper>
                        <div>
                            <PageParagraph textAlign={ "center" }>Piotr</PageParagraph>
                            <Image alt={"avatar"} width={ 150 } height={ 150 } src={ avatar }/>
                        </div>
                        <div>
                            <PageParagraph textAlign={ "center" }>Danuta</PageParagraph>
                            <Image alt={"avatar"} width={ 150 } height={ 150 } src={ avatar }/>
                        </div>
                        <div>
                            <PageParagraph textAlign={ "center" }>Eliza</PageParagraph>
                            <Image alt={"avatar"} width={ 150 } height={ 150 } src={ avatar }/>
                        </div>
                        <div>
                            <PageParagraph textAlign={ "center" }>Krzysztof</PageParagraph>
                            <Image alt={"avatar"} width={ 150 } height={ 150 } src={ avatar }/>
                        </div>
                    </AvatarsWrapper>
                    <Title>Gwarancja dobrych imprez</Title>
                    <PageParagraph fontWeight={ "700" } margin={ "0 0 0.5em 0" }>Zadowoleni Klienci to nasza najlepsza
                        reklama</PageParagraph>
                    <PageParagraph margin={ "0 0 1em 0" }>Sami najcieplej wspominamy te wyjazdy, na których panowała
                        owa <u>wyjątkowa atmosfera</u>, sprawiająca, że nie chciało się wracać z nich do domu, a po
                        powrocie niecierpliwie wyczekiwało następnych. W Promotorze dbamy o to, aby nasze imprezy były
                        właśnie takie.</PageParagraph>
                    <PageParagraph margin={ "0 0 1em 0" }>Dla bezpieczeństwa wyjazdu osobiście <u>sprawdzamy każdy
                        obiekt</u>, do którego planujemy Państwa wysłać. Nocujemy w pokojach przeznaczonych dla Państwa,
                        zamawiamy jedzenie w sprawdzonych restauracjach, zwiedzamy okolicę i uczestniczymy w miejscowych
                        atrakcjach. Wybieramy z tego to, co najlepsze i wtedy już z czystym sumieniem prezentujemy
                        Państwu w formie oferty.</PageParagraph>
                    <PageParagraph>Ale to jeszcze nie wszystko. Ważne jest, byście Państwo podróżując z nami czuli się
                        komfortowo, <u>nawet wtedy, gdy na nasz wyjazd grupowy wybieracie się w pojedynkę.</u> Nasi
                        piloci i instruktorzy dokładają wszelkich starań, abyście mogli Państwo poczuć się częścią
                        grupy. Dostarczają wszelkich informacji, zapewniają, że wszystko odbywa się zgodnie z programem
                        i na czas. Ale co najważniejsze - czas i radość z wyjazdu dzielą z uczestnikami. Udaje się to
                        dzięki temu, że prowadzący nasze imprezy lubią to, co robią, sami chętnie uczestniczą w
                        zaplanowanych atrakcjach i z niecierpliwością czekają na wspólne wieczorne opowieści przy
                        herbacie. <u>Do roli opiekunów grup zawsze wybieramy osoby godne zaufania, ludzi z pasją,
                            lubiących towarzystwo innych</u>, osoby z którymi po prostu bardzo mile spędza się czas.
                        Zresztą, wybierzcie się Państwo dokądś z nami, a sami się przekonacie.</PageParagraph>
                    <Title>Certyfikaty</Title>
                    <PageParagraph margin={ "1em 0 " }>
                        <UnderlinedLink href="/assets/certificates/cert1.pdf">Certyfikat Wielkopolskiej Izby
                            Turystycznej →</UnderlinedLink>
                    </PageParagraph>
                    <PageParagraph margin={ "1em 0 " }>
                        <UnderlinedLink href="/assets/certificates/cert2.pdf">Zaświadczenie o wpisie do Rejestru Organizatorów
                            Turystyki i Pośredników Turystycznych →</UnderlinedLink>
                    </PageParagraph>
                    <PageParagraph>
                        <UnderlinedLink href="/assets/certificates/cert3.pdf">Gwarancja ubezpieczeniowa UNIQA →</UnderlinedLink>
                    </PageParagraph>
                    <Title>Nasi partnerzy i współpraca</Title>

                    <PageParagraph fontWeight={ "700" } margin={ "0 0 0.5em 0" }>Obecnie mamy zaszczyt współpracować
                        z:</PageParagraph>
                    <List>
                        <li><PageParagraph><b>GIEŁDĄ SPRZĘTU ZIMOWEGO W POZNANIU</b> - oferującą sprzedaż i serwis sprzętu
                            narciarskiego i snowboardowego. Klientom biura PROMOTOR jadącym z nami na wyjazd zimowy
                            oferujemy zniżkę na wypożyczenie sprzętu zimowego. </PageParagraph></li>
                        <li><PageParagraph><b>PORTEM LOTNICZYM POZNAŃ-ŁAWICA</b> skąd nasi klienci wylatują na narty
                            najczęściej do
                            włoskich i francuskich regionów narciarskich; </PageParagraph></li>
                        <li><PageParagraph><b>PARKINGIEM LOTNISKO POZNAŃ</b> (ul. Bukowska 237, Poznań), na którym uczestnicy
                            imprez
                            lotniczych mogą zostawić samochód na czas pobytu na wczasach; </PageParagraph></li>
                        <li><PageParagraph margin={ "0 0 2em 0" }><b>Jesteśmy członkiem WIELKOPOLSKIEJ IZBY
                            TURYSTYCZNEJ</b> </PageParagraph></li>
                    </List>

                    <PageParagraph margin={ "0 0 0.5em 0" } fontWeight={ "700" }>
                        Zapraszamy do współpracy
                    </PageParagraph>
                    <PageParagraph margin={ "0 0 0.5em 0" }>
                        Cenimy sobie rodzinną atmosferę współpracy. Często nowych przyjaciół poznajemy podczas
                        organizowanych przez nas imprez. Niejeden klient może stać się stałym współpracownikiem biura.
                        Jeśli więc i Państwu podoba się to co robimy i zechcecie Państwo nie tylko z nami podróżować ale
                        i dla nas pracować - będzie nam miło porozmawiać o tym przy kawie.
                    </PageParagraph>
                    <PageParagraph margin={ "0 0 0.5em 0" }>
                        Na osobiste spotkania zapraszamy do naszego biura: ul. Pułaskiego 23, Poznań.
                    </PageParagraph>
                    <PageParagraph>
                        W razie pytań prosimy o kontakt: <StyledLink
                        href="mailto: biuro@promotor.pl">biuro@promotor.pl</StyledLink>
                    </PageParagraph>
                    <Title>Polityka prywatności</Title>
                    <PageParagraph>Politykę prywatności znajdziesz pod tym linkiem: <UnderlinedLink
                        href="/polityka-prywatnosci"> Polityka prywatności →</UnderlinedLink>
                    </PageParagraph>
                    <Title>Klauzula informacyjna</Title>
                    <PageParagraph>Klauzulę informacyjną znajdziesz pod tym linkiem: <UnderlinedLink
                        href="/klauzula-informacyjna"> Klauzula infromacyjna →</UnderlinedLink>
                    </PageParagraph>
                </AboutUsContainer>
                <ContactInfo/>
            </AboutUsWrapper>
            <Footer/>
        </div>

    );
};

export default AboutUs;