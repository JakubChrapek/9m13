import React from "react"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Navigation from "../components/Navigation/Navigation"
import Wrapper from "../components/Wrapper/Wrapper"
import styled, { ThemeProvider } from "styled-components"

const PageWrapper = styled.div`
  max-width: 1440px;
  padding: 0;
  margin: 0 auto;
`

const theme = {
  colors: {
    white: "#fff",
    black: "#000",
    gray: "#BEBFBB",
    grayText: "#606060",
    grayDarkest: "#1B1F1D",
  },
  transition: {
    time: "0.6s",
    cubicBezier: "cubic-bezier(0.76, 0, 0.24, 1)",
  },
}

const PageLayout = ({ children }) => (
  <PageWrapper>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  </PageWrapper>
)

export default PageLayout
