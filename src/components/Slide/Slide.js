import React from "react"
import { motion } from "framer-motion"
import Text from "../Text/Text"

const Slide = ({ creator, description }) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ origin: "0 0" }}
    >
      <Text
        color="#fff"
        textTransform="uppercase"
        fontWeight="600"
        margin="0 0 24px"
      >
        {creator}
      </Text>

      <Text color="#fff">{description}</Text>
    </motion.li>
  )
}

export default Slide
