import React, { useState, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Flex } from "../Flex/Flex"
import {
  WorkshopSection,
  WorkshopWrapper,
  GifToggleButton,
  WorkshopDiv,
} from "./workshopStyles"
import Text from "../Text/Text"
import Image from "gatsby-image"
import WarsztatMP4 from "../../assets/gifs/warsztat.mp4"
import WarsztatWEBM from "../../assets/gifs/warsztat.webm"

const AboutWorkshop = () => {
  const [playing, setPlaying] = useState(false)

  const handlePauseGif = e => {
    playing ? e.target.pause() : e.target.play()
    setPlaying(!playing)
  }
  const data = useStaticQuery(graphql`
    query aboutQuery {
      wtrakcie: file(name: { eq: "wtrakcie" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <WorkshopSection>
      <WorkshopWrapper>
        <Flex column>
          <Text as="h2">W trakcie warsztatów:</Text>
          <ul>
            <li>Zapoznasz się z tajnikami sztuki filmowej;</li>
            <li>
              Zdobędziesz wiedzę i nowe umiejętności z zakresu animacji
              poklatkowej;
            </li>
            <li>
              Przejdziesz (w ekspresowym tempie) przez wszystkie etapy
              realizacji filmowej;
            </li>
            <li>
              Rozwiniesz wyobraźnię i przekonasz się, że można ożywić i wprawić
              w ruch przedmioty, które otaczają nas na co dzień.
            </li>
          </ul>
        </Flex>
        <Flex>
          <Image
            fluid={data.wtrakcie.childImageSharp.fluid}
            alt="Magdalena Parszewska przygotowująca scenerię i sprzęt do warsztatu z animacji poklatkowej"
          />
        </Flex>
      </WorkshopWrapper>
      <WorkshopWrapper>
        <WorkshopDiv margin="0" column relative>
          <video height="300px" loop muted onClick={e => handlePauseGif(e)}>
            <source src={WarsztatWEBM} type="video/webm" />
            <source src={WarsztatMP4} type="video/mp4" />
          </video>
          <GifToggleButton className={!playing && "show"} playing={playing} />
        </WorkshopDiv>
        <WorkshopDiv column>
          <Text as="h2">Przebieg warsztatu:</Text>
          <ul>
            <li>
              Przygotowanie stanowiska pracy i zapoznanie się z aplikacją Stop
              motion studio
            </li>
            <li>
              Przygotowanie elementów do animacji, pierwsze próby animacji.
            </li>
            <li>Animacja poklatkowa oraz postprodukcja materiału</li>
          </ul>
        </WorkshopDiv>
      </WorkshopWrapper>
    </WorkshopSection>
  )
}

export default AboutWorkshop
