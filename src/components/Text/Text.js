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
  text-transform: ${({ textTransform }) => textTransform};
  text-align: ${({ textAlign }) => textAlign};
  z-index: ${({ zIndex }) => zIndex};
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
  textTransform,
  textAlign,
  zIndex,
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
      textTransform={textTransform}
      textAlign={textAlign}
      zIndex={zIndex}
    >
      {children}
    </StyledText>
  )
}

export default Text
