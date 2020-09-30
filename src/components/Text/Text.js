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
  @media only screen and (max-width: 767px) {
    margin: ${({ mobileMargin }) => mobileMargin};
    font-size: ${({ special }) => special && "20px !important"};
    line-height: ${({ special }) => special && "32px !important"};
    letter-spacing: ${({ special }) => special && "2px !important"};
  }
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
  mobileMargin,
  textTransform,
  textAlign,
  zIndex,
  special,
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
      mobileMargin={mobileMargin}
      textTransform={textTransform}
      textAlign={textAlign}
      zIndex={zIndex}
      special={special}
    >
      {children}
    </StyledText>
  )
}

export default Text
