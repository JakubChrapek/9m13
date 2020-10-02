import React from "react"
import { HowToWrapper, HowToTextWrapper } from "./workshopStyles"
import Text from "../Text/Text"

const HowToAttend = () => {
  return (
    <HowToWrapper>
      <HowToTextWrapper margin="0 0 107px" alignItems="flex-end">
        <Text fontSize="52px" lineHeight="60px">
          Jak wziąć udział w warsztatach?
        </Text>
        <Text
          margin="40px 0 0"
          fontSize="20px"
          lineHeight="33px"
          letterSpacing="0.05em"
        >
          Napisz maila na adres:{" "}
          <a href="mailto:promocja@wspolczesny.szczecin.pl">
            promocja@wspolczesny.szczecin.pl
          </a>
          <br />
          Decyduje kolejność zgłoszeń.
        </Text>
      </HowToTextWrapper>
      <HowToTextWrapper margin="0 20% 0 0">
        <Text fontSize="52px" lineHeight="60px">
          Co będzie potrzebne do udziału w warsztatach?
        </Text>

        <Text
          margin="40px 0 0"
          fontSize="20px"
          lineHeight="33px"
          letterSpacing="0.05em"
        >
          <ul>
            <li>
              dostęp do Internetu, laptop/tablet lub komputer stacjonarny, za
              pomocą którego połączysz się z prowadzącą
            </li>
            <li>
              smartfon lub tablet, na który pobierzesz bezpłatną aplikację i
              którym będziesz wykonywać zdjęcia
            </li>
            <li>
              darmowa aplikacja Stop Motion Studio, do pobrania{" "}
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.cateater.stopmotionstudio&hl=pl"
              >
                stąd
              </a>
            </li>
            <li>
              wydrukowane materiały (
              <a
                download="9m13 warsztaty"
                href="https://www.datocms-assets.com/34173/1601655469-numer9-mieszkania-13materialy-warsztaty.rar"
              >
                pobierz
              </a>
              ) lub jeśli nie masz możliwości wydruku, przygotuj kilka małych
              przedmiotów codziennego użytku, które chcesz ożywić - kolorowe i
              białe kartki, nożyczki, klej, mazaki lub kredki, taśma klejąca,
              gumki do przyklejania zdjęć na ścianę
            </li>
            <li>
              stanowisko pracy: pudło kartonowe lub niski stolik/ krzesło, do
              którego przytwierdzisz telefon komórkowy, tak by się nie poruszał
              podczas robienia zdjęć
            </li>
            <li>wyobraźnia i dobry humor!</li>
          </ul>
        </Text>
      </HowToTextWrapper>
    </HowToWrapper>
  )
}

export default HowToAttend
