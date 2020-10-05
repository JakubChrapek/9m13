import React from "react"
import {
  DetailsSection,
  PeopleDetailsWrapper,
  RealisatorsWrapper,
  CrewWrapper,
} from "./HomeStyles"
import { AnimatePresence, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Details = () => {
  const [parentRef] = useInView()

  const [realisatorsRef, realisatorsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: 200,
  })
  const [crewRef, crewInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
    delay: 200,
  })

  return (
    <DetailsSection id="realizatorzy">
      <PeopleDetailsWrapper
        ref={parentRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { staggerChildren: 1 } }}
        transition={{ staggerChildren: 0.3 }}
      >
        <AnimatePresence>
          <RealisatorsWrapper ref={realisatorsRef}>
            {realisatorsInView && (
              <motion.div key="realisatorsWrapper">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  exit={{ opacity: 0 }}
                  style={{ color: "white" }}
                  key="realisators"
                >
                  Realizatorzy:
                </motion.h3>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  exit={{ opacity: 0 }}
                  key="realisatorsList"
                >
                  <motion.li>reżyseria i montaż: Daria Kopiec</motion.li>
                  <motion.li>scenariusz: Zuzanna Bojda</motion.li>
                  <motion.li>muzyka: Natalia Czekała</motion.li>
                  <motion.li>scenografia: Aleksandra Starzyńska</motion.li>
                  <motion.li>animacja filmowa: Magdalena Parszewska</motion.li>
                  <motion.li>
                    postprodukcja filmowa, efekty specjalne: Jacek Mazur
                  </motion.li>
                  <motion.li>reżyseria dźwięku: Agata Chodyra</motion.li>
                  <motion.li>współpraca operatorska: Piotr Chodura</motion.li>
                  <motion.li>korekcja barwna: Jarosław Sterczewski</motion.li>
                </motion.ul>
              </motion.div>
            )}
          </RealisatorsWrapper>
        </AnimatePresence>
        <AnimatePresence>
          <CrewWrapper ref={crewRef}>
            {crewInView && (
              <motion.div key="crewWrapper">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  exit={{ opacity: 0 }}
                  style={{ color: "white" }}
                  key="crew"
                >
                  Obsada:
                </motion.h3>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  exit={{ opacity: 0 }}
                  key="crewList"
                >
                  <motion.li>Kamienica: Beata Zygarlicka</motion.li>
                  <motion.li>
                    Chór:
                    <br />
                    Umarły żeglarz: Konrad Pawicki
                  </motion.li>
                  <motion.li>Samobójczyni: Joanna Matuszak</motion.li>
                  <motion.li>Zamordowany cinkciarz: Arkadiusz Buszko</motion.li>
                  <motion.li>
                    Kochanka na fotelu rozwalonego samochodu: Adrianna
                    Janowska-Moniuszko
                  </motion.li>
                </motion.ul>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  exit={{ opacity: 0 }}
                  key="charactersList"
                >
                  <motion.li>Drzewo: Maciej Litkowski</motion.li>
                  <motion.li>Pan spod piątki: Grzegorz Młudzik</motion.li>
                  <motion.li>Pani spod piątki: Anna Januszewska</motion.li>
                  <motion.li>Kobieta spod siódemki: Maria Dąbrowska</motion.li>
                  <motion.li>Chłopak spod szóstki: Konrad Beta</motion.li>
                  <motion.li>
                    Dziewczyna spod dwunastki: Magdalena Wrani-Stachowska
                  </motion.li>
                  <motion.li>Mężczyzna spod trójki: Wojciech Sandach</motion.li>
                </motion.ul>
              </motion.div>
            )}
          </CrewWrapper>
        </AnimatePresence>
      </PeopleDetailsWrapper>
    </DetailsSection>
  )
}

export default Details
