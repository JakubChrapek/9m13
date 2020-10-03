import React from "react"
import Text from "../Text/Text"
import { graphql, useStaticQuery } from "gatsby"
import {
  TeacherWrapper,
  TeacherImageWrapper,
  TeacherBox,
} from "./workshopStyles"
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
      <TeacherBox margin="0 107px 0 0" flex="1 1 50%">
        <TeacherImageWrapper>
          <Image
            fluid={data.teacher.childImageSharp.fluid}
            alt="Magdalena Parszewska w czerwonych spodniach, siedząca na gałęzi i trzymająca laptop na nogach"
          />
        </TeacherImageWrapper>
      </TeacherBox>
      <TeacherBox
        column
        alignItems="flex-start"
        justifyContent="center"
        flex="1 1 50%"
        alignSelf="flex-end"
        margin="0 0 80px"
      >
        <Text as="h3">Prowadząca</Text>
        <Text margin="24px 0 0">
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
