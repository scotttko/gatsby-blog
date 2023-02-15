import { Variants } from 'framer-motion'

export const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

export const staggerSlowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
}

export const staggerQuickVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.6 },
    willChange: 'opacity',
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6 },
    willChange: 'opacity',
  },
}

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.6 },
    willChange: 'opacity, transform',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.6 },
    willChange: 'opacity, transform',
  },
}
