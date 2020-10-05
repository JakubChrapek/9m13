import Image from "gatsby-image"
import styled from "styled-components"
import { motion } from "framer-motion"
export const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  picture,
  picture img {
    object-fit: contain !important;
    width: 100%;
    object-position: ${({ left }) => (left ? "left" : "center")} center;
  }
`

export const HeroWrapper = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: calc(100vh - 140px);
  min-height: 60vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.grayDarkest};
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 767px) {
    height: unset;
    min-height: unset;
  }
`

export const LeftWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 25%;
  @media only screen and (max-width: 1640px) {
    flex: 1 1 30%;
  }
  margin-bottom: 100px;

  @media only screen and (max-width: 1310px) {
    flex: 1 1 30%;
    align-items: flex-start;
    margin-top: 7%;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 1080px) {
    flex: 1 1 30%;
    align-items: stretch;
    margin-bottom: 10%;
    margin-top: 0;
  }
  img {
    z-index: 1;
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
      width: 40%;
    }
    @media only screen and (max-width: 1080px) {
      left: -22.5%;
      top: 12%;
      width: 45%;
    }

    @media only screen and (max-width: 960px) {
      top: 15%;
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
        bottom: -4%;
      }
    }
  }
`

export const CenterWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1 1 100%;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 910px) {
      align-items: flex-start;
      padding: 155px 28px;
    }
    li {
      list-style: none;
      margin-bottom: 52px;
      @media only screen and (max-width: 1310px) {
        margin-bottom: 36px;
      }
      @media only screen and (max-width: 910px) {
        margin-bottom: 52px;
      }
      &:last-child {
        margin-bottom: 0;
      }
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #fff;
        position: relative;
        font-size: 30px;
        line-height: 36px;
        &:focus {
          outline: 2px solid ${({ theme }) => theme.colors.white};
          outline-width: 0 0 2px 0;
          outline-offset: 5px;
        }

        @media only screen and (max-width: 1310px) {
          font-size: 24px;
        }
        @media only screen and (max-width: 1080px) {
          font-size: 18px;
        }
        @media only screen and (max-width: 910px) {
          font-size: 20px;
          line-height: 24px;
        }
        :after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -7px;
          width: 100%;
          height: 2px;
          background-color: #fff;
          transform: scaleY(0);
          transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        :hover {
          + svg {
            transform: translateX(8px);
            @media only screen and (max-width: 1080px) {
              transform: translateX(6px);
            }
          }
          :after {
            transform: scaleY(1);
          }
        }
        svg {
          margin-left: 24px;
          @media only screen and (max-width: 1080px) {
            margin-left: 16px;
          }
          @media only screen and (max-width: 910px) {
            margin-left: 30px;
            flex: 0 0 31px;
          }

          transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
      }
    }
  }
`

export const RightWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 25%;
  @media only screen and (max-width: 1640px) {
    flex: 1 1 30%;
  }
  margin-top: 52px;
  @media only screen and (max-width: 1310px) {
    flex: 1 1 30%;
    align-items: flex-end;
    margin-bottom: 2%;
    margin-top: 0;
  }
  @media only screen and (max-width: 1080px) {
    flex: 1 1 30%;
    margin-bottom: 0;
    ${StyledImage} {
      align-self: stretch;
    }
  }
  img,
  picture {
    z-index: 1;
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
      width: 40%;
      right: -26%;
      bottom: -6%;
    }

    @media only screen and (max-width: 1080px) {
      width: 45%;
      right: -27%;
      bottom: 10%;
    }
    @media only screen and (max-width: 960px) {
      bottom: 14%;
    }
    :last-child {
      right: -7%;
      bottom: 10%;
      width: 25.5%;
      @media only screen and (max-width: 1640px) {
        right: -7%;
        bottom: 15%;
      }
      @media only screen and (max-width: 1310px) {
        right: -5%;
        bottom: 2%;
      }
      @media only screen and (max-width: 1080px) {
        right: -2%;
        bottom: 19%;
      }
      @media only screen and (max-width: 960px) {
        bottom: 22%;
      }
      circle {
        fill: #1b1f1d;
        opacity: 20%;
      }
    }
  }
`

export const NavWrapper = styled(motion.div)`
  ul {
    padding: 0;
    display: flex;
    flex-direction: column;

    li {
      list-style: none;
      padding: 0;
      margin: 0;
      transition: transform
        ${({ theme }) =>
          `${theme.transition.time} ${theme.transition.cubicBezier}`};
      &:hover {
        transform: translateX(8px);
      }
      a {
        text-decoration: none;
        color: #000;
        font-size: 13px;
        line-height: 16px;
        text-transform: uppercase;
        position: relative;
        &:focus {
          outline: 2px solid ${({ theme }) => theme.colors.black};
          outline-offset: 2px;
        }
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

export const MainWrapper = styled(motion.div)`
  margin: 150px auto 75px;
  padding: 0 0 50px 75px;
  display: flex;
  max-width: 1440px;

  @media only screen and (max-width: 767px) {
    margin: 0 auto;
    padding: 50px 28px 60px;
  }

  span {
    font-weight: 600;
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

  @media only screen and (max-width: 767px) {
    h2,
    h3 {
      font-size: 26px;
      line-height: 32px;
    }
    p {
      font-size: 16px;
      line-height: 22px;
    }
  }
`

export const StyledSection = styled.section`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  position: relative;

  @media only screen and (max-width: 767px) {
    margin: ${({ mobileMargin }) => mobileMargin};
    padding: ${({ mobilePadding }) => mobilePadding};
  }
`

export const SectionSpacer = styled.span`
  position: absolute;
  left: -20px;
  top: 0;
  background-color: #1b1f1d;
  width: calc(100% + 120px);
  @media only screen and (max-width: 810px) {
    left: 0;
    max-width: 100%;
  }
  height: 3px;
`
