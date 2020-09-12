import React from "react"
import styled from "styled-components"

const StyledMain = styled.main``
const ContentWrapper = ({ children }) => {
  return <StyledMain id="main">{children}</StyledMain>
}

export default ContentWrapper
