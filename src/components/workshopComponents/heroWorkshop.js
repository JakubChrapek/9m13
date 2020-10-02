import React, { useState, useRef } from "react"
import AnimacjaPoklatkowaGif from "../../assets/gifs/animacja-poklatkowa.gif"
import AnimacjaStill from "../../assets/gifs/animacja-still.jpg"
import Animacjawebm from "../../assets/gifs/warsztat.webm"
import Animacjamp4 from "../../assets/gifs/warsztat.mp4"

import { Flex } from "../Flex/Flex"
import { Wrapper, GifToggleButton } from "./workshopStyles"
import Text from "../Text/Text"
import GifPlayer from "react-gif-player"

const HeroWorkshop = () => {
  const [playing, setPlaying] = useState(true)
  const currentGif = useRef()

  const handlePauseGif = e => {
    e.preventDefault()
  }

  return (
    <Wrapper>
      <Flex column>
        <Text as="h1">Warsztaty z animacji poklatowej online</Text>
        <Text>
          Weź udział w bezpłatnych warsztatach animacji poklatowej online!
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center" relative column>
        <GifPlayer
          gif={AnimacjaPoklatkowaGif}
          still={AnimacjaStill}
          ref={currentGif}
          pauseRef={currentGif}
          onTogglePlay={playing => setPlaying({ playing })}
        />
        <GifToggleButton
          className={!playing.playing && "show"}
          disabled={!playing.playing}
          onClick={e => handlePauseGif(e)}
          playing={playing.playing}
        />
        {/* <video autoplay muted loop playsinline>
          <source src={Animacjawebm} type="video/webm" />
          <source src={Animacjamp4} type="video/mp4" />
        </video> */}
      </Flex>
    </Wrapper>
  )
}

export default HeroWorkshop
