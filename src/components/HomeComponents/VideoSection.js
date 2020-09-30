import React from "react"
import Text from "../Text/Text"
import { VideoSection, VideoIframe, VideoContainer } from "./HomeStyles"

const Video = () => {
  return (
    <VideoSection id="spektakl">
      <VideoContainer>
        <Text
          color="#fff"
          fontSize="24px"
          fontWeight="600"
          letterSpacing="0.02em"
          lineHeight="28px"
        >
          numer 9 <br />
          mieszkania 13
        </Text>
        <VideoIframe
          src="https://player.vimeo.com/video/458423947"
          width="100%"
          height="100%"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></VideoIframe>
      </VideoContainer>
    </VideoSection>
  )
}

export default Video
