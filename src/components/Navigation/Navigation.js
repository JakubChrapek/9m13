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

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
  margin-right: 10px;
  a {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
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

const SkipNavLink = styled(Link)`
  position: absolute;
  top: 10px;
  right: 60px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
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
