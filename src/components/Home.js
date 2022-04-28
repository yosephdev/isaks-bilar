import React from 'react'
import { PageWrapper } from '../styledComponents'
import { motion } from 'framer-motion'
import { PageVariant, TitleVariant } from '../animations.js'


function Home() {
  return (
    <PageWrapper
      as={motion.div}
      initial="start"
      animate="stop"
      variants={PageVariant}
    >
      <motion.h1 variants={TitleVariant}>Home</motion.h1>     
    </PageWrapper>
  )
}

export default Home