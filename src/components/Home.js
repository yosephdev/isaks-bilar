import React from 'react'
import { PageWrapper } from '../styledComponents'
import { motion } from 'framer-motion'
import { PageVariant, TitleVariant, TextVariant } from '../animations.js'

function Home() {
  return (
    <PageWrapper
      as={motion.div}
      initial="start"
      animate="stop"
      variants={PageVariant}
    >
      <motion.h1 variants={TitleVariant}>
        <span>Welcome to</span>
        <br></br>
        <span>Cars for Sale</span>
      </motion.h1>

     <motion.h2 variants={TextVariant}>
        <span>
          We have a wide range of cars for sale, from used cars to new cars.
        </span>
      </motion.h2>

      
    </PageWrapper>
  )
}

export default Home
