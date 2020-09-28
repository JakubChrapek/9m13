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
  align-items: center;
  height: calc(100vh - 140px);
  min-height: 60vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.grayDarkest};
`

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 25%;
  margin-bottom: 100px;
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
      &:last-child {
        margin-bottom: 0;
      }
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        h3 {
          position: relative;
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
        :hover {+
          svg {
            transform: translateX(8px);
          }
          h3:after {
            transform: scaleY(1);
          }
        }
        svg {
          margin-left: 24px;
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
  margin-top: 52px;
`
