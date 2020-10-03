import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const MainWrapper = styled(motion.main)``
const ContentWrapper = ({ children }) => {
  return <MainWrapper id="main">{children}</MainWrapper>
}

export default ContentWrapper
