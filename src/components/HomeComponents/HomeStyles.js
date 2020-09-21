import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { motion } from "framer-motion"

export const HeroSection = styled.div`
  height: calc(100vh - 180px);
  max-width: 1440px;
  margin: 0 auto 240px;
  display: flex;
  padding-left: 165px;
  position: relative;
`
export const TextWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const StyledHeader = styled.h2`
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

export const ImagesWrapper = styled.div`
  width: 60%;
  height: 100%;
  overflow: hidden;
`

export const VideoContainer = styled.div`
  max-width: 1440px;
  max-height: 1020px;
  display: flex;
  height: 100%;
  width: 100%;
  padding: 30px 75px 105px;
  flex-direction: column;
`

export const StyledImage = styled(Image)`
  object-fit: cover;
  z-index: 2;
  picture img {
    object-fit: cover !important;
  }
`

export const CircleBigger = styled.svg`
  position: absolute;
  width: 45%;
  top: 0px;
  right: -8%;
`
export const CircleSmaller = styled.svg`
  position: absolute;
  width: 27.5%;
  top: 25%;
  right: 12.5%;
`
export const TextWithBackground = styled.span`
  background-color: ${({ bg }) => bg};
`

export const StyledButton = styled.button`
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
export const VideoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh + 235px);
  @media (min-width: 1440px) {
    height: 100vh;
  }
  max-height: 1020px;
  background-color: ${({ theme }) => theme.colors.grayDarkest};
`

export const VideoIframe = styled.iframe`
  border: 0;
  margin-top: 40px;
`

export const ArtBriefSection = styled.div`
  width: 50%;
  max-width: 635px;
  margin: 0 auto;
  padding: 170px 0 135px;
`

export const DetailsSection = styled.section`
  width: 100vw;
  margin: 0 auto;
  background-color: ${({ bg, theme }) => (bg ? bg : theme.colors.grayDarkest)};
`

export const PeopleDetailsWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 115px 210px 140px 160px;
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      padding: 0;
    }
  }
`

export const RealisatorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`

export const CrewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CharactersWrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 75px 120px;
`
export const CharactersGrid = styled.div`
  margin-top: 75px;
  display: grid;
  grid-template-columns: repeat(3, minmax(318px, 1fr));
  grid-row-gap: 120px;
  grid-column-gap: 40px;
`
export const CreatorsSection = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
  background-color: ${({ bg, theme }) => (bg ? bg : theme.colors.grayDarkest)};
`

export const CreatorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 130px 200px 150px 180px;
`

export const ContentWrapperList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 55%;
  padding: 0;
  margin: 0;
  position: relative;

  ul {
    padding: 0;
    margin: 0;
    position: relative;
    overflow: hidden;
    width: 100%;

    /* &::-webkit-scrollbar {
      background-color: rgba(255, 255, 255, 0.4);
      width: 8px;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-button {
      background-color: blue;
    }
    &::-webkit-scrollbar-track {
      background-color: green;
    }
    &::-webkit-scrollbar-track-piece {
      background-color: red;
    }
    &::-webkit-scrollbar-thumb {
      background-color: pink;
    }
    &::-webkit-scrollbar-corner {
      background-color: yellow;
    }
    &::-webkit-resizer {
      background-color: gray;
    } */

    li {
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      opacity: 1;
    }
  }
`

export const NamesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 45%;
  margin-left: 120px;
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
      position: relative;

      &:hover {
        svg {
          transform: scaleX(1);
        }
      }

      p {
        position: relative;
        display: inline-block;
        transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        color: rgba(255, 255, 255, 0.2);
      }
      svg {
        position: absolute;
        left: -40px;
        top: calc(50% - 4px);
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      &.active {
        p {
          color: ${({ theme }) => theme.colors.white};
        }
        svg {
          transform: scaleX(1);
        }
      }
    }
  }
`

export const FooterSection = styled.footer`
  display: flex;
  padding: 130px 85px 90px 65px;
  max-width: 1440px;
`

export const TeatrColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 3 40%;
`

export const MinisterstwoColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 30%;
`

export const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 30%;
`
