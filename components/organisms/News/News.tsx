import React from "react";
import styled from "styled-components";
import { PageParagraph } from "../../atoms/PageParagraph/PageParagraph";

const NewsContainer = styled.div`
  width: 60%;
  margin: 0 auto -100px auto;
  padding-top: 2em;

  ol {
    margin-left: 1.5em;
    list-style: decimal;
    font-size: 1.1rem;
  }

  @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 60em) {
    padding-top: 5.5em;
  }
`;
const News = () => {
    return (
        <>
            <NewsContainer>
                <PageParagraph fontSize={ "2rem" } fontSizeMedia={"1.4rem"} textAlign={ "center" }>Kochani, połączyliśmy
                    siły z Giełdą Sprzętu Zimowego
                </PageParagraph>
                <PageParagraph fontSize={ "2rem" } fontSizeMedia={"1.4rem"} textAlign={ "center" }>i zapraszamy teraz do nowej
                    siedziby PROMOTORA
                </PageParagraph>
                <PageParagraph fontSize={ "2rem" } fontSizeMedia={"1.4rem"} textAlign={ "center" } margin={ "0 0 0.6em 0" }>przy ul. Pułaskiego 23.
                </PageParagraph>

                <PageParagraph fontSize={ "1.2rem" } fontSizeMedia={"1rem"} margin={ "0.3em 0 0.6em 0" } fontWeight={ "bold" }>
                    Wygodnie zaparkuj na naszym przestronnym parkingu, a następnie:
                </PageParagraph>
                <ol>
                    <li>
                        <PageParagraph fontSize={ "1.1rem" } fontSizeMedia={"1rem"} margin={ "0.4em 0" }>Zarezerwuj wycieczkę w naszym biurze,
                            a
                            jeśli potrzebujesz sprzęt narciarski/snowboardowy, <b>przejdź parę kroków do naszej
                                wypożyczalni i
                                wypożycz sprzęt z 20% rabatem.</b> Dopasowany i wyserwisowany
                            sprzęt dostarczymy bezpośrednio do autokaru i odbierzemy go po Twoim powrocie z wakacji.
                        </PageParagraph>
                    </li>
                    <li>
                        <PageParagraph fontSize={ "1.1rem" } fontSizeMedia={"1rem"} margin={ "0.4em 0" }>Zamawiasz wyjazd i sprzęt narciarski
                            za
                            jednym razem. Nie musisz go potem nigdzie
                            wozić ani
                            nawet nosić!
                        </PageParagraph>
                    </li>
                    <li>
                        <PageParagraph fontSize={ "1.1rem" } fontSizeMedia={"1rem"} margin={ "0.4em 0" }>Czas w naszym biurze spędzisz w miłej
                            atmosferze, a przy okazji zapraszamy na
                            degustację
                            grzańca.
                        </PageParagraph>
                    </li>
                </ol>
            </NewsContainer>
        </>
    );
};

export default News;