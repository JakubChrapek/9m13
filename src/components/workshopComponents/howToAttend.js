import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { HowToWrapper, HowToTextWrapper } from "./workshopStyles"
import Text from "../Text/Text"

const HowToAttend = () => {
  const data = useStaticQuery(graphql`
    query HowToQuery {
      datoCmsWarsztaty {
        tytulCo
        tytulJak
        zachetaDoUdzialu
        listaPotrzebnych {
          tekst
        }
      }
    }
  `)
  return (
    <HowToWrapper>
      <HowToTextWrapper margin="0 0 107px" alignItems="flex-end">
        <Text fontSize="52px" lineHeight="60px">
          {data.datoCmsWarsztaty.tytulJak}
        </Text>
        <Text
          margin="40px 0 0"
          mobileMargin="24px 0 0"
          fontSize="20px"
          lineHeight="33px"
          letterSpacing="0.05em"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsWarsztaty.zachetaDoUdzialu
                .replace("<p>", "")
                .replace("</p>", ""),
            }}
          />
        </Text>
      </HowToTextWrapper>
      <HowToTextWrapper margin="0 20% 0 0">
        <Text fontSize="52px" lineHeight="60px">
          {data.datoCmsWarsztaty.tytulCo}
        </Text>
        <Text
          margin="40px 0 0"
          mobileMargin="24px 0 0"
          fontSize="20px"
          lineHeight="33px"
          letterSpacing="0.05em"
        >
          <ul>
            {data.datoCmsWarsztaty.listaPotrzebnych.map(item => (
              <li
                dangerouslySetInnerHTML={{
                  __html: item.tekst,
                }}
              ></li>
            ))}
          </ul>
        </Text>
      </HowToTextWrapper>
    </HowToWrapper>
  )
}

export default HowToAttend
