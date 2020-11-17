import React, { useState } from "react"
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

const AboutWorkshop = ({ currentWidth }) => {
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
      datoCmsWarsztaty {
        pierwszyTytul
        listaPierwsza {
          tekst
        }
        drugiTytul
        listaDruga {
          tekst
        }
      }
    }
  `)
  return (
    <WorkshopSection>
      <WorkshopWrapper>
        <Flex column>
          <Text as="h2">{data.datoCmsWarsztaty.pierwszyTytul}</Text>
          <ul>
            {data.datoCmsWarsztaty.listaPierwsza.map(item => (
              <li>{item.tekst}</li>
            ))}
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
          <video
            height={
              currentWidth < 860
                ? currentWidth < 460
                  ? "200px"
                  : "240px"
                : "300px"
            }
            loop
            muted
            onClick={e => handlePauseGif(e)}
          >
            <source src={WarsztatWEBM} type="video/webm" />
            <source src={WarsztatMP4} type="video/mp4" />
          </video>
          <GifToggleButton className={!playing && "show"} playing={playing} />
        </WorkshopDiv>
        <WorkshopDiv column>
          <Text as="h2">{data.datoCmsWarsztaty.drugiTytul}</Text>
          <ul>
            {data.datoCmsWarsztaty.listaDruga.map(item => (
              <li>{item.tekst}</li>
            ))}
          </ul>
        </WorkshopDiv>
      </WorkshopWrapper>
    </WorkshopSection>
  )
}

export default AboutWorkshop
