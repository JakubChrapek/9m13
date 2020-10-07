import React from "react"
import { PremieraSection } from "./HomeStyles"

import { AnimatePresence, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Video = () => {
  const [parentRef, parentInView] = useInView({
    threshold: 0.2,
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
        delay: 1.2,
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
    <PremieraSection id="spektakl">
      <AnimatePresence>
        <motion.div
          ref={parentRef}
          exit={{ opacity: 0 }}
          variants={parent}
          initial="initial"
          animate={parentInView ? "animate" : {}}
        >
          <motion.span
            exit={{ opacity: 0 }}
            variants={child1}
            initial="initial"
            animate={parentInView ? "animate" : {}}
            className="first"
          >
            numer 9
          </motion.span>
          <motion.span
            exit={{ opacity: 0 }}
            variants={child2}
            initial="initial"
            animate={parentInView ? "animate" : {}}
            className="second"
          >
            mieszkania 13
          </motion.span>
          <motion.span
            exit={{ opacity: 0 }}
            variants={child3}
            initial="initial"
            animate={parentInView ? "animate" : {}}
            className="third"
          >
            premiera: 24.10.2020
          </motion.span>
          <motion.div
            exit={{ opacity: 0 }}
            variants={line}
            initial="initial"
            animate={parentInView ? "animate" : {}}
            className="fourth"
            style={{ originX: 0, originY: 0.5 }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </PremieraSection>
    // <VideoSection id="spektakl">
    //   <VideoContainer>
    //     <Text
    //       color="#fff"
    //       fontSize="24px"
    //       fontWeight="600"
    //       letterSpacing="0.02em"
    //       lineHeight="28px"
    //     >
    //       numer 9 <br />
    //       mieszkania 13
    //     </Text>
    //     <VideoIframe
    //       src="https://player.vimeo.com/video/458423947"
    //       width="100%"
    //       height="100%"
    //       frameborder="0"
    //       allow="autoplay; fullscreen"
    //       allowfullscreen
    //     ></VideoIframe>
    //   </VideoContainer>
    // </VideoSection>
  )
}

export default Video
