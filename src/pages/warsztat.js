import React from "react"
import Seo from "../components/Seo"
import Hero from "../components/workshopComponents/heroWorkshop"
import About from "../components/workshopComponents/aboutWorkshop"
import HowTo from "../components/workshopComponents/howToAttend"
import Teacher from "../components/workshopComponents/teacherWorkshop"
import VideoSection from "../components/workshopComponents/videoSection"
import WhoSection from "../components/workshopComponents/whoSection"

import {} from "../components/workshopComponents/workshopStyles"
import Footer from "../components/Footer/FooterSection"

const WorkshopPage = () => {
  return (
    <>
      <Seo title="Warsztat" />
      <Hero />
      <WhoSection />
      <About />
      <HowTo />
      <VideoSection />
      <Teacher />
      <Footer />
    </>
  )
}

export default WorkshopPage
