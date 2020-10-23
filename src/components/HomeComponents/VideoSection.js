import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  PremieraSection,
  VideoSection,
  VideoContainer,
  VideoIframe,
} from "./HomeStyles"

import Text from "../Text/Text"

import { AnimatePresence, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Video = () => {
  const data = useStaticQuery(graphql`
    query videoQuery {
      datoCmsStronaGlowna {
        tytulWiersz1
        tytulWiersz2
        wiersz3
      }
    }
  `)

  const [parentRef, parentInView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  })

  const parent = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.4,
        delay: 0,
        duration: 1,
        when: "beforeChildren",
      },
    },
  }

  const child1 = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.6,
        delay: 0.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }
  const child2 = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.6,
        delay: 2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }
  const child3 = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.6,
        delay: 2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }
  const line = {
    initial: {
      opacity: 0,
      scaleX: 0,
    },
    animate: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.6,
        delay: 3.1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  return (
    // <PremieraSection id="spektakl">
    //   <AnimatePresence>
    //     {/* <motion.div
    //       ref={parentRef}
    //       exit={{ opacity: 0 }}
    //       variants={parent}
    //       initial="initial"
    //       animate={parentInView ? "animate" : {}}
    //     >
    //       <motion.span
    //         exit={{ opacity: 0 }}
    //         variants={child1}
    //         initial="initial"
    //         animate={parentInView ? "animate" : {}}
    //         className="first"
    //       >
    //         {data.datoCmsStronaGlowna.tytulWiersz1}
    //       </motion.span>
    //       <motion.span
    //         exit={{ opacity: 0 }}
    //         variants={child2}
    //         initial="initial"
    //         animate={parentInView ? "animate" : {}}
    //         className="second"
    //       >
    //         {data.datoCmsStronaGlowna.tytulWiersz2}
    //       </motion.span>
    //       <motion.span
    //         exit={{ opacity: 0 }}
    //         variants={child3}
    //         initial="initial"
    //         animate={parentInView ? "animate" : {}}
    //         className="third"
    //       >
    //         {data.datoCmsStronaGlowna.wiersz3}
    //       </motion.span>
    //       <motion.div
    //         exit={{ opacity: 0 }}
    //         variants={line}
    //         initial="initial"
    //         animate={parentInView ? "animate" : {}}
    //         className="fourth"
    //         style={{ originX: 0, originY: 0.5 }}
    //       ></motion.div>
    //     </motion.div> */}
    //   </AnimatePresence>
    // </PremieraSection>
    <VideoSection id="spektakl">
      <AnimatePresence>
        <VideoContainer
          ref={parentRef}
          exit={{ opacity: 0 }}
          variants={parent}
          initial="initial"
          animate={parentInView ? "animate" : {}}
        >
          <Text
            color="#fff"
            fontSize="24px"
            fontWeight="600"
            letterSpacing="0.02em"
            lineHeight="28px"
            exit={{ opacity: 0 }}
            variants={child1}
            initial="initial"
            animate={parentInView ? "animate" : {}}
          >
            numer 9 <br />
            mieszkania 13
          </Text>
          <VideoIframe
            src="https://player.vimeo.com/video/471351047"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            exit={{ opacity: 0 }}
            variants={child2}
            initial="initial"
            animate={parentInView ? "animate" : {}}
          />
        </VideoContainer>
      </AnimatePresence>
    </VideoSection>
  )
}

export default Video
