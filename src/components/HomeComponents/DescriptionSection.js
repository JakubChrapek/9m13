import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Text from "../Text/Text"
import { ThemeContext } from "styled-components"
import { ArtBriefSection } from "./HomeStyles"
import { useInView } from "react-intersection-observer"
import { AnimatePresence, motion } from "framer-motion"

const Description = () => {
  const data = useStaticQuery(graphql`
    query descriptionQuery {
      datoCmsStronaGlowna {
        akapit1
        akapit2
      }
    }
  `)
  const themeContext = useContext(ThemeContext)
  const [parentRef, parentInView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  const parent = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 1.2,
        when: "beforeChildren",
      },
    },
  }

  const child1 = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }
  const child2 = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  return (
    <ArtBriefSection id="opis">
      <AnimatePresence>
        <motion.div
          ref={parentRef}
          exit={{ opacity: 0 }}
          variants={parent}
          initial="initial"
          animate={parentInView ? "animate" : {}}
        >
          <Text
            exit={{ opacity: 0 }}
            variants={child1}
            initial="initial"
            animate={parentInView ? "animate" : {}}
            color={themeContext.colors.grayDarkest}
          >
            {data.datoCmsStronaGlowna.akapit1}
          </Text>
          <Text
            exit={{ opacity: 0 }}
            variants={child2}
            initial="initial"
            animate={parentInView ? "animate" : {}}
            margin="32px 0 0"
            color={themeContext.colors.grayDarkest}
          >
            {data.datoCmsStronaGlowna.akapit2}
          </Text>
        </motion.div>
      </AnimatePresence>
    </ArtBriefSection>
  )
}

export default Description
