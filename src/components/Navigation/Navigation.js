import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  padding: 20px 0;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "HKGrotesk";
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Logo = styled.span`
  font-weight: 700;
  font-size: 28px;
  margin-right: 10px;
`

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 16px;
  margin-left: 32px;
`
const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">numer 9 mieszkania 13</Link>
    </Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to="/spectacle">Spektakl</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/actors">Postacie</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/creators">Realizatorzy</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/blog">Konteksty</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/workshop">Warsztat</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
)

export default Navigation
