import React from "react"
import Seo from "../components/Seo"
import Text from "../components/Text/Text"
import { Link } from "gatsby"
import Wrapper from "../components/Wrapper/Wrapper"

const NotFoundPage = () => (
  <Wrapper>
    <Seo title="Nie znaleziono" />
    <Text>Strony nie znaleziono</Text>

    <Link to="/">Wróć do strony głównej &rarr;</Link>
  </Wrapper>
)

export default NotFoundPage
