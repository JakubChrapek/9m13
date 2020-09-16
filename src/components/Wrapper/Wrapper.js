import React from "react"
import styled from "styled-components"

const MainWrapper = styled.main``
const ContentWrapper = ({ children }) => {
  return <MainWrapper id="main">{children}</MainWrapper>
}

export default ContentWrapper
