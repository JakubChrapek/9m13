import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  HeroSection,
  TextWrapper,
  StyledHeader,
  ImagesWrapper,
  StyledImage,
  CircleBigger,
  CircleSmaller,
  TextWithBackground,
  StyledButton,
  HiddenOverflowWrapper,
} from "./HomeStyles"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      file(name: { eq: "grafika-kamienicy" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const handleClick = e => {
    e.preventDefault()
    let section =
      typeof window !== "undefined" &&
      window.document &&
      document.querySelector("#spektakl")
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <HiddenOverflowWrapper>
      <HeroSection>
        <TextWrapper>
          <StyledHeader
            as="h2"
            fontSize="70px"
            lineHeight="101px"
            fontWeight="400"
            color="#000"
          >
            Skąd kamienica ma wiedzieć,{" "}
            <TextWithBackground bg="#BEBFBB">
              kiedy jest samotność?
            </TextWithBackground>
          </StyledHeader>
          <StyledButton onClick={e => handleClick(e)} margin="40px 0 0">
            Zobacz
          </StyledButton>
        </TextWrapper>
        <ImagesWrapper>
          <StyledImage fluid={data.file.childImageSharp.fluid} />
          <CircleBigger
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#C4C4C4" />
          </CircleBigger>
          <CircleSmaller
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#1B1F1D" fillOpacity="0.2" />
          </CircleSmaller>
        </ImagesWrapper>
      </HeroSection>
    </HiddenOverflowWrapper>
  )
}

export default Hero
