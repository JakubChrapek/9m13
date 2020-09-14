import React from "react"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const HomePage = ({ data }) => (
  <>
    <Seo title="Home" />
    {data.allDatoCmsTest.nodes.map((test, iterator) => (
      <p key={iterator}>{test.testParagraph}</p>
    ))}
  </>
)

export const query = graphql`
  {
    allDatoCmsTest {
      nodes {
        testParagraph
      }
    }
  }
`

export default HomePage
