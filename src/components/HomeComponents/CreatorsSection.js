import React, { useState, useRef } from "react"
import Text from "../Text/Text"
import Slide from "../Slide/Slide"
import { motion, AnimateSharedLayout } from "framer-motion"
import {
  CreatorsSection,
  CreatorsWrapper,
  NamesWrapper,
  ContentWrapperList,
} from "./HomeStyles"
import { graphql, useStaticQuery } from "gatsby"

const Creators = ({ width, mobileBreakpoint }) => {
  const data = useStaticQuery(graphql`
    query CreatorsQuery {
      allDatoCmsTworca(sort: { fields: meta___createdAt }) {
        nodes {
          imieNazwisko
          tworcaOpis
        }
      }
    }
  `)

  const namesList = useRef(null)
  const creatorsContentList = useRef(null)
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
    } else {
      setNames(names.map(_ => true))
    }
  }

  return (
    <CreatorsSection
      id="tworcy"
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
              {data.allDatoCmsTworca.nodes.map((tworca, iterator) =>
                width >= mobileBreakpoint ? (
                  names[iterator] && (
                    <Slide
                      creator={tworca.imieNazwisko}
                      key={tworca.imieNazwisko}
                      description={tworca.tworcaOpis}
                    />
                  )
                ) : (
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
  )
}

export default Creators
