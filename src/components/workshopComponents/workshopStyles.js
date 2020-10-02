import styled, { css } from "styled-components"
export const GifToggleButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px dashed #ffffffcc;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.5);
  color: #fff;
  pointer-events: none;
  font-size: 24px;
  left: 50%;
  opacity: 1;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) scale(1) rotate(0deg);
  transition: transform 0.4s, opacity 0.4s;
  &:hover {
    background-color: #000;
  }
  :after,
  :before {
    content: "";
    position: absolute;
    left: 16px;
    top: 14px;
    width: 3px;
    height: 18px;
    background-color: #ffffffcc;
    transition: transform 0.4s, opacity 0.4s;
  }
  :after {
    transform: translate(6px, -6px) rotate(-45deg);
  }
  :before {
    left: unset;
    right: 16px;
    transform: translate(-4px, 6px) rotate(45deg);
  }
  ${({ playing }) =>
    playing &&
    css`
      opacity: 0;
      :after,
      :before {
        transform: translate(0) rotate(0);
      }
    `}
`

export const Wrapper = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 30px 160px 30px 180px;
  max-width: 1440px;
  @media only screen and (max-width: 1440px) {
    padding: 30px 90px 30px 120px;
  }
  @media only screen and (max-width: 1306px) {
    padding: 30px 70px 30px 90px;
  }
  @media only screen and (max-width: 1153px) {
    padding: 30px 40px 30px 60px;
  }
  @media only screen and (max-width: 1007px) {
    padding: 30px 75px 30px;
    max-width: 100%;
    flex-direction: column;
  }
  @media (max-width: 960px) {
    padding: 30px 28px;
  }

  div:first-child {
    flex: 1 1 40%;
    align-self: center;
    @media only screen and (max-width: 1007px) {
      flex: 1 1 100%;
      order: 1;
      margin: 0 -14px 0 14px;
      width: 420px;
      align-self: flex-start;
    }
    @media only screen and (max-width: 500px) {
      width: unset;
    }
    h1 {
      font-size: 52px;
      line-height: 62px;
      font-weight: 600;
      margin-right: -40%;
      @media only screen and (max-width: 1306px) {
        font-size: 42px;
        line-height: 50px;
      }
      @media only screen and (max-width: 1153px) {
        font-size: 36px;
        line-height: 44px;
        margin-right: -20%;
      }
      @media only screen and (max-width: 1007px) {
        font-size: 30px;
        line-height: 41px;
        margin: 50px 0 0;
      }
      @media only screen and (max-width: 838px) {
        margin: 20px 0 0;
      }
      @media only screen and (max-width: 350px) {
        font-size: 26px;
        line-height: 36px;
        margin: 0 0 0;
      }
    }
    p {
      margin-top: 24px;
      font-size: 30px;
      line-height: 50px;
      letter-spacing: 0.05em;
      margin-right: -35%;
      @media only screen and (max-width: 1306px) {
        font-size: 26px;
        line-height: 42px;
      }
      @media only screen and (max-width: 1153px) {
        font-size: 22px;
        line-height: 38px;
        margin-right: -25%;
      }
      @media only screen and (max-width: 1007px) {
        font-size: 22px;
        line-height: 36px;
        margin-right: 0;
        margin-top: 18px;
      }
      @media only screen and (max-width: 350px) {
        font-size: 18px;
        line-height: 30px;
        margin-right: 0;
        margin-top: 12px;
      }
    }
    h1,
    p {
      z-index: 1;
      pointer-events: none;
    }
  }

  div:last-child {
    flex: 1 1 60%;
    @media only screen and (max-width: 1306px) {
      flex: 1 1 70%;
    }
    height: 60vh;
    max-height: 450px;
    @media only screen and (max-width: 1153px) {
      max-height: 350px;
    }
    @media only screen and (max-width: 1007px) {
      flex: 1 1 100%;
      order: 0;
      max-height: 450px;
    }
    @media only screen and (max-width: 680px) {
      max-height: 350px;
    }
    @media only screen and (max-width: 625px) {
      max-height: 320px;
    }
    @media only screen and (max-width: 515px) {
      max-height: 260px;
    }
    @media only screen and (max-width: 425px) {
      max-height: 210px;
    }
    @media only screen and (max-width: 385px) {
      max-height: 180px;
    }
  }
  .gif_player {
    flex: unset !important;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover + button {
      opacity: 1;
    }
  }
`

export const WhoWrapper = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 120px 110px 90px 50px;
  @media only screen and (max-width: 1260px) {
    padding: 120px 110px 60px 50px;
  }
  @media only screen and (max-width: 1260px) {
    padding: 100px 90px 60px 40px;
  }
  @media only screen and (max-width: 840px) {
    padding: 60px 60px 60px 40px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 60px 28px;
  }
  max-width: 1440px;
`

export const ImageWrapper = styled.div`
  display: flex;
  flex: 1 1 45%;
  margin-right: 110px;
  @media only screen and (max-width: 944px) {
    margin-right: 70px;
  }
  @media only screen and (max-width: 840px) {
    margin-right: 60px;
  }
  @media only screen and (max-width: 768px) {
    margin-right: 0;
    flex: 1 1 100%;
    width: 100%;
    order: -1;
    align-items: flex-start;
    justify-content: flex-start;
  }
  justify-content: flex-end;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 437px;
    img {
      width: 100%;
      height: 100%;
      max-width: 437px;
      object-fit: contain;
    }
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex: 1 1 55%;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 75px;
  @media only screen and (max-width: 768px) {
    flex: 1 1 100%;
    order: 1;
    margin-top: 40px;
  }
  h2 {
    font-size: 52px;
    line-height: 60px;
    @media only screen and (max-width: 1390px) {
      font-size: 46px;
      line-height: 54px;
    }
    @media only screen and (max-width: 1263px) {
      font-size: 34px;
      line-height: 42px;
    }
    @media only screen and (max-width: 768px) {
      margin-top: 0;
      font-size: 30px;
      line-height: 41px;
    }
  }
  ul {
    padding: 0;
    margin: 52px 0 0;
    @media only screen and (max-width: 1390px) {
      margin: 32px 0 0;
    }
    @media only screen and (max-width: 1263px) {
      margin: 24px 0 0;
    }
    @media only screen and (max-width: 768px) {
      margin: 8px 0 0;
    }
    li {
      font-size: 20px;
      line-height: 33px;
      list-style: none;
      @media only screen and (max-width: 944px) {
        font-size: 18px;
        line-height: 30px;
      }
      @media only screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 27px;
        letter-spacing: 0.01em;
      }
    }

    @media only screen and (max-width: 944px) {
      + p {
        margin-top: 70px;
        font-size: 16px;
        line-height: 24px;
      }
    }
    @media only screen and (max-width: 768px) {
      + p {
        margin-top: 40px;
        font-size: 17px;
        line-height: 27px;
        letter-spacing: 0.1em;
      }
    }
  }
`

export const WorkshopSection = styled.section`
  background-color: #1b1f1d;
`

export const WorkshopWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 83px 78px 150px 83px;
  max-width: 1440px;

  div {
    flex: 1 1 50%;
  }

  div:first-child {
    margin-left: 107px;
    align-self: center;
  }

  div:last-child {
    justify-self: flex-start;
  }

  h2 {
    color: #fff;
    font-size: 38px;
    line-height: 46px;
    font-weight: 600;
  }

  ul {
    color: #fff;
    padding: 0;
    margin: 52px 0 0;
    @media only screen and (max-width: 1390px) {
      margin: 32px 0 0;
    }
    @media only screen and (max-width: 1263px) {
      margin: 24px 0 0;
    }
    li {
      font-size: 20px;
      line-height: 33px;
      list-style-type: "- ";
    }
  }
`

export const WorkshopDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: ${({ margin }) => `${margin} !important`};
  padding: ${({ padding }) => padding};
  flex: ${({ flex }) => flex};
  align-self: center;

  :last-child {
    margin-left: 107px;
  }
  .gif_player {
    flex: unset !important;
    width: 100%;
    height: 100%;
    margin-left: 0 !important;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover + button {
      opacity: 1;
    }
  }
`

export const HowToWrapper = styled.section`
  margin: 0 auto;
  max-width: 1440px;
  padding: 180px 185px 90px;
`

export const HowToTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  flex: ${({ flex }) => flex};
  text-align: ${({ alignItems }) => alignItems === "flex-end" && "right"};
  ul {
    padding: 0;
    padding-inline-start: 1em;
    margin: 0;

    li {
      list-style-type: "- ";
    }
  }
  a {
    position: relative;
    text-decoration: none;
    color: #000;
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.black};
      outline-offset: 5px;
    }

    :after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -7px;
      height: 2px;
      width: 100%;
      background-color: #000;

      transition: transform
        ${({ theme }) => `0.2s ${theme.transition.cubicBezier}`};
    }
    :hover:after {
      transform: translateY(-5px);
    }
  }
`

export const VideoWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 100px 78px 70px;
  @media only screen and (max-width: 1320px) {
    padding: 60px 50px 40px;
  }
  max-width: 1440px;
  height: calc(100vh + 235px);
  max-height: 1020px;
  p {
    color: #fff;
    width: 565px;
    max-width: 100%;
    text-align: center;
  }
`
export const VideoIframe = styled.iframe`
  border: 0;
`

export const TeacherWrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 190px 170px 30px 78px;
`

export const TeacherBox = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex: ${({ flex }) => flex};
  flex-direction: ${({ column }) => column && "column"};
  align-self: ${({ alignSelf }) => alignSelf};
  margin: ${({ margin }) => margin};
  h3 {
    font-size: 52px;
    line-height: 62px;
  }
  p {
    font-size: 20px;
    line-height: 33px;
    letter-spacing: 0.05em;
  }
`

export const TeacherImageWrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  justify-content: flex-start;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 437px;
    img {
      width: 100%;
      height: 100%;
      max-width: 437px;
      object-fit: contain;
    }
  }
`
