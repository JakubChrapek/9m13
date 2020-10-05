import React from "react"
import Seo from "../components/Seo"
import { motion } from "framer-motion"

import ContextHeroSection from "../components/contextComponents/ContextHeroSection"
import ContextContentSection from "../components/contextComponents/ContextContentSection"
import Footer from "../components/Footer/FooterSection"

import useCurrentWidth from "../components/hooks/useCurrentWidth"

const ContextsPage = () => {
  let width = useCurrentWidth()
  const mobileBreakpoint = 767

  return (
    <>
      <Seo title="Konteksty" />
      <ContextHeroSection width={width} mobileBreakpoint={mobileBreakpoint} />
      <ContextContentSection
        width={width}
        mobileBreakpoint={mobileBreakpoint}
      />
      <Footer />
    </>
  )
}

export default ContextsPage
