import React from "react"
import styled from "styled-components"

const StyledText = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "27px")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "0"};
  color: ${({ color, theme }) => (color ? color : theme.colors.black)};
  margin: ${({ margin }) => (margin ? margin : "0")};
`

const Text = ({
  children,
  as,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  margin,
}) => {
  return (
    <StyledText
      as={as}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      margin={margin}
    >
      {children}
    </StyledText>
  )
}

export default Text
