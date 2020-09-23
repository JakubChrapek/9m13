import React, { useContext, useEffect, useRef, useState } from "react"
import Seo from "../components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled, { ThemeContext } from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, AnimateSharedLayout } from "framer-motion"
import fb from "../assets/images/footerImages/facebook.svg"
import ig from "../assets/images/footerImages/instagram.svg"
import yt from "../assets/images/footerImages/youtube.svg"

// Components
import Text from "../components/Text/Text"
import Slide from "../components/Slide/Slide"
import {
  VideoSection,
  HeroSection,
  TextWrapper,
  StyledHeader,
  ImagesWrapper,
  StyledImage,
  CircleBigger,
  CircleSmaller,
  TextWithBackground,
  StyledButton,
  VideoIframe,
  VideoContainer,
  ArtBriefSection,
  DetailsSection,
  RealisatorsWrapper,
  PeopleDetailsWrapper,
  CrewWrapper,
  CharactersWrapper,
  CharactersGrid,
  CreatorsSection,
  CreatorsWrapper,
  ContentWrapperList,
  NamesWrapper,
  FooterSection,
  TeatrColumn,
  MinisterstwoColumn,
  SocialColumn,
} from "../components/HomeComponents/HomeStyles"
import { Flex } from "../components/Flex/Flex"

const HomePage = ({ data }) => {
  const themeContext = useContext(ThemeContext)
  const namesList = useRef(null)
  const creatorsContentList = useRef(null)
  const [activeContentItem, setActiveContentItem] = useState(null)

  const [names, setNames] = useState(
    data.allDatoCmsTworca.nodes.map((_, iterator) =>
      iterator === 0 ? true : false
    )
  )

  const changeSlide = slideNumber => {
    setNames(
      names.map((name, iterator) => (iterator === slideNumber ? true : false))
    )
  }

  useEffect(() => {
    setActiveContentItem(creatorsContentList.current.children[0])
  }, [])

  return (
    <>
      <Seo title="Home" />
      <HeroSection>
        <TextWrapper>
          <StyledHeader
            as="h2"
            fontSize="70px"
            lineHeight="101px"
            fontWeight="400"
            color="#000"
          >
            Skąd kamienica ma wiedzieć,{" "}
            <TextWithBackground bg="#BEBFBB">
              kiedy jest samotność?
            </TextWithBackground>
          </StyledHeader>
          <StyledButton margin="40px 0 0">Zobacz</StyledButton>
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
      <VideoSection>
        <VideoContainer>
          <Text
            color="#fff"
            fontSize="24px"
            fontWeight="600"
            letterSpacing="0.02em"
            lineHeight="28px"
          >
            numer 9 <br />
            mieszkania 13
          </Text>
          <VideoIframe
            src="https://player.vimeo.com/video/458423947"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></VideoIframe>
        </VideoContainer>
      </VideoSection>
      <ArtBriefSection>
        <Text color={themeContext.colors.grayDarkest}>
          Spektakl online „numer 9 mieszkania 13” to nowatorskie połączenie
          formy teatralnej z animacją filmową. Potrzeby i pragnienia mieszkańców
          jednej kamienicy „stłoczą się” w jednym miejscu. Inspiracja
          surrealizmem, absurdem i groteską pozwoli na humorystyczne spojrzenie
          na tę sytuację. Małżeństwo z wieloletnim stażem, fana gier
          komputerowych czy też obsesyjnie zmieniającą wycieraczki kobietę spod
          siódemki czeka jednak pewna nieoczekiwana zmiana…
        </Text>
        <Text margin="32px 0 0" color={themeContext.colors.grayDarkest}>
          Jak poradzić sobie z tęsknotą za bliskością, dotykiem, bezpośrednią
          rozmową? Czy blok wytrzyma izolację? Czy ściany nie pękną pod naporem
          rozpychających się w jednym miejscu emocji…? I wreszcie – czy
          kamienica, architektoniczna bryła, może mieć uczucia…?
        </Text>
      </ArtBriefSection>
      <DetailsSection>
        <PeopleDetailsWrapper>
          <RealisatorsWrapper>
            <Text fontSize="52px" lineHeight="60px" color="#fff">
              Realizatorzy:
            </Text>
            <Text margin="42px 0 0" color="#fff">
              <ul>
                <li>reżyseria i montaż: Daria Kopiec</li>
                <li>scenariusz: Zuzanna Bojda</li>
                <li>muzyka: Natalia Czekała</li>
                <li>scenografia: Aleksandra Starzyńska</li>
                <li>animacja filmowa: Magdalena Parszewska</li>
                <li>postprodukcja filmowa, efekty specjalne: Jacek Mazur</li>
                <li>reżyseria dźwięku: Agata Chodyra</li>
                <li>współpraca operatorska: Piotr Chodura</li>
                <li>korekcja barwna: Jarosław Sterczewski</li>
              </ul>
            </Text>
          </RealisatorsWrapper>
          <CrewWrapper>
            <Text fontSize="52px" lineHeight="60px" color="#fff">
              Obsada:
            </Text>
            <Text margin="42px 0 0" color="#fff">
              <ul>
                <li>reżyseria i montaż: Daria Kopiec</li>
                <li>scenariusz: Zuzanna Bojda</li>
                <li>muzyka: Natalia Czekała</li>
                <li>scenografia: Aleksandra Starzyńska</li>
                <li>animacja filmowa: Magdalena Parszewska</li>
                <li>postprodukcja filmowa, efekty specjalne: Jacek Mazur</li>
                <li>reżyseria dźwięku: Agata Chodyra</li>
                <li>współpraca operatorska: Piotr Chodura</li>
                <li>korekcja barwna: Jarosław Sterczewski</li>
              </ul>
            </Text>
          </CrewWrapper>
        </PeopleDetailsWrapper>
      </DetailsSection>
      <CharactersWrapper>
        <Text
          fontSize="52px"
          fontWeight="400"
          lineHeight="65px"
          as="h2"
          textAlign="center"
        >
          Postacie
        </Text>
        <CharactersGrid>
          {data.allDatoCmsPostac.nodes.map(postac => (
            <Flex column margin={postac.postacMargin}>
              <Image
                fluid={postac.postacObraz.fluid}
                alt={postac.postacObraz.alt}
              />
              <Text
                fontSize="28px"
                lineHeight="33px"
                textTransform="uppercase"
                margin="20px 0 0 0"
              >
                {postac.postacTytul}
              </Text>
              <Text
                fontSize="19px"
                lineHeight="26px"
                margin="16px 0 0 0"
                color="#363030"
              >
                {postac.postacOpis}
              </Text>
            </Flex>
          ))}
        </CharactersGrid>
      </CharactersWrapper>
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
              <motion.ul layout ref={creatorsContentList}>
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
            >
              Twórcy
            </Text>
            <ul ref={namesList}>
              {data.allDatoCmsTworca.nodes.map((tworca, iterator) => (
                <li
                  className={names[iterator] ? "active" : ""}
                  key={tworca.imieNazwisko}
                  onClick={() => changeSlide(iterator)}
                >
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
                </li>
              ))}
            </ul>
          </NamesWrapper>
        </CreatorsWrapper>
      </CreatorsSection>
      <FooterSection>
        <TeatrColumn>
          <Image
            style={{ maxWidth: "565px", width: "100%", height: "156px" }}
            imgStyle={{ objectFit: "contain", width: "100%", height: "156px" }}
            fluid={data.teatr.childImageSharp.fluid}
          />
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
            imgStyle={{ objectFit: "contain", width: "100%", height: "240px" }}
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
          >
            Nasze social media
          </Text>
          <Flex width="100%" justifyContent="space-between">
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
    allDatoCmsTest {
      nodes {
        testParagraph
      }
    }
    file(name: { eq: "grafika-kamienicy" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

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
          src
        }
      }
    }

    allDatoCmsPostac(sort: { fields: meta___createdAt }) {
      nodes {
        postacTytul
        postacOpis
        postacMargin
        postacObraz {
          alt
          fluid(maxWidth: 416) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
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
