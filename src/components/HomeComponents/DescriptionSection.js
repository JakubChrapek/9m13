import React, { useContext } from "react"
import Text from "../Text/Text"
import { ThemeContext } from "styled-components"
import { ArtBriefSection } from "./HomeStyles"

const Description = () => {
  const themeContext = useContext(ThemeContext)
  return (
    <ArtBriefSection>
      <Text color={themeContext.colors.grayDarkest}>
        Spektakl online „numer 9 mieszkania 13” to nowatorskie połączenie formy
        teatralnej z animacją filmową. Potrzeby i pragnienia mieszkańców jednej
        kamienicy „stłoczą się” w jednym miejscu. Inspiracja surrealizmem,
        absurdem i groteską pozwoli na humorystyczne spojrzenie na tę sytuację.
        Małżeństwo z wieloletnim stażem, fana gier komputerowych czy też
        obsesyjnie zmieniającą wycieraczki kobietę spod siódemki czeka jednak
        pewna nieoczekiwana zmiana…
      </Text>
      <Text margin="32px 0 0" color={themeContext.colors.grayDarkest}>
        Jak poradzić sobie z tęsknotą za bliskością, dotykiem, bezpośrednią
        rozmową? Czy blok wytrzyma izolację? Czy ściany nie pękną pod naporem
        rozpychających się w jednym miejscu emocji…? I wreszcie – czy kamienica,
        architektoniczna bryła, może mieć uczucia…?
      </Text>
    </ArtBriefSection>
  )
}

export default Description
