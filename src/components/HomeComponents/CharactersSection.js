import React from "react"
import Text from "../Text/Text"
import { Flex } from "../Flex/Flex"
import { CharactersWrapper, CharactersGrid } from "./HomeStyles"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Characters = ({ width, mobileBreakpoint }) => {
  const data = useStaticQuery(graphql`
    query CharactersQuery {
      allDatoCmsPostac(sort: { fields: meta___createdAt }) {
        nodes {
          postacTytul
          postacOpis
          postacMargin
          postacMobileMargin
          postacObraz {
            alt
            fluid(maxWidth: 416) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  `)

  return (
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
          <Flex
            key={postac.postacTytul}
            column
            margin={
              width >= mobileBreakpoint
                ? postac.postacMargin
                : postac.postacMobileMargin
            }
          >
            <Img
              fluid={postac.postacObraz.fluid}
              alt={postac.postacObraz.alt}
            />
            <Text
              as="h3"
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
  )
}

export default Characters
