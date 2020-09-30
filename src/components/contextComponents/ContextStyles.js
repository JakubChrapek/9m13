import Image from "gatsby-image"
import styled from "styled-components"

export const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  picture img {
    object-fit: contain !important;
    width: 100%;
    object-position: ${({ left }) => (left ? "left" : "center")} center;
  }
`

export const HeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: calc(100vh - 140px);
  min-height: 60vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.grayDarkest};
  position: relative;
  overflow: hidden;
`

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 25%;
  @media only screen and (max-width: 1640px) {
    flex: 1 1 30%;
  }
  @media only screen and (max-width: 1310px) {
    flex: 1 1 35%;
    align-items: flex-start;
    margin-top: 10%;
  }
  margin-bottom: 100px;

  @media only screen and (max-width: 1080px) {
    flex: 1 1 30%;
    align-items: stretch;
    margin-bottom: 10%;
    margin-top: 0;
  }
  img,
  picture {
    z-index: 1;
    @media only screen and (max-width: 1080px) {
      width: 175% !important;
      height: 100%;
    }
  }
  svg {
    position: absolute;
    left: -13%;
    top: 9%;
    z-index: 0;
    width: 33%;
    @media only screen and (max-width: 1640px) {
      left: -15%;
      top: 10%;
      width: 37.5%;
    }
    @media only screen and (max-width: 1310px) {
      left: -17.5%;
      top: 9%;
      width: 42.5%;
    }
    @media only screen and (max-width: 1080px) {
      left: -22.5%;
      top: 2%;
      width: 47.5%;
    }
    circle {
      opacity: 20%;
    }

    :last-child {
      left: -15.5%;
      top: unset;
      bottom: 17%;
      width: 25.5%;
      @media only screen and (max-width: 1640px) {
        left: -16%;
        bottom: 24%;
      }
      @media only screen and (max-width: 1310px) {
        width: 30%;
        left: -18%;
        bottom: 28%;
      }
    }
  }
`

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1 1 100%;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
      margin-bottom: 52px;
      @media only screen and (max-width: 1310px) {
        margin-bottom: 36px;
      }
      &:last-child {
        margin-bottom: 0;
      }
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        h3 {
          position: relative;
          @media only screen and (max-width: 1310px) {
            font-size: 24px;
          }
          @media only screen and (max-width: 1080px) {
            font-size: 18px;
          }
          :after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 100%;
            height: 2px;
            background-color: #fff;
            transform: scaleY(0);
            transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          }
        }
        :hover {
          + svg {
            transform: translateX(8px);
            @media only screen and (max-width: 1080px) {
              transform: translateX(6px);
            }
          }
          h3:after {
            transform: scaleY(1);
          }
        }
        svg {
          margin-left: 24px;
          @media only screen and (max-width: 1080px) {
            margin-left: 16px;
          }

          transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
      }
    }
  }
`

export const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 25%;
  @media only screen and (max-width: 1640px) {
    flex: 1 1 30%;
  }
  @media only screen and (max-width: 1310px) {
    flex: 1 1 35%;
    align-items: flex-end;
    margin-bottom: 15%;
  }
  margin-top: 52px;
  @media only screen and (max-width: 1080px) {
    flex: 1 1 30%;
    margin-bottom: 0;
    margin-top: 15%;
    ${StyledImage} {
      align-self: stretch;
    }
  }
  img,
  picture {
    z-index: 1;
    @media only screen and (max-width: 1080px) {
      width: 175% !important;
      height: 100%;
    }
  }
  svg {
    position: absolute;
    right: -17.5%;
    bottom: 8%;
    z-index: 0;
    width: 33%;

    @media only screen and (max-width: 1640px) {
      width: 40%;
      right: -23.5%;
      bottom: 10%;
    }
    @media only screen and (max-width: 1310px) {
      width: 45%;
      right: -26%;
      bottom: 10%;
    }

    @media only screen and (max-width: 1080px) {
      width: 55%;
      right: -30%;
      bottom: -17.5%;
    }
    :last-child {
      right: -7%;
      bottom: 10%;
      width: 25.5%;
      @media only screen and (max-width: 1640px) {
        right: -7%;
        bottom: 15%;
      }
      circle {
        fill: #1b1f1d;
        opacity: 20%;
      }
    }
  }
`

export const NavWrapper = styled.div`
  ul {
    padding: 0;
    li {
      list-style: none;
      padding: 0;
      margin: 0;
      a {
        text-decoration: none;
        color: #000;
        font-size: 13px;
        line-height: 16px;
        text-transform: uppercase;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          left: 0;
          top: calc(50% - 1px);
          height: 1px;
          width: 100%;
          background-color: #000;
          transform: scaleX(0);
          transform-origin: right center;
          transition: transform
            ${({ theme }) =>
              `${theme.transition.time} ${theme.transition.cubicBezier}`};
        }
        &.active {
          &:after {
            transform: scaleX(1);
          }
        }
      }
    }
  }
`

export const MainWrapper = styled.div`
  margin: 150px auto;
  padding: 0 0 50px 75px;
  display: flex;
  max-width: 1440px;

  span {
    font-weight: 600;
  }

  h2 {
  }

  div {
    flex: 1 1 60%;
    section {
      max-width: 632px;
    }
  }
  ${NavWrapper} {
    flex: 1 1 20%;
    align-self: flex-start;
    position: sticky;
    top: 150px;
  }
`

export const StyledSection = styled.section`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  position: relative;
`

export const SectionSpacer = styled.span`
  position: absolute;
  left: -20px;
  top: 0;
  background-color: #1b1f1d;
  width: calc(100% + 120px);
  height: 3px;
`
