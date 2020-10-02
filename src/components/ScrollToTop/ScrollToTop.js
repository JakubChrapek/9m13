import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

const StyledScrollArrow = styled(motion.button)`
  background-color: #1b1f1d;
  text-align: center;
  line-height: 1;
  border: 2px solid transparent;
  background-color: RGBA(27, 31, 29, 1);
  mix-blend-mode: difference;

  border-radius: 100%;
  width: 30px;
  height: 30px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  @media only screen and (max-width: 500px) {
    bottom: 16px;
    right: 16px;
  }
  z-index: 9;
  opacity: 0.8;
  transition: opacity 0.2s ease-in, transform 0.2s ease-in;
  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.black};
    outline-offset: 4px;
  }

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2px;
    height: 6px;
    background-color: RGBA(255, 255, 255, 1);
    :nth-child(1) {
      transform: translate(calc(-50% - 2px), calc(-50% - 3px)) rotate(45deg);
    }
    :nth-child(2) {
      transform: translate(calc(-50% + 2px), calc(-50% - 3px)) rotate(-45deg);
    }
  }

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2px;
    height: 8px;
    background-color: RGBA(255, 255, 255, 1);
    transform: translate(-50%, calc(-50% + 1px));
  }
`

const ScrollToTop = ({ isVisible }) => {
  const handleClick = () => {
    typeof window !== "undefined" &&
      window.document &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <StyledScrollArrow
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
        </StyledScrollArrow>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
