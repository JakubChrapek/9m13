import React, { useContext } from "react"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled, { ThemeContext } from "styled-components"

// Components
import Text from "../components/Text/Text"

const HeroSection = styled.div`
  height: calc(100vh - 180px);
  display: flex;
  padding-left: 165px;
  position: relative;
`
const TextWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const StyledHeader = styled.h2`
  font-size: 70px;
  line-height: 101px;
  font-weight: 400;
  margin: 0;
  color: #000;
  @media (max-width: 1340px) {
    font-size: 56px;
    line-height: 80px;
  }
`

const ImagesWrapper = styled.div`
  width: 60%;
  height: 100%;
  overflow: hidden;
  /* display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr); */
`

const StyledImage = styled(Image)`
  object-fit: cover;
  z-index: 2;
  picture img {
    object-fit: cover !important;
  }
`

const CircleBigger = styled.svg`
  position: absolute;
  width: 45%;
  top: 0px;
  right: -8%;
`
const CircleSmaller = styled.svg`
  position: absolute;
  width: 27.5%;
  top: 25%;
  right: 12.5%;
`
const TextWithBackground = styled.span`
  background-color: ${({ bg }) => bg};
`

const StyledButton = styled.button`
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  width: 50%;
  max-width: 305px;
  min-width: 200px;
  padding: 20px 0px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin: ${({ margin }) => margin};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grayDarkest};
`
const VideoSection = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grayDarkest};
  padding: 30px 75px 105px;
`

const HomePage = ({ data }) => {
  const themeContext = useContext(ThemeContext)
  return (
    <>
      <Seo title="Home" />
      {/* {data.allDatoCmsTest.nodes.map((test, iterator) => (
      <p key={iterator}>{test.testParagraph}</p>
    ))} */}
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
          <StyledButton margin="40px 0 0">Zobacz</StyledButton>
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
            <circle cx="50" cy="50" r="50" fill="#1B1F1D" fill-opacity="0.2" />
          </CircleSmaller>
        </ImagesWrapper>
      </HeroSection>
      <VideoSection>
        <Text
          color={themeContext.colors.white}
          fontSize="24px"
          fontWeight="600"
          letterSpacing="0.02em"
          lineHeight="28px"
        >
          numer 9 <br />
          mieszkania 13
        </Text>
      </VideoSection>
    </>
  )
}

export const query = graphql`
  {
    allDatoCmsTest {
      nodes {
        testParagraph
      }
    }
    file(name: { eq: "grafika-kamienicy" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default HomePage
