import React from "react"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Navigation from "../components/Navigation/Navigation"
import Wrapper from "../components/Wrapper/Wrapper"
import styled, { ThemeProvider } from "styled-components"

const PageWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

const theme = {
  colors: {
    white: "#fff",
    black: "#000",
  },
  fontWeight: {
    normal: "400",
    semiBold: "600",
    black: "900",
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
