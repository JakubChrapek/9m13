import React from "react"
import Seo from "../components/Seo"

import ContextHeroSection from "../components/contextComponents/ContextHeroSection"
import ContextContentSection from "../components/contextComponents/ContextContentSection"
import Footer from "../components/Footer/FooterSection"

const ContextsPage = () => {
  return (
    <>
      <Seo title="Konteksty" />
      <ContextHeroSection />
      <ContextContentSection />
      <Footer />
    </>
  )
}

export default ContextsPage
