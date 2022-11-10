import React from "react";
import Navigation from "../components/organisms/Navigation/Navigation";
import { PageParagraph } from "../components/atoms/PageParagraph/PageParagraph";
import ContactInfo from "../components/molecules/ContactInfo/ContactInfo";
import Footer from "../components/organisms/Footer/Footer";
import styled from "styled-components";

const PolicyWrapper = styled.div`
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
`;
const PolicyContainer = styled.div`
  width: 100%;
  padding: 0 2em;
`;
const List = styled.ul`
  list-style: decimal;
  padding-left: 2em;

  li {
    margin-bottom: 0.3em;
    padding-left: 0.3em;
  }
`;
const UnerlinedLink = styled.a`
  text-decoration: underline;
  color: #0173d6;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin: 0.6em 0;
`;


const PrivacyPolicy = () => {
    return (
        <div>
            <Navigation/>
            <PolicyWrapper>
                <PolicyContainer>
                    <Title>Polityka prywatności:</Title>
                    <List>
                        <li><PageParagraph margin={ "0.2em 0" }>Operatorem Serwisu www.promotor.pl jest firma Biuro
                            Podróży PROMOTOR sp. z o.o. z siedzibą w Poznaniu, ul. Pułaskiego 23, wpisana do bazy
                            przedsiębiorców Centralnej Ewidencji i Informacji o Działalności Gospodarczej,
                            NIP&nbsp; oraz numer REGON 383830963.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Serwis realizuje funkcje pozyskiwania informacji o
                            użytkownikach i ich zachowaniu w następujący sposób:</PageParagraph>
                            <List>
                                <li><PageParagraph margin={ "0.2em 0" }>Poprzez dobrowolnie wprowadzone w formularzach
                                    informacje.</PageParagraph></li>
                                <li><PageParagraph margin={ "0.2em 0" }>Poprzez zapisywanie w urządzeniach końcowych
                                    pliki cookie (tzw. "ciasteczka").</PageParagraph></li>
                                <li><PageParagraph margin={ "0.2em 0" }>Poprzez gromadzenie logów serwera
                                    www</PageParagraph></li>
                            </List>
                        </li>
                        <li><PageParagraph margin={ "0.2em 0" }>Serwis zbiera informacje podane dobrowolnie przez
                            użytkownika.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Serwis może zapisać ponadto informacje o parametrach
                            połączenia (oznaczenie czasu, adres IP)</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Serwis nie sprzedaje i nie udostępnia zgromadzonych
                            danych osobowych użytkowników innym podmiotom, instytucjom lub osobom trzecim, chyba że
                            dzieje się to za wyraźną zgodą lub na życzenie użytkownika, lub też na żądanie uprawnionych
                            na podstawie prawa organów państwa na potrzeby prowadzonych przez nie
                            postępowań.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Dane podane w formularzu są przetwarzane w celu
                            wynikającym z funkcji konkretnego formularza, np w celu przygotowania informacji o usługach,
                            kontaktu z wydawcą Serwisu.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Biuro Podróży PROMOTOR sp. z o.o.&nbsp;wykorzystuje
                            przekazane dane osobowe wyłącznie w zakresie niezbędnym do realizacji usług, organizacji
                            imprezy turystycznej.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Dane zbierane w trakcie korespondencji pomiędzy
                            potencjalnym klientem, a naszym biurem są wykorzystane wyłącznie w celu odpowiedzi na
                            zapytanie, zgłoszenie i - w przypadku wyrażenia przez Państwa zgody - w celu przesyłania
                            materiałów reklamowych, ofertowych, przygotowania umowy.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Serwis nie zbiera w sposób automatyczny żadnych
                            informacji, z wyjątkiem informacji zawartych w plikach cookies.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Pliki cookies (tzw. ciasteczka) stanowią dane
                            informatyczne w postaci plików tekstowych, które przechowywane są w urządzeniu końcowym
                            Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies
                            zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na
                            urządzeniu końcowym oraz unikalny numer.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Przez używanie Serwisu wyrażasz zgodę na używanie
                            ciasteczek zgodnie z tą Polityką Cookies. Jeżeli nie zgadzasz się na używanie przez nas
                            ciasteczek, powinieneś zmienić ustawienia swojej przeglądarki w odpowiedni sposób lub
                            zrezygnować z używania Serwisu.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Pliki cookies wykorzystywane są w celu:</PageParagraph>
                            <List>
                                <li><PageParagraph margin={ "0.2em 0" }>dostosowania zawartości stron internetowych
                                    Serwisu do preferencji Użytkownika oraz optymalizacji korzystania ze stron
                                    internetowych; w szczególności pliki te pozwalają rozpoznać urządzenie Użytkownika
                                    Serwisu i odpowiednio wyświetlić stronę internetową;</PageParagraph></li>
                                <li><PageParagraph margin={ "0.2em 0" }>tworzenia statystyk, które pomagają zrozumieć, w
                                    jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia
                                    ulepszanie ich struktury i zawartości;</PageParagraph></li>
                                <li><PageParagraph margin={ "0.2em 0" }>utrzymanie sesji Użytkownika Serwisu (po
                                    zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie Serwisu
                                    ponownie wpisywać loginu i hasła.</PageParagraph></li>
                            </List>
                        </li>
                        <li><PageParagraph margin={ "0.2em 0" }>W ramach Serwisu stosowane są dwa zasadnicze rodzaje
                            plików cookies: sesyjne (session cookies) oraz stałe (persistent cookies). Cookies sesyjne
                            są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu
                            wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki
                            internetowej). Stałe pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez
                            czas określony w parametrach plików cookies lub do czasu ich usunięcia przez
                            Użytkownika.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>W ramach Serwisu stosowane są następujące rodzaje plików
                            cookies:</PageParagraph>
                            <List>
                                <li><PageParagraph margin={ "0.2em 0" }>„niezbędne” pliki cookies, umożliwiające
                                    korzystanie z usług dostępnych w ramach Serwisu, np. uwierzytelniające pliki cookies
                                    wykorzystywane do usług wymagających uwierzytelniania w ramach
                                    Serwisu;</PageParagraph></li>
                                <li><PageParagraph margin={ "0.2em 0" }>pliki cookies służące do zapewnienia
                                    bezpieczeństwa, np. wykorzystywane do wykrywania nadużyć w zakresie uwierzytelniania
                                    w ramach Serwisu;</PageParagraph></li>
                                <li><PageParagraph margin={ "0.2em 0" }>wydajnościowe pliki cookies, umożliwiające
                                    zbieranie informacji o sposobie korzystania ze stron internetowych
                                    Serwisu;</PageParagraph></li>
                                <li><PageParagraph margin={ "0.2em 0" }>reklamowe pliki cookies, umożliwiające
                                    dostarczanie Użytkownikom treści reklamowych bardziej dostosowanych do ich
                                    zainteresowań.</PageParagraph></li>
                            </List>
                        </li>
                        <li><PageParagraph margin={ "0.2em 0" }>W wielu przypadkach oprogramowanie służące do
                            przeglądania stron internetowych (przeglądarka internetowa) domyślnie dopuszcza
                            przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą
                            dokonać w każdym czasie zmiany ustawień dotyczących plików cookies. Ustawienia te mogą
                            zostać zmienione w szczególności w taki sposób, aby blokować automatyczną obsługę plików
                            cookies w ustawieniach przeglądarki internetowej bądź informować o ich każdorazowym
                            zamieszczeniu w urządzeniu Użytkownika Serwisu.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Szczegółowe informacje o możliwości i sposobach obsługi
                            plików cookies dostępne są w ustawieniach oprogramowania (przeglądarki
                            internetowej).</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Operator Serwisu informuje, że ograniczenia stosowania
                            plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych
                            Serwisu. Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane
                            mogą być również przez współpracujących z operatorem Serwisu reklamodawców oraz
                            partnerów.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Więcej informacji na temat plików cookies dostępnych
                            jest pod adresem <UnerlinedLink href="https://wszystkoociasteczkach.pl">https://wszystkoociasteczkach.pl</UnerlinedLink> oraz w Pomocy w menu przeglądarki internetowej.</PageParagraph></li>
                        <li><PageParagraph margin={ "0.2em 0" }>Zastrzegamy sobie prawo zmiany powyższej polityki
                            prywatności poprzez opublikowanie nowej polityki prywatności na tej stronie.</PageParagraph>
                        </li>
                    </List>
                </PolicyContainer>
                <ContactInfo/>
            </PolicyWrapper>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;