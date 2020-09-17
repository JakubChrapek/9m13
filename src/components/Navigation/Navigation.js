import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 75px;
  height: 140px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  font-family: "HKGrotesk";
  a {
    text-decoration: none;
    color: inherit;
    :focus {
      outline: 2px solid ${({ theme }) => theme.colors.black};
      outline-offset: 8px;
    }
  }
`

const Logo = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.02em;
  flex: 0 0 25%;
  a {
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const NavigationList = styled.ul`
  display: flex;
  align-items: stretch;
  flex: 0 0 75%;
  list-style: none;
`

const NavigationListItem = styled.li`
  display: flex;
  align-items: stretch;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.02em;
  margin-right: 70px;
  &:last-child {
    margin-right: 0;
  }
`

const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
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
        <StyledNavLink to="/spectacle">Spektakl</StyledNavLink>
      </NavigationListItem>
      <NavigationListItem>
        <StyledNavLink to="/actors">Postacie</StyledNavLink>
      </NavigationListItem>
      <NavigationListItem>
        <StyledNavLink to="/creators">Realizatorzy</StyledNavLink>
      </NavigationListItem>
      <NavigationListItem>
        <StyledNavLink to="/blog">Konteksty</StyledNavLink>
      </NavigationListItem>
      <NavigationListItem>
        <StyledNavLink to="/workshop">Warsztat</StyledNavLink>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
)

export default Navigation
