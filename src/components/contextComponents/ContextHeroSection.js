import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  StyledImage,
  HeroWrapper,
  LeftWrapper,
  RightWrapper,
  CenterWrapper,
} from "./ContextStyles"
import Text from "../Text/Text"

const ContextHeroSection = () => {
  const data = useStaticQuery(graphql`
    query ContextHeroQuery {
      leftSide: file(name: { eq: "konteksty-kamienica-lewa" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      rightSide: file(name: { eq: "konteksty-kamienica-prawa" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <HeroWrapper>
      <LeftWrapper>
        <StyledImage
          fluid={data.leftSide.childImageSharp.fluid}
          alt="Część kamienicy"
          left
        />
      </LeftWrapper>
      <CenterWrapper>
        <ul>
          <li>
            <a href="#">
              <Text
                color="#fff"
                fontSize="30px"
                lineHeight="1.3em"
                fontWeight="600"
                as="h3"
              >
                Zuzanna Bojda, Opowieści kamienicy
              </Text>

              <svg
                width="31"
                height="16"
                viewBox="0 0 31 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <Text
                color="#fff"
                fontSize="30px"
                lineHeight="1.3em"
                fontWeight="600"
                as="h3"
              >
                Jagoda Prześluga, O dotyku
              </Text>

              <svg
                width="31"
                height="16"
                viewBox="0 0 31 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <Text
                color="#fff"
                fontSize="30px"
                lineHeight="1.3em"
                fontWeight="600"
                as="h3"
              >
                Steen Eiler Rasmussen, Odczuwanie architektury
              </Text>

              <svg
                width="31"
                height="16"
                viewBox="0 0 31 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
        </ul>
      </CenterWrapper>
      <RightWrapper>
        <StyledImage
          fluid={data.rightSide.childImageSharp.fluid}
          alt="Część kamienicy"
        />
      </RightWrapper>
    </HeroWrapper>
  )
}

export default ContextHeroSection
