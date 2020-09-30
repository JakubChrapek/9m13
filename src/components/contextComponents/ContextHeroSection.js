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

const ContextHeroSection = ({ width, mobileBreakpoint }) => {
  const tabletBreakpoint = 910

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
  const handleClick = e => {
    e.preventDefault()
    let section = document.querySelector(e.target.hash)
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <HeroWrapper>
      {width >= tabletBreakpoint && (
        <LeftWrapper>
          <StyledImage
            fluid={data.leftSide.childImageSharp.fluid}
            alt="Część kamienicy"
            left
          />
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#C4C4C4" />
          </svg>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#1B1F1D" />
          </svg>
        </LeftWrapper>
      )}
      <CenterWrapper>
        <ul>
          <li>
            <a onClick={e => handleClick(e)} href="#opowiesci">
              Zuzanna Bojda, Opowieści kamienicy
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
            <a onClick={e => handleClick(e)} href="#dotyk">
              Jagoda Prześluga, O dotyku
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
            <a onClick={e => handleClick(e)} href="#odczuwanie">
              Steen Eiler Rasmussen, Odczuwanie architektury
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
      {width >= tabletBreakpoint && (
        <RightWrapper>
          <StyledImage
            fluid={data.rightSide.childImageSharp.fluid}
            alt="Część kamienicy"
          />
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#C4C4C4" />
          </svg>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#1B1F1D" />
          </svg>
        </RightWrapper>
      )}
    </HeroWrapper>
  )
}

export default ContextHeroSection
