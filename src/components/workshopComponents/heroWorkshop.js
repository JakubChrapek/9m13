import React from "react"

import { Flex } from "../Flex/Flex"
import { Wrapper, VideoIframe } from "./workshopStyles"
import Text from "../Text/Text"

const HeroWorkshop = () => {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Flex column>
        <Text as="h1">Warsztaty z animacji poklatkowej online</Text>
        <Text>
          Weź udział w bezpłatnych warsztatach animacji poklatkowej online!
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center" relative column>
        <VideoIframe
          src="https://player.vimeo.com/video/462550261"
          width="100%"
          height="100%"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        ></VideoIframe>
      </Flex>
    </Wrapper>
  )
}

export default HeroWorkshop
