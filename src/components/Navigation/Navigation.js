import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import useCurrentWidth from "../../components/hooks/useCurrentWidth"

const NavigationWrapper = styled(motion.nav)`
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

const NavigationList = styled(motion.ul)`
  display: flex;
  align-items: stretch;
  flex: 0 0 75%;
  flex-wrap: wrap;
  list-style: none;
  @media (max-width: 1190px) {
    padding-left: 20px;
  }
  @media (max-width: 767px) {
    /* visibility: none;
    display: none;
    &.open { */
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
      margin-bottom: 32px;
      &:last-child {
        margin-bottom: 0;
      }
      font-size: 28px;
      line-height: 38px;
      font-weight: 400;
      letter-spacing: 1.25px;
    }

    @media (max-width: 688px) {
      li {
        margin-bottom: 26px;
        font-size: 24px;
        line-height: 34px;
      }
    }
    @media (max-height: 415px) {
      li {
        margin-bottom: 0;
        padding: 10px;
        font-size: 20px;
        line-height: 24px;
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
  position: relative;

  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: #000;
    transform: scaleY(0);
    transform-origin: center center;
    transition: transform
      ${({ theme }) => `0.2s ${theme.transition.cubicBezier}`};
  }
  :hover:after,
  &.active {
    transform: scaleY(1);
  }
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
  let width = useCurrentWidth()

  return (
    <NavigationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SkipNavLink to="#main">Skip navigation</SkipNavLink>
      <Logo onClick={() => setOpen(false)}>
        <Link to="/">
          <span>numer 9</span> <span>mieszkania 13</span>
        </Link>
      </Logo>
      <AnimatePresence>
        {(width >= 767 || open) && (
          <NavigationList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={open ? "open" : ""}
          >
            <NavigationListItem onClick={() => setOpen(false)}>
              <StyledNavLink to="/#spektakl" activeClassName="active">
                Spektakl
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem onClick={() => setOpen(false)}>
              <StyledNavLink to="/#postaci" activeClassName="active">
                Postaci
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem onClick={() => setOpen(false)}>
              <StyledNavLink to="/#tworcy" activeClassName="active">
                Twórcy
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem onClick={() => setOpen(false)}>
              <StyledNavLink to="/konteksty" activeClassName="active">
                Konteksty
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem onClick={() => setOpen(false)}>
              <StyledNavLink to="/warsztat" activeClassName="active">
                Warsztaty
              </StyledNavLink>
            </NavigationListItem>
          </NavigationList>
        )}
      </AnimatePresence>
      <MenuButton
        title="menu button for toggling mobile menu"
        aria-label="menu button for toggling mobile menu"
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
    </NavigationWrapper>
  )
}
export default Navigation
