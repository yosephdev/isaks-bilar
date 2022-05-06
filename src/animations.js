export const PageVariant = {
  start: { opacity: 0 },
  stop: {
    opacity: 1,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
}

export const TitleVariant = {
  start: { x: '-100vw' },
  stop: {
    x: 0,
    transition: {
      type: 'spring',
    },
  },
}

export const TextVariant = {
  start: { x: '-100vw' },
  stop: {
    x: 0,
    transition: {
      type: 'spring',
    },
  },
}
