import styled from "styled-components"
import Image from "gatsby-image"
import { motion } from "framer-motion"

export const HiddenOverflowWrapper = styled.div`
  overflow: hidden;
  background-color: #fff;
`

export const HeroSection = styled(motion.div)`
  background-color: #fff;
  height: calc(100vh - 180px);
  @media only screen and (max-width: 960px) {
    height: calc(100vh - 120px);
  }
  max-width: 1440px;
  margin: 0 auto 240px;
  @media only screen and (max-width: 1246px) {
    margin: 0 auto 140px;
  }
  @media only screen and (max-width: 1146px) {
    margin: 0 auto 80px;
    height: calc(90vh - 120px);
  }
  @media only screen and (max-width: 1020px) {
    margin: 0 auto 60px;
  }
  @media only screen and (max-width: 960px) {
    margin: 0 auto 0;
  }
  @media only screen and (max-width: 870px) {
    height: calc(75vh - 80px);
  }
  display: flex;
  padding-left: 165px;
  position: relative;
  @media only screen and (max-width: 1000px) {
    padding-left: 75px;
  }
  @media only screen and (max-width: 500px) {
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
  @media only screen and (max-width: 1032px) {
    width: 65%;
  }
  @media only screen and (max-width: 908px) {
    padding-top: 80px;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 750px) {
    padding-top: 60px;
    width: 75%;
  }
  @media only screen and (max-width: 608px) {
    width: 85%;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    padding-top: 70px;
  }
`

export const StyledHeader = styled.h2`
  font-size: 70px;
  line-height: 101px;
  font-weight: 600;
  margin: 0;
  color: #000;
  @media only screen and (max-width: 1400px) {
    font-size: 56px;
    line-height: 80px;
  }
  @media only screen and (max-width: 1150px) {
    font-size: 48px;
    line-height: 68px;
  }
  @media only screen and (max-width: 908px) {
    font-size: 40px;
    line-height: 58px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 30px;
    line-height: 46px;
  }
`

export const ImagesWrapper = styled.div`
  width: 60%;
  height: 100%;
  overflow: hidden;
  @media only screen and (max-width: 1032px) {
    width: 65%;
  }
  @media only screen and (max-width: 750px) {
    width: 50%;
    position: absolute;
    right: 0;
    bottom: 0px;
    height: unset;
  }
  @media only screen and (max-width: 608px) {
    width: 55%;
  }
  @media only screen and (max-width: 500px) {
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
  @media only screen and (max-width: 1281px) {
    padding: 30px 75px 55px;
  }
  @media only screen and (max-width: 1070px) {
    padding: 30px 75px 35px;
  }
  @media only screen and (max-width: 920px) {
    padding: 30px 28px 35px;
  }
  @media only screen and (max-width: 500px) {
    padding: 16px 28px 66px;
    > p {
      width: 150px;
    }
  }

  iframe .vp-controls-wrapper .vp-title .headers a {
    color: #fff !important;
  }
`

export const StyledImage = styled(Image)`
  object-fit: cover;
  z-index: 2;
  picture img {
    object-fit: cover !important;
  }
  @media only screen and (max-width: 500px) {
    width: 85%;
    margin: 0 0 0 auto;
    right: -40px;
  }
`

export const LogoImage = styled(Image)`
  object-fit: cover;
  max-width: 150px;

  @media only screen and (max-width: 1410px) {
    max-width: 120px;
  }
  @media only screen and (max-width: 1338px) {
    max-width: 64px;
  }
`

export const CircleBigger = styled.svg`
  position: absolute;
  width: 45%;
  top: 5%;
  right: -12%;
  @media only screen and (min-width: 1660px) {
    width: 50%;
    right: -15%;
  }
  @media only screen and (max-width: 1180px) {
    width: 50%;
    top: -2.5%;
    right: -16%;
  }
  @media only screen and (max-width: 750px) {
    width: 95%;
    top: 2.5%;
    right: -25%;
  }
  @media only screen and (max-width: 500px) {
    width: 85%;
    top: 16px;
    right: -32.5%;
  }
`
export const CircleSmaller = styled.svg`
  position: absolute;
  width: 33%;
  top: 30%;
  right: 7%;
  @media only screen and (min-width: 1660px) {
    width: 35%;
    top: 27%;
    right: 4.5%;
  }
  @media only screen and (max-width: 1180px) {
    width: 33%;
    top: 24%;
    right: 6.5%;
  }
  @media only screen and (max-width: 750px) {
    width: 70%;
    left: 10%;
    bottom: 10%;
  }
  @media only screen and (max-width: 500px) {
    width: 63%;
    left: unset;
    right: 0.5%;
    bottom: 8%;
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
    outline-offset: 5px;
  }
  @media only screen and (max-width: 908px) {
    padding: 16px 0px;
    min-width: 160px;
    max-width: 185px;
  }
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin: ${({ margin }) => margin};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grayDarkest};

  @media only screen and (max-width: 500px) {
    margin: 16px 0 0;
    width: 80%;
    padding: 12px 0;
    max-width: 202px;
    font-weight: 400;
  }
`
export const PremieraSection = styled.section`
  background-color: ${({ theme }) => theme.colors.grayDarkest};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 560px;
  > div {
    max-width: 1440px;
    padding: 100px 185px 80px 100px;
    @media only screen and (max-width: 1200px) {
      padding: 100px 115px 80px 70px;
    }
    @media only screen and (max-width: 586px) {
      padding: 48px 28px;
    }
    .first,
    .second,
    .third {
      display: block;
    }
    span {
      color: #fff;
      font-size: 34px;
      font-weight: 600;
      letter-spacing: 0.1em;
      line-height: 48px;
      @media only screen and (max-width: 586px) {
        font-size: 30px;
        line-height: 43px;
      }
      @media only screen and (max-width: 420px) {
        &.third {
          font-size: 22px;
          line-height: 30px;
        }
      }
    }

    .third {
      margin-top: 40px;
    }

    .fourth {
      margin-top: 10px;
      padding: 0 !important;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3px;
        width: 100%;
        background-color: #fff;
        transform-origin: left center;
        transition: 0.3s transform cubic-bezier(0.76, 0, 0.24, 1);
      }
    }
  }
`

export const VideoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh + 235px);
  @media only screen and (min-width: 1440px) {
    height: 100vh;
  }
  @media only screen and (max-width: 1281px) {
    height: calc(100vh + 75px);
  }
  @media only screen and (max-width: 1070px) {
    height: calc(56.25vw + 150px);
  }
  max-height: 1020px;
  background-color: ${({ theme }) => theme.colors.grayDarkest};
  @media only screen and (max-width: 500px) {
    height: calc(56.25vw + 190px);
  }
`

export const VideoIframe = styled.iframe`
  border: 0;
  margin-top: 40px;
  @media only screen and (max-width: 1281px) {
    margin-top: 20px;
  }
  @media only screen and (max-width: 1081px) {
    margin-top: 20px;
  }
`

export const ArtBriefSection = styled.div`
  width: 50%;
  max-width: 635px;
  margin: 0 auto;
  padding: 170px 0 135px;

  @media only screen and (max-width: 1130px) {
    width: 50%;
    padding: 140px 0 110px;
  }

  @media only screen and (max-width: 910px) {
    width: 60%;
  }

  @media only screen and (max-width: 700px) {
    width: 70%;
    padding: 130px 0 100px;
  }

  @media only screen and (max-width: 500px) {
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
  margin: 0 auto;
  background-color: ${({ bg, theme }) => (bg ? bg : theme.colors.grayDarkest)};
`

export const PeopleDetailsWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 115px 210px 140px 160px;

  @media only screen and (max-width: 1440px) {
    padding: 105px 160px 130px 110px;
  }

  @media only screen and (max-width: 1010px) {
    padding: 105px 100px 130px 100px;
  }

  @media only screen and (max-width: 725px) {
    padding: 85px 40px 110px 40px;

    h3 {
      font-size: 34px;
      line-height: 34px;
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: 500px) {
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
  h3 {
    margin-bottom: 10px;
  }
  ul {
    padding: 0;
    margin: 32px 0 0;
    color: #fff;
    li {
      list-style: none;
      padding: 0;
      font-size: 20px;
      line-height: 27px;
      font-weight: 400;
    }
  }

  @media only screen and (max-width: 725px) {
    ul {
      margin-top: 22px;
      li {
        font-size: 17px;
        line-height: 24px;
      }
    }
  }
  @media only screen and (max-width: 500px) {
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

export const CrewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -12px;

  @media only screen and (max-width: 860px) {
    margin-top: 64px;
  }
  h3 {
    margin-bottom: 10px;
  }
  ul {
    padding: 0;
    margin: 32px 0 0;
    color: #fff;
    li {
      list-style: none;
      padding: 0;
      font-size: 20px;
      line-height: 27px;
      font-weight: 400;
    }
  }
  @media only screen and (max-width: 725px) {
    ul {
      margin-top: 22px;
      li {
        font-size: 17px;
        line-height: 24px;
      }
    }
  }
  @media only screen and (max-width: 500px) {
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
  @media only screen and (max-width: 500px) {
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
  grid-template-columns: repeat(auto-fill, minmax(318px, 1fr));
  grid-row-gap: 120px;
  grid-column-gap: 40px;
  @media only screen and (max-width: 1030px) {
    grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
    > div {
      h3 {
        font-size: 24px;
      }
      p {
        font-size: 17px;
        line-height: 23px;
        letter-spacing: 0.01em;
      }
    }
  }
  @media only screen and (max-width: 500px) {
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
  margin: 0 auto;
  height: 100vh;
  background-color: ${({ bg, theme }) => (bg ? bg : theme.colors.grayDarkest)};
  overflow: hidden;
  @media only screen and (max-width: 767px) {
    height: unset;
  }
`

export const CreatorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1440px;
  margin: 0 auto;
  padding: 130px 200px 150px 180px;
  @media only screen and (max-width: 1440px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1220px) {
    padding: 80px 60px;
  }
  @media only screen and (max-width: 970px) {
    padding: 80px 40px;
  }
  @media only screen and (max-width: 767px) {
    padding: 80px 16px 80px 28px;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 500px) {
    padding: 50px 16px 80px 28px;
  }
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

    li {
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      opacity: 1;
    }

    p {
      color: rgba(255, 255, 255, 0.82);
    }
  }

  @media only screen and (max-width: 920px) {
    margin-top: 16px;

    ul {
      li {
        margin-top: 24px;
        &:first-child {
          margin-top: 0;
        }
      }
      h3 {
        font-size: 20px;
        line-height: 20px;
        font-weight: 400;
        margin: 0 0 18px;
      }

      p {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    flex: 0 0 100%;
    position: relative;
    margin-top: 16px;
    &:after {
      content: "";
      position: absolute;
      top: -40px;
      left: 0;
      width: 100%;
      height: 80px;
      background: linear-gradient(
        0deg,
        rgba(27, 31, 29, 0.22) 0%,
        rgba(27, 31, 29, 1) 100%
      );
    }
    ul {
      overflow: auto;
      height: 460px;
      padding-right: 12px;

      li {
        margin-top: 36px;
        &:first-child {
          margin-top: 0;
        }
      }
      h3 {
        color: rgba(255, 255, 255, 0.56);
        font-size: 21px;
        line-height: 21px;
        font-weight: 400;
        margin: 0 0 18px;
      }

      p {
        font-size: 16px;
        line-height: 22px;
      }
      &::-webkit-scrollbar {
        background-color: #1b1f1d;
        width: 8px;
        border-radius: 0;
      }
      &::-webkit-scrollbar-button {
        background-color: #1b1f1d;
        height: 0px;
      }
      &::-webkit-scrollbar-track {
        background-color: #1b1f1d;
        border: 1px solid #bebfbb;
        border-radius: 0;
      }
      &::-webkit-scrollbar-track-piece {
        background-color: #1b1f1d;
        border: 1px solid #bebfbb;
        border-radius: 0;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 0;
      }
      &::-webkit-scrollbar-corner {
        background-color: #1b1f1d;
      }
      &::-webkit-resizer {
        background-color: #1b1f1d;
      }
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
      button {
        display: block;
        border: none;
        background-color: transparent;
        box-shadow: none;
        outline: none;
      }
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
  @media only screen and (max-width: 1220px) {
    margin-left: 100px;
    h2 {
      font-size: 42px;
      line-height: 56px;
    }
    ul {
      li {
        p {
          font-size: 26px;
        }
      }
    }
  }
  @media only screen and (max-width: 1120px) {
    h2 {
      font-size: 42px;
      line-height: 56px;
    }
    ul {
      li {
        svg {
          width: 26px;
        }
      }
    }
  }

  @media only screen and (max-width: 970px) {
    h2 {
      font-size: 38px;
      line-height: 52px;
      margin-bottom: 20px;
    }
    ul li p {
      font-size: 22px;
      line-height: 30px;
    }
    margin-left: 70px;
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
      padding-right: 12px;
    }
  }
`

export const FooterSection = styled.footer`
  display: flex;
  flex-wrap: wrap;
  padding: 130px 65px 20px 65px;
  max-width: 1440px;
  position: relative;
  margin: 0 auto;
  max-height: 460px;
  @media only screen and (max-width: 1140px) {
    padding: 110px 45px 20px 45px;
  }

  @media only screen and (max-width: 1017px) {
    max-height: unset;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 65px 65px;
    max-height: unset;
    flex-direction: column;
    max-width: 100vw;
  }
  @media only screen and (max-width: 568px) {
    padding: 20px 0 65px;
  }
`

export const TeatrColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4 4 45%;
  p {
    margin: 0 0 16px 158px;
  }
  h3 {
    margin: -82px 0 32px 158px;
  }
  @media only screen and (max-width: 1410px) {
    p {
      margin: 0 0 16px 128px;
    }
    h3 {
      margin: -66px 0 32px 128px;
    }
  }
  @media only screen and (max-width: 1338px) {
    p {
      margin: 0 0 16px 72px;
    }
    h3 {
      font-size: 18px;
      margin: -40px 0 32px 72px;
    }
  }
  @media only screen and (max-width: 1017px) {
    flex: 1 1 70%;
  }
  @media only screen and (max-width: 768px) {
    flex: 0 0 100%;
    position: relative;
    margin-top: 24px;

    p {
      font-weight: 300;
      margin: 0 8px 16px 28px;
    }
    h3 {
      font-size: 11px;
      margin: -40px 8px 32px 64px;
    }
  }
`

export const MinisterstwoColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 3 35%;
  margin-top: -16px;
  img,
  picture {
    left: 50% !important;
    transform: translateX(-50%);
  }
  @media only screen and (max-width: 1017px) {
    flex: 1 1 30%;
    margin-top: -22px;
    div[aria-hidden="true"] {
      padding-bottom: 242px !important;
    }
  }
  @media only screen and (max-width: 768px) {
    flex: 0 0 100%;
    order: -1;
    margin-top: 0;
  }
`

export const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 3 20%;
  margin-top: 24px;
  align-items: center;
  padding: 0 16px;

  @media only screen and (max-width: 1040px) {
    padding: 0;
  }

  @media only screen and (max-width: 1017px) {
    flex: 1 1 100%;
    margin: 42px 0 32px 0;
  }

  @media only screen and (max-width: 768px) {
    h3 {
      font-weight: 300;
    }
  }
`
