import React from "react"
import Seo from "../components/Seo"
import useCurrentWidth from "../components/hooks/useCurrentWidth"
import { motion } from "framer-motion"
// Components
import Hero from "../components/HomeComponents/HeroSection"
import Video from "../components/HomeComponents/VideoSection"
import Description from "../components/HomeComponents/DescriptionSection"
import Details from "../components/HomeComponents/DetailsSection"
import Characters from "../components/HomeComponents/CharactersSection"
import Creators from "../components/HomeComponents/CreatorsSection"
import Footer from "../components/Footer/FooterSection"

const HomePage = () => {
  let width = useCurrentWidth()
  const mobileBreakpoint = 767

  return (
    <>
      <Seo title="Strona główna" />
      <Hero />
      <Video />
      <Description />
      <Details />
      <Characters width={width} mobileBreakpoint={mobileBreakpoint} />
      <Creators width={width} mobileBreakpoint={mobileBreakpoint} />
      <Footer />
    </>
  )
}

export default HomePage
