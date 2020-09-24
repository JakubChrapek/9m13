import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import Text from "../Text/Text"
import { motion } from "framer-motion"

export const HeroSection = styled.div`
  height: calc(100vh - 180px);
  @media (max-width: 960px) {
    height: calc(100vh - 120px);
  }
  max-width: 1440px;
  margin: 0 auto 240px;
  @media (max-width: 1246px) {
    margin: 0 auto 140px;
  }
  @media (max-width: 1086px) {
    margin: 0 auto 80px;
    height: calc(90vh - 120px);
  }
  @media (max-width: 920px) {
    margin: 0 auto 60px;
  }
  @media (max-width: 870px) {
    height: calc(75vh - 120px);
  }
  display: flex;
  padding-left: 165px;
  position: relative;
  @media (max-width: 1000px) {
    padding-left: 75px;
  }
  @media (max-width: 767px) {
    padding: 0 28px;
    margin: 0 auto 0;
    height: unset;
    flex-direction: column;
  }
`
export const TextWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1032px) {
    width: 65%;
  }
  @media (max-width: 908px) {
    padding-top: 80px;
    justify-content: flex-start;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding-top: 90px;
  }
`

export const StyledHeader = styled.h2`
  font-size: 70px;
  line-height: 101px;
  font-weight: 600;
  margin: 0;
  color: #000;
  @media (max-width: 1400px) {
    font-size: 56px;
    line-height: 80px;
  }
  @media (max-width: 1150px) {
    font-size: 48px;
    line-height: 68px;
  }
  @media (max-width: 908px) {
    font-size: 40px;
    line-height: 58px;
  }
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 46px;
  }
`

export const ImagesWrapper = styled.div`
  width: 60%;
  height: 100%;
  overflow: hidden;
  @media (max-width: 1032px) {
    width: 65%;
  }
  @media (max-width: 767px) {
    width: 100vw;
    position: relative;
    left: -28px;
    top: -60px;
  }
`

export const VideoContainer = styled.div`
  max-width: 1440px;
  max-height: 1020px;
  display: flex;
  height: 100%;
  width: 100%;
  padding: 30px 75px 105px;
  flex-direction: column;
  @media only screen and (max-width: 767px) {
    padding: 16px 28px 96px;
    > p {
      width: 150px;
    }
  }
`

export const StyledImage = styled(Image)`
  object-fit: cover;
  z-index: 2;
  picture img {
    object-fit: cover !important;
  }
  @media only screen and (max-width: 767px) {
    width: 80%;
    margin: 0 0 0 auto;
    right: -28px;
  }
`

export const CircleBigger = styled.svg`
  position: absolute;
  width: 50%;
  top: 5%;
  right: -10%;
  @media (min-width: 1660px) {
    width: 50%;
    right: -15%;
  }
  @media only screen and (max-width: 767px) {
    width: 75%;
    top: 16px;
    right: -80px;
  }
`
export const CircleSmaller = styled.svg`
  position: absolute;
  width: 31%;
  top: 28%;
  right: 8.5%;
  @media (min-width: 1660px) {
    width: 35%;
    top: 27%;
    right: 4.5%;
  }
  @media only screen and (max-width: 767px) {
    width: 60%;
    top: 70px;
    right: 8px;
  }
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
  z-index: 4;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.black};
    outline-offset: 8px;
  }
  @media (max-width: 908px) {
    padding: 16px 0px;
    min-width: 160px;
    max-width: 185px;
  }
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin: ${({ margin }) => margin};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grayDarkest};

  @media (max-width: 767px) {
    margin: 16px 0 0;
    width: 80%;
    padding: 12px 0;
    max-width: 202px;
    font-weight: 400;
  }
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
  @media only screen and (max-width: 767px) {
    height: unset;
  }
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
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 48px 28px 56px;
    > p {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.01em;
    }
  }
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

  @media only screen and (max-width: 767px) {
    padding: 80px 30px;
    h3 {
      font-size: 26px;
      line-height: 32px;
    }
  }
`

export const RealisatorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  ul {
    padding: 0;
    margin: 42px 0 0;
    color: #fff;
    li {
      list-style: none;
      padding: 0;
      font-size: 20px;
      line-height: 27px;
      font-weight: 400;
    }
  }
  @media only screen and (max-width: 767px) {
    ul {
      margin-top: 22px;
      li {
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.01em;
      }
    }
  }
`

export const CrewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  ul {
    padding: 0;
    margin: 42px 0 0;
    color: #fff;
    li {
      list-style: none;
      padding: 0;
      font-size: 20px;
      line-height: 27px;
      font-weight: 400;
    }
  }
  @media only screen and (max-width: 767px) {
    ul {
      margin-top: 16px;
      li {
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.01em;
      }
    }
  }
`

export const CharactersWrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 75px 120px;
  @media only screen and (max-width: 767px) {
    padding: 36px 30px 56px;
    h2 {
      font-size: 26px;
      line-height: 32px;
    }
  }
`
export const CharactersGrid = styled.div`
  margin-top: 75px;
  display: grid;
  grid-template-columns: repeat(3, minmax(318px, 1fr));
  grid-row-gap: 120px;
  grid-column-gap: 40px;
  @media only screen and (max-width: 767px) {
    margin-top: 60px;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 60px;
    grid-column-gap: 20px;
    > div {
      margin: 0;
      h3 {
        margin-top: 32px;
      }
      p {
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.01em;
      }
    }
  }
`
export const CreatorsSection = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
  background-color: ${({ bg, theme }) => (bg ? bg : theme.colors.grayDarkest)};
  overflow: hidden;
`

export const CreatorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 130px 200px 150px 180px;
  @media only screen and (max-width: 1440px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 767px) {
    padding: 60px 28px;
    height: 100vh;
    flex-wrap: wrap;
  }
`

export const ContentWrapperList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 55%;
  padding: 0;
  margin: 0;
  position: relative;

  @media only screen and (max-width: 767px) {
    flex: 0 0 100%;
  }
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

  @media only screen and (max-width: 767px) {
    flex: 0 0 100%;
    margin-left: 0;
    order: -1;
    ul {
      display: none;
      visibility: hidden;
    }
    h2 {
      text-align: center;
      font-size: 30px;
      line-height: 40px;
    }
  }
`

export const FooterSection = styled.footer`
  display: flex;
  padding: 130px 85px 20px 65px;
  max-width: 1440px;
  margin: 0 auto;
`

export const TeatrColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5 5 50%;
`

export const MinisterstwoColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 3 30%;
  margin-top: 32px;
`

export const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2 2 20%;
  margin-top: 66px;
  align-items: center;
  padding: 0 46px;
`
