import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Flex } from "../Flex/Flex"
import { WorkshopWrapper } from "./workshopStyles"
import Text from "../Text/Text"
import Image from "gatsby-image"

const AboutWorkshop = () => {
  return (
    <WorkshopWrapper>
      <Flex>Test1</Flex>
      <Flex>Test2</Flex>
    </WorkshopWrapper>
  )
}

export default AboutWorkshop
