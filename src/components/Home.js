import React from 'react'
import Cars from '../pages/Cars'
import { motion } from 'framer-motion'
const PageWrapper = motion.div
const PageVariant = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

function Home() {
  return (
    <PageWrapper>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={PageVariant}
      >
        <Cars />
      </motion.div>
    </PageWrapper>
  )
}

export default Home
