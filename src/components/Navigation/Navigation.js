import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const NavigationWrapper = styled.nav`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 75px;
  @media (max-width: 960px) {
    padding: 25px 28px;
  }
  height: 140px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  @media only screen and (max-width: 767px) {
    justify-content: space-between;
    align-items: center;
    height: unset;
    padding: 20px 28px;
  }
  font-family: "HKGrotesk";
  a {
    text-decoration: none;
    color: inherit;
    :focus {
      outline: 2px solid ${({ theme }) => theme.colors.black};
      outline-offset: 5px;
    }
  }
`

const Logo = styled.div`
  display: flex;
  align-items: stretch;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  @media (max-width: 1190px) {
    font-size: 20px;
    line-height: 24px;
  }
  letter-spacing: 0.02em;
  flex: 0 0 25%;
  @media only screen and (max-width: 767px) {
    flex: 0 0 75%;
    z-index: 6;
  }
  a {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const NavigationList = styled.ul`
  display: flex;
  align-items: stretch;
  flex: 0 0 75%;
  flex-wrap: wrap;
  list-style: none;
  @media (max-width: 1190px) {
    padding-left: 20px;
  }
  @media (max-width: 767px) {
    visibility: none;
    display: none;
    &.open {
      display: flex;
      visibility: visible;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.colors.white};
      z-index: 5;
      padding: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        margin-right: 0;
        margin-bottom: 40px;
        &:last-child {
          margin-bottom: 0;
        }
        font-size: 30px;
        line-height: 44px;
        font-weight: 400;
        letter-spacing: 1.25px;
      }
    }
  }
`

const NavigationListItem = styled(motion.li)`
  display: flex;
  align-items: stretch;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  @media (max-width: 1190px) {
    font-size: 17px;
    line-height: 17px;
  }
  letter-spacing: 0.02em;
  margin-right: 70px;
  @media (max-width: 1290px) {
    margin-right: 50px;
  }
  @media (max-width: 960px) {
    margin-right: 30px;
  }
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
  @media only screen and (max-width: 767px) {
    right: 90px;
  }
  font-weight: 600;
  transform: translateY(-200%);
  transition: transform
    ${({ theme }) => `${theme.transition.time} ${theme.transition.cubicBezier}`};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.black};
    outline-offset: 5px;
    transform: translateY(0);
  }
`

const MenuButton = styled.button`
  display: none;
  border: none;
  padding: 0;
  width: 26px;
  height: 24px;
  background-color: transparent;
  position: relative;
  z-index: 6 !important;
  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.black};
    outline-offset: 5px;
  }
  span {
    position: absolute;
    top: 0;
    right: 0;
    width: 26px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: opacity 0.2s ${({ theme }) => theme.transition.cubicBezier},
      transform 0.2s ${({ theme }) => theme.transition.cubicBezier};
    &:nth-child(2) {
      top: 10px;
    }
    &:last-child {
      top: 20px;
    }
  }
  &.open {
    position: fixed;
    right: 28px;
    z-index: 6;
    span {
      transform: translate3d(0, 10px, 0) rotate(45deg);
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: translate3d(0, -10px, 0) rotate(-45deg);
      }
    }
  }
  @media only screen and (max-width: 767px) {
    visibility: visible;
    display: block;
  }
`

const Navigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <NavigationWrapper>
      <SkipNavLink to="#main">Skip navigation</SkipNavLink>
      <Logo onClick={() => setOpen(false)}>
        <Link to="/">
          <span>numer 9</span> <span>mieszkania 13</span>
        </Link>
      </Logo>
      <NavigationList className={open ? "open" : ""}>
        <NavigationListItem onClick={() => setOpen(false)}>
          <StyledNavLink to="/#spektakl">Spektakl</StyledNavLink>
        </NavigationListItem>
        <NavigationListItem onClick={() => setOpen(false)}>
          <StyledNavLink to="/#realizatorzy">Realizatorzy</StyledNavLink>
        </NavigationListItem>
        <NavigationListItem onClick={() => setOpen(false)}>
          <StyledNavLink to="/#postaci">postaci</StyledNavLink>
        </NavigationListItem>
        <NavigationListItem onClick={() => setOpen(false)}>
          <StyledNavLink to="/konteksty">Konteksty</StyledNavLink>
        </NavigationListItem>
        <NavigationListItem onClick={() => setOpen(false)}>
          <StyledNavLink to="/warsztat">Warsztat</StyledNavLink>
        </NavigationListItem>
      </NavigationList>
      <MenuButton className={open ? "open" : ""} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
    </NavigationWrapper>
  )
}
export default Navigation
