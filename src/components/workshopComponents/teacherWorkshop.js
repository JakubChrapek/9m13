import React from "react"
import Text from "../Text/Text"
import { graphql, useStaticQuery } from "gatsby"
import { TeacherWrapper, ImageWrapper, TeacherBox } from "./workshopStyles"
import { Flex } from "../Flex/Flex"
import Image from "gatsby-image"

const TeacherWorkshop = () => {
  const data = useStaticQuery(graphql`
    query teacherQuery {
      teacher: file(name: { eq: "prowadzaca" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <TeacherWrapper>
      <TeacherBox flex="1 1 45%">
        <ImageWrapper>
          <Image
            fluid={data.teacher.childImageSharp.fluid}
            alt="Magdalena Parszewska w czerwonych spodniach, siedząca na gałęzi i trzymająca laptop na nogach"
          />
        </ImageWrapper>
      </TeacherBox>
      <TeacherBox
        column
        alignItems="center"
        justifyContent="center"
        flex="1 1 55%"
      >
        <Text as="h3">Prowadząca</Text>
        <Text>
          Magdalena Parszewska - animatorka filmowa, absolwentka Państwowej
          Wyższej Szkoły Filmowej, Telewizyjnej i Teatralnej im. Leona Schillera
          w Łodzi (specjalizacja Animacja i Efekty Specjalne), twórczyni studia
          animacji filmowej Animusz Studio. 
        </Text>
      </TeacherBox>
    </TeacherWrapper>
  )
}

export default TeacherWorkshop
