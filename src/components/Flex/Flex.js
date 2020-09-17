import React from "react"
import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column && "column"};
  margin: ${({ margin }) => margin};
`
