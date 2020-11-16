import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Flex } from "../Flex/Flex"
import { Wrapper, VideoIframe } from "./workshopStyles"
import Text from "../Text/Text"

const HeroWorkshop = () => {
  const data = useStaticQuery(graphql`
    query WorkshopHeroQuery {
      datoCmsWarsztaty {
        tytul
        podtytul
        videoLink
      }
    }
  `)
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Flex column>
        <Text
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="title"
        >
          {data.datoCmsWarsztaty.tytul}
        </Text>
        <Text
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {data.datoCmsWarsztaty.podtytul}
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center" relative column>
        <VideoIframe
          src={data.datoCmsWarsztaty.videoLink}
          width="100%"
          height="100%"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        ></VideoIframe>
      </Flex>
    </Wrapper>
  )
}

export default HeroWorkshop
