import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Flex } from "../Flex/Flex"
import { WhoWrapper, ImageWrapper, TextWrapper } from "./workshopStyles"
import Text from "../Text/Text"
import Image from "gatsby-image"

const WhoSection = () => {
  const data = useStaticQuery(graphql`
    query WorkshopQuery {
      warsztat: file(name: { eq: "warsztat" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <WhoWrapper>
      <ImageWrapper>
        <Image
          fluid={data.warsztat.childImageSharp.fluid}
          alt="Magdalena Parszewska z lampami błyskowymi i sprzętem do tworzenia animacji poklatkowej"
        />
      </ImageWrapper>
      <TextWrapper column>
        <Text as="h2">Warsztat: kto, kiedy, gdzie?</Text>
        <ul>
          <li>17 października 2020, godz. 12:00</li>
          <li>Czas trwania: 2 godz.</li>
          <li>Ilość uczestników: 8-10 osób</li>
          <li>Wiek uczestników: młodzież (15+) i dorośli</li>
          <li>Prowadząca: Magdalena Parszewska</li>
          <li>
            Warsztaty za pośrednictwem
            <br />
            platformy internetowej.
          </li>
        </ul>
        <Text
          fontWeight="600"
          letterSpacing="1.7px"
          fontSize="17px"
          lineHeight="27px"
          margin="130px 0 0"
        >
          Stwórz własną produkcję krótkometrażową w warunkach domowych przy
          użyciu darmowych aplikacji do animacji poklatkowej i ogólnodostępnych
          materiałów plastycznych. Przekonaj się, że można zrobić własną
          animację, bez użycia profesjonalnego sprzętu, używając do tego
          przedmiotów codziennego użytku, które znajdziesz w domu. Można ożywić
          i wprawić w ruch wszystko, ogranicza nas tylko nasza wyobraźnia!
        </Text>
      </TextWrapper>
    </WhoWrapper>
  )
}

export default WhoSection
