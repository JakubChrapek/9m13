import React, { useState, useRef } from "react"

import { Flex } from "../Flex/Flex"
import { Wrapper, GifToggleButton, VideoIframe } from "./workshopStyles"
import Text from "../Text/Text"

const HeroWorkshop = () => {
  const [playing, setPlaying] = useState(true)
  const currentGif = useRef()

  const handlePauseGif = e => {
    e.preventDefault()
  }

  return (
    <Wrapper>
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
        ></VideoIframe>
      </Flex>
    </Wrapper>
  )
}

export default HeroWorkshop
