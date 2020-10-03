import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Text from "../Text/Text"
import { Flex } from "../Flex/Flex"
import {
  FooterSection,
  TeatrColumn,
  MinisterstwoColumn,
  SocialColumn,
  LogoImage,
} from "../HomeComponents/HomeStyles"

import fb from "../../assets/images/footerImages/facebook.svg"
import ig from "../../assets/images/footerImages/instagram.svg"
import yt from "../../assets/images/footerImages/youtube.svg"
import styled from "styled-components"

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.black};
    outline-offset: 4px;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      ministerstwo: file(name: { eq: "ministerstwo-kultury-dofinansowanie" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      teatr: file(name: { eq: "teatr-współczesny-w-szczecinie" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <FooterSection>
      <TeatrColumn>
        <LogoImage fluid={data.teatr.childImageSharp.fluid} />
        <Text
          fontSize="22px"
          lineHeight="24px"
          fontWeight="600"
          letterSpacing="1.3px"
          textTransform="uppercase"
          zIndex="1"
          as="h3"
        >
          Teatr współczesny w Szczecinie
        </Text>
        <Text
          fontSize="13px"
          lineHeight="17px"
          fontWeight="600"
          letterSpacing="1.3px"
          textTransform="uppercase"
          margin="-25px 0 0 150px"
          zIndex="1"
        >
          Wały Chrobrego 3<br />
          70-500 Szczecin
        </Text>
        <Text
          fontSize="13px"
          lineHeight="17px"
          fontWeight="600"
          letterSpacing="1.3px"
          textTransform="uppercase"
          margin="20px 0 0 150px"
        >
          teatr@wspolczesny.szczecin.pl
          <br />
          www.wspolczesny.szczecin.pl
        </Text>
        <Text
          fontSize="13px"
          lineHeight="17px"
          fontWeight="600"
          letterSpacing="1.3px"
          textTransform="uppercase"
          margin="20px 0 0 150px"
        >
          Stronę stworzyli: Kryptonum Studio & Dobra Treść
        </Text>
      </TeatrColumn>
      <MinisterstwoColumn>
        <Image
          imgStyle={{
            objectFit: "contain",
            width: "256px",
            height: "256px",
          }}
          fluid={data.ministerstwo.childImageSharp.fluid}
        />
      </MinisterstwoColumn>
      <SocialColumn>
        <Text
          fontSize="13px"
          lineHeight="17px"
          fontWeight="600"
          letterSpacing="1.3px"
          textTransform="uppercase"
          margin="0 0 35px"
          as="h3"
        >
          Nasze social media
        </Text>
        <Flex width="156px" justifyContent="space-between">
          <StyledLink href="https://www.facebook.com/teatrwspolczesnywszczecinie/">
            <img src={fb} alt="Facebook icon" />
          </StyledLink>
          <StyledLink href="https://www.instagram.com/wspolczesny_szczecin/">
            <img src={ig} alt="Instagram icon" />
          </StyledLink>
          <StyledLink href="https://www.youtube.com/channel/UCS6NK77RoyqxMUx7np0M6Gg">
            <img src={yt} alt="Youtube icon" />
          </StyledLink>
        </Flex>
      </SocialColumn>
    </FooterSection>
  )
}

export default Footer
