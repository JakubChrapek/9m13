import React from "react"
import GlobalStyle from "../assets/styles/GlobalStyle"
import Navigation from "../components/Navigation/Navigation"
import Wrapper from "../components/Wrapper/Wrapper"
import styled from "styled-components"

const PageWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
const PageLayout = ({ children }) => (
  <PageWrapper>
    <GlobalStyle />
    <Navigation />
    <Wrapper>{children}</Wrapper>
  </PageWrapper>
)

export default PageLayout
