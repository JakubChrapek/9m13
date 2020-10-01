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

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 160px 30px 180px;
  max-width: 1440px;

  div:first-child {
    flex: 1 1 45%;
    h1 {
      font-size: 52px;
      line-height: 62px;
      font-weight: 600;
      margin-right: -15%;
    }
    p {
      margin-top: 24px;
      font-size: 30px;
      line-height: 50px;
      letter-spacing: 0.05em;
      margin-right: -35%;
    }
    h1,
    p {
      z-index: 1;
      pointer-events: none;
    }
  }

  div:last-child {
    flex: 1 1 55%;
    height: 50vh;
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

export const WhoWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 120px 110px 30px 50px;
  @media only screen and (max-width: 1260px) {
    padding: 120px 110px 30px 50px;
  }
  max-width: 1440px;
`

export const ImageWrapper = styled.div`
  display: flex;
  flex: 1 1 45%;
  margin-right: 110px;
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
    li {
      font-size: 20px;
      line-height: 33px;
      list-style: none;
    }
  }
`

export const WorkshopWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 83px 78px 150px 83px;
  max-width: 1440px;
`
