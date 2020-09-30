import React from "react"
import Text from "../Text/Text"
import {
  DetailsSection,
  PeopleDetailsWrapper,
  RealisatorsWrapper,
  CrewWrapper,
} from "./HomeStyles"

const Details = () => {
  return (
    <DetailsSection id="realizatorzy">
      <PeopleDetailsWrapper>
        <RealisatorsWrapper>
          <Text as="h3" fontSize="52px" lineHeight="60px" color="#fff">
            Realizatorzy:
          </Text>
          <ul>
            <li>reżyseria i montaż: Daria Kopiec</li>
            <li>scenariusz: Zuzanna Bojda</li>
            <li>muzyka: Natalia Czekała</li>
            <li>scenografia: Aleksandra Starzyńska</li>
            <li>animacja filmowa: Magdalena Parszewska</li>
            <li>postprodukcja filmowa, efekty specjalne: Jacek Mazur</li>
            <li>reżyseria dźwięku: Agata Chodyra</li>
            <li>współpraca operatorska: Piotr Chodura</li>
            <li>korekcja barwna: Jarosław Sterczewski</li>
          </ul>
        </RealisatorsWrapper>
        <CrewWrapper>
          <Text as="h3" fontSize="52px" lineHeight="60px" color="#fff">
            Obsada:
          </Text>
          <ul>
            <li>Kamienica: Beata Zygarlicka</li>
            <li>
              Chór:
              <br />
              Umarły żeglarz: Konrad Pawicki
            </li>
            <li>Samobójczyni: Joanna Matuszak</li>
            <li>Zamordowany cinkciarz: Arkadiusz Buszko</li>
            <li>
              Kochanka na fotelu rozwalonego samochodu: Adrianna
              Janowska-Moniuszko
            </li>
          </ul>
          <ul>
            <li>Drzewo: Maciej Litkowski</li>
            <li>Pan spod piątki: Grzegorz Młudzik</li>
            <li>Pani spod piątki: Anna Januszewska</li>
            <li>Kobieta spod siódemki: Maria Dąbrowska</li>
            <li>Chłopak spod szóstki: Konrad Beta</li>
            <li>Dziewczyna spod dwunastki: Magdalena Wrani-Stachowska</li>
            <li>Mężczyzna spod trójki: Wojciech Sandach</li>
          </ul>
        </CrewWrapper>
      </PeopleDetailsWrapper>
    </DetailsSection>
  )
}

export default Details
