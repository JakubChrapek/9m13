import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column && "column"};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  position: ${({ relative }) => relative && "relative"};
`
