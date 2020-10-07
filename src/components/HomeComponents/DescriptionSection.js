import React, { useContext } from "react"
import Text from "../Text/Text"
import { ThemeContext } from "styled-components"
import { ArtBriefSection } from "./HomeStyles"
import { useInView } from "react-intersection-observer"
import { AnimatePresence, motion } from "framer-motion"

const Description = () => {
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
            Spektakl online „numer 9 mieszkania 13” to nowatorskie połączenie
            formy teatralnej z animacją filmową. Potrzeby i pragnienia
            mieszkańców jednej kamienicy „stłoczą się” w jednym miejscu.
            Inspiracja surrealizmem, absurdem i groteską pozwoli na
            humorystyczne spojrzenie na tę sytuację. Małżeństwo z wieloletnim
            stażem, fana gier komputerowych czy też obsesyjnie zmieniającą
            wycieraczki kobietę spod siódemki czeka jednak pewna nieoczekiwana
            zmiana…
          </Text>
          <Text
            exit={{ opacity: 0 }}
            variants={child2}
            initial="initial"
            animate={parentInView ? "animate" : {}}
            margin="32px 0 0"
            color={themeContext.colors.grayDarkest}
          >
            Jak poradzić sobie z tęsknotą za bliskością, dotykiem, bezpośrednią
            rozmową? Czy blok wytrzyma izolację? Czy ściany nie pękną pod
            naporem rozpychających się w jednym miejscu emocji…? I wreszcie –
            czy kamienica, architektoniczna bryła, może mieć uczucia…?
          </Text>
        </motion.div>
      </AnimatePresence>
    </ArtBriefSection>
  )
}

export default Description
