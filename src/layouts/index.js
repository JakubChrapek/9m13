import React, { useState } from "react"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Navigation from "../components/Navigation/Navigation"
import Wrapper from "../components/Wrapper/Wrapper"
import ScrollToTop from "../components/ScrollToTop/ScrollToTop"
import styled, { ThemeProvider } from "styled-components"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { AnimatePresence } from "framer-motion"

const PageWrapper = styled.div`
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

const PageLayout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y < -1200
      if (isShow !== isVisible) setIsVisible(isShow)
    },
    [isVisible]
  )

  return (
    <PageWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <ScrollToTop isVisible={isVisible} />
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </PageWrapper>
  )
}

export default PageLayout
