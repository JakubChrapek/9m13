import React from "react"
import Text from "../Text/Text"
import { WorkshopSection, VideoWrapper, VideoIframe } from "./workshopStyles"

const VideoSection = () => {
  return (
    <WorkshopSection>
      <VideoWrapper>
        <VideoIframe
          src="https://www.youtube.com/embed/T_1i6S2lBdY"
          width="100%"
          height="100%"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></VideoIframe>
        <Text
          fontWeight="600"
          fontSize="17px"
          lineHeight="158.8%"
          letterSpacing="0.1em"
          textTransform="uppercase"
          margin="58px 0 0"
        >
          Teledysk dla brytyjskiego zespołu Sunship Balloon, zrealizowany w
          tradycyjnej technice animacji wycinankowej przez Animusz Studio
          Magdaleny Parszewskiej, pod kamerą na zlecenie reżyserki Marty
          Brodackiej
        </Text>
      </VideoWrapper>
    </WorkshopSection>
  )
}

export default VideoSection
