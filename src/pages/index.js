import React, { useEffect, useRef, useState } from "react"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { motion, AnimateSharedLayout } from "framer-motion"
import useCurrentWidth from "../components/hooks/useCurrentWidth"
import fb from "../assets/images/footerImages/facebook.svg"
import ig from "../assets/images/footerImages/instagram.svg"
import yt from "../assets/images/footerImages/youtube.svg"

// Components
import Text from "../components/Text/Text"
import Slide from "../components/Slide/Slide"
import {
  CreatorsSection,
  CreatorsWrapper,
  ContentWrapperList,
  NamesWrapper,
  FooterSection,
  TeatrColumn,
  MinisterstwoColumn,
  SocialColumn,
  LogoImage,
} from "../components/HomeComponents/HomeStyles"
import Hero from "../components/HomeComponents/HeroSection"
import Video from "../components/HomeComponents/VideoSection"
import Description from "../components/HomeComponents/DescriptionSection"
import Details from "../components/HomeComponents/DetailsSection"
import Characters from "../components/HomeComponents/CharactersSection"
import { Flex } from "../components/Flex/Flex"

const HomePage = ({ data }) => {
  const namesList = useRef(null)
  const creatorsContentList = useRef(null)
  let width = useCurrentWidth()
  const mobileBreakpoint = 767
  const [names, setNames] = useState(
    data.allDatoCmsTworca.nodes.map((_, iterator) =>
      iterator === 0 ? true : false
    )
  )

  const changeSlide = slideNumber => {
    if (width > mobileBreakpoint) {
      setNames(
        names.map((_, iterator) => (iterator === slideNumber ? true : false))
      )
    }
  }

  useEffect(() => {
    if (width <= mobileBreakpoint) {
      setNames(_ => true)
    }
  }, [width])

  return (
    <>
      <Seo title="Home" />
      <Hero />
      <Video />
      <Description />
      <Details />
      <Characters width={width} mobileBreakpoint={mobileBreakpoint} />
      <CreatorsSection
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <CreatorsWrapper>
          <ContentWrapperList>
            <AnimateSharedLayout>
              <motion.ul
                mobile={width <= mobileBreakpoint}
                layout
                ref={creatorsContentList}
              >
                {data.allDatoCmsTworca.nodes.map(
                  (tworca, iterator) =>
                    names[iterator] && (
                      <Slide
                        creator={tworca.imieNazwisko}
                        key={tworca.imieNazwisko}
                        description={tworca.tworcaOpis}
                      />
                    )
                )}
              </motion.ul>
            </AnimateSharedLayout>
          </ContentWrapperList>
          <NamesWrapper>
            <Text
              margin="0 0 40px"
              fontSize="52px"
              lineHeight="60px"
              color="#fff"
              as="h2"
            >
              Twórcy
            </Text>
            {width > mobileBreakpoint && (
              <ul ref={namesList}>
                {data.allDatoCmsTworca.nodes.map((tworca, iterator) => (
                  <li
                    className={names[iterator] ? "active" : ""}
                    key={tworca.imieNazwisko}
                    // onClick={() => changeSlide(iterator)}
                  >
                    <button onClick={() => changeSlide(iterator)}>
                      <svg
                        width="31"
                        height="16"
                        viewBox="0 0 31 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
                          fill="white"
                        />
                      </svg>
                      <Text
                        margin="10px 0 0"
                        color="#fff"
                        fontSize="30px"
                        lineHeight="36px"
                        fontWeight="300"
                        textTransform="uppercase"
                      >
                        {tworca.imieNazwisko}
                      </Text>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </NamesWrapper>
        </CreatorsWrapper>
      </CreatorsSection>
      <FooterSection>
        <TeatrColumn>
          <LogoImage fluid={data.teatr.childImageSharp.fluid} />
          <Text
            fontSize="22px"
            lineHeight="24px"
            fontWeight="600"
            letterSpacing="1.3px"
            textTransform="uppercase"
            zIndex="1"
            as="h3"
          >
            Teatr współczesny w Szczecinie
          </Text>
          <Text
            fontSize="13px"
            lineHeight="17px"
            fontWeight="600"
            letterSpacing="1.3px"
            textTransform="uppercase"
            margin="-25px 0 0 150px"
            zIndex="1"
          >
            Wały Chrobrego 3<br />
            70-500 Szczecin
          </Text>
          <Text
            fontSize="13px"
            lineHeight="17px"
            fontWeight="600"
            letterSpacing="1.3px"
            textTransform="uppercase"
            margin="20px 0 0 150px"
          >
            teatr@wspolczesny.szczecin.pl
            <br />
            www.wspolczesny.szczecin.pl
          </Text>
          <Text
            fontSize="13px"
            lineHeight="17px"
            fontWeight="600"
            letterSpacing="1.3px"
            textTransform="uppercase"
            margin="20px 0 0 150px"
          >
            Stronę stworzyli: Kryptonum Studio & Dobra Treść
          </Text>
        </TeatrColumn>
        <MinisterstwoColumn>
          <Image
            imgStyle={{
              objectFit: "contain",
              width: "256px",
              height: "256px",
            }}
            fluid={data.ministerstwo.childImageSharp.fluid}
          />
        </MinisterstwoColumn>
        <SocialColumn>
          <Text
            fontSize="13px"
            lineHeight="17px"
            fontWeight="600"
            letterSpacing="1.3px"
            textTransform="uppercase"
            margin="0 0 35px"
            as="h3"
          >
            Nasze social media
          </Text>
          <Flex width="156px" justifyContent="space-between">
            <img src={fb} alt="Facebook icon" />
            <img src={ig} alt="Instagram icon" />
            <img src={yt} alt="Youtube icon" />
          </Flex>
        </SocialColumn>
      </FooterSection>
    </>
  )
}

export const query = graphql`
  {
    ministerstwo: file(name: { eq: "ministerstwo-kultury-dofinansowanie" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    teatr: file(name: { eq: "teatr-współczesny-w-szczecinie" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    allDatoCmsTworca(sort: { fields: meta___createdAt }) {
      nodes {
        imieNazwisko
        tworcaOpis
      }
    }
  }
`

export default HomePage
