import React, { useContext, useEffect, useRef, useState } from "react"
import Seo from "../components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled, { ThemeContext } from "styled-components"
import { TweenLite, Power3 } from "gsap"

// Components
import Text from "../components/Text/Text"
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
} from "../components/HomeComponents/HomeStyles"
import { Flex } from "../components/Flex/Flex"

const HomePage = ({ data }) => {
  const themeContext = useContext(ThemeContext)
  const namesList = useRef(null)
  const creatorsContentList = useRef(null)

  const [names, setNames] = useState(
    data.allDatoCmsTworca.nodes.map(tworca => false)
  )

  const [activeName, setActiveName] = useState(0)

  const changeSlide = slideNumber => {
    console.log("Change ", slideNumber)
  }

  useEffect(() => {
    TweenLite.to(creatorsContentList.current.children[0], 0, {
      opacity: 1,
    })
    console.log(names)
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
                fontSize="30px"
                lineHeight="36px"
                textTransform="uppercase"
                margin="20px 0 0 0"
              >
                {postac.postacTytul}
              </Text>
              <Text margin="10px 0 0 0">{postac.postacOpis}</Text>
            </Flex>
          ))}
        </CharactersGrid>
      </CharactersWrapper>
      <CreatorsSection>
        <CreatorsWrapper>
          <ContentWrapperList>
            <ul ref={creatorsContentList}>
              {data.allDatoCmsTworca.nodes.map((tworca, iterator) => (
                <li
                  className={names[iterator] ? "active" : ""}
                  key={tworca.imieNazwisko}
                >
                  <Text color="#fff">{tworca.imieNazwisko}</Text>
                  <Text color="#fff">{tworca.tworcaOpis}</Text>
                </li>
              ))}
            </ul>
          </ContentWrapperList>
          <NamesWrapper>
            <Text fontSize="52px" lineHeight="60px" color="#fff">
              Twórcy
            </Text>
            <ul ref={namesList}>
              {data.allDatoCmsTworca.nodes.map((tworca, iterator) => (
                <li
                  className={names[iterator] ? "active" : ""}
                  key={tworca.imieNazwisko}
                  onClick={() => changeSlide(iterator)}
                >
                  <Text color="#fff">{tworca.imieNazwisko}</Text>
                </li>
              ))}
            </ul>
          </NamesWrapper>
        </CreatorsWrapper>
      </CreatorsSection>
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
