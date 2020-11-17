import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Text from "../Text/Text"
import { WorkshopSection, VideoWrapper, VideoIframe } from "./workshopStyles"

const VideoSection = () => {
  const data = useStaticQuery(graphql`
    query VideoQuery {
      datoCmsWarsztaty {
        youtubeLink
        opisWideo
      }
    }
  `)
  return (
    <WorkshopSection>
      <VideoWrapper>
        <VideoIframe
          src={data.datoCmsWarsztaty.youtubeLink}
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
          {data.datoCmsWarsztaty.opisWideo}
        </Text>
      </VideoWrapper>
    </WorkshopSection>
  )
}

export default VideoSection
