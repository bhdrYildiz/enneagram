import type { Variants } from "framer-motion";


export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  
  export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };
  
  export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };
  
  export const stagger: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18 },
    },
  };

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

export const fadeInCard: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};