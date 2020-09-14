import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  padding: 60px 0;
  /* height: 80px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "HKGrotesk";
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Logo = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.02em;
  flex: 0 0 25%;
  a {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const NavigationList = styled.ul`
  display: flex;
  flex: 0 0 75%;
  list-style: none;
  padding-left: 12.5%;
`

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.02em;
  margin-right: 70px;
  &:last-child {
    margin-right: 0;
  }
`

const SkipNavLink = styled(Link)`
  position: absolute;
  top: 10px;
  right: 60px;
  font-weight: 600;
  transform: translateY(-200%);
  transition: transform
    ${({ theme }) => `${theme.transition.time} ${theme.transition.cubicBezier}`};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.black};
    outline-offset: 8px;
    transform: translateY(0);
  }
`
const Navigation = () => (
  <NavigationWrapper>
    <SkipNavLink to="#main">Skip navigation</SkipNavLink>
    <Logo>
      <Link to="/">
        <span>numer 9</span> <span>mieszkania 13</span>
      </Link>
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
