import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { WhoWrapper, ImageWrapper, TextWrapper } from "./workshopStyles"
import Text from "../Text/Text"
import Image from "gatsby-image"

const WhoSection = () => {
  const data = useStaticQuery(graphql`
    query WorkshopWhoQuery {
      warsztat: file(name: { eq: "warsztat" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      datoCmsWarsztaty {
        tytulSekcji1
        akapit
        listaInformacji {
          tekst
        }
      }
    }
  `)
  return (
    <WhoWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0, duration: 0.4 }}
    >
      <ImageWrapper>
        <Image
          fluid={data.warsztat.childImageSharp.fluid}
          alt="Magdalena Parszewska z lampami błyskowymi i sprzętem do tworzenia animacji poklatkowej"
        />
      </ImageWrapper>
      <TextWrapper column>
        <Text as="h2">{data.datoCmsWarsztaty.tytulSekcji1}</Text>
        <ul>
          {data.datoCmsWarsztaty.listaInformacji.map(item => (
            <li>{item.tekst}</li>
          ))}
        </ul>
        <Text
          fontWeight="600"
          letterSpacing="1.7px"
          fontSize="17px"
          lineHeight="27px"
          margin="130px 0 0"
        >
          {data.datoCmsWarsztaty.akapit}
        </Text>
      </TextWrapper>
    </WhoWrapper>
  )
}

export default WhoSection
