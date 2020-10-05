import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
  HeroSection,
  TextWrapper,
  ImagesWrapper,
  StyledImage,
  CircleBigger,
  CircleSmaller,
  TextWithBackground,
  StyledButton,
  HiddenOverflowWrapper,
} from "./HomeStyles"
import { motion } from "framer-motion"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      file(name: { eq: "grafika-kamienicy" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const handleClick = e => {
    e.preventDefault()
    let section =
      typeof window !== "undefined" &&
      window.document &&
      document.querySelector("#spektakl")
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
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
        delay: 0.2,
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
        delay: 0.9,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  return (
    <HiddenOverflowWrapper>
      <HeroSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.6,
          when: "beforeChildren",
        }}
      >
        <TextWrapper>
          <motion.span
            exit={{ opacity: 0 }}
            variants={child1}
            initial="initial"
            animate="animate"
          >
            Skąd kamienica ma wiedzieć,{" "}
          </motion.span>{" "}
          <TextWithBackground
            exit={{ opacity: 0 }}
            variants={child2}
            initial="initial"
            animate="animate"
            // bg="#BEBFBB"
          >
            kiedy jest samotność?
          </TextWithBackground>
          <StyledButton
            onClick={e => handleClick(e)}
            margin="40px 0 0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            Zobacz
          </StyledButton>
        </TextWrapper>
        <ImagesWrapper>
          <StyledImage fluid={data.file.childImageSharp.fluid} />
          <CircleBigger
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#C4C4C4" />
          </CircleBigger>
          <CircleSmaller
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#1B1F1D" fillOpacity="0.2" />
          </CircleSmaller>
        </ImagesWrapper>
      </HeroSection>
    </HiddenOverflowWrapper>
  )
}

export default Hero
