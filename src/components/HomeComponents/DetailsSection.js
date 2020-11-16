import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  DetailsSection,
  PeopleDetailsWrapper,
  RealisatorsWrapper,
  CrewWrapper,
} from "./HomeStyles"
import { AnimatePresence, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Details = () => {
  const data = useStaticQuery(graphql`
    query detailsQuery {
      datoCmsStronaGlowna {
        listaRealizatorow {
          realizator
        }
        listaObsadaCzesc1 {
          realizator
        }
        listaObsadaCzesc2 {
          realizator
        }
      }
    }
  `)
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
            <motion.div key="realisatorsWrapper">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={realisatorsInView && { opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                exit={{ opacity: 0 }}
                style={{ color: "white" }}
                key="realisators"
              >
                Realizatorzy:
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={realisatorsInView && { opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                exit={{ opacity: 0 }}
                key="realisatorsList"
              >
                {data.datoCmsStronaGlowna.listaRealizatorow.map(realizator => (
                  <motion.li key={realizator.realizator}>
                    {realizator.realizator}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </RealisatorsWrapper>
        </AnimatePresence>
        <AnimatePresence>
          <CrewWrapper ref={crewRef}>
            <motion.div key="crewWrapper">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={crewInView && { opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                exit={{ opacity: 0 }}
                style={{ color: "white" }}
                key="crew"
              >
                Obsada:
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={crewInView && { opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                exit={{ opacity: 0 }}
                key="crewList"
              >
                {data.datoCmsStronaGlowna.listaObsadaCzesc1.map(
                  (realizator, iterator) => (
                    <>
                      {iterator === 1 && <motion.li>Chór:</motion.li>}
                      <motion.li key={realizator.realizator}>
                        {realizator.realizator}
                      </motion.li>
                    </>
                  )
                )}
              </motion.ul>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={crewInView && { opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                exit={{ opacity: 0 }}
                key="charactersList"
              >
                {data.datoCmsStronaGlowna.listaObsadaCzesc2.map(realizator => (
                  <motion.li key={realizator.realizator}>
                    {realizator.realizator}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </CrewWrapper>
        </AnimatePresence>
      </PeopleDetailsWrapper>
    </DetailsSection>
  )
}

export default Details
