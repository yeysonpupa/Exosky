'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className="h-screen overflow-hidden pt-20">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col justify-center items-center h-full"
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          Exosky!
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full h-full flex items-center justify-center"
      >
        <div className="absolute w-full h-full hero-gradient rounded-tl-[140px] rounded-tr-[140px] z-[0] -top-[30px]" />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full h-full object-cover rounded-tl-[140px] rounded-tr-[140px] z-10 relative"
        />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-20 mt-6 gap-10">
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#F91E48] rounded-[32px] gap-[12px]">
            <img
              src="/vrpano.svg"
              alt="vrpano"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-semibold text-[16px] text-white">
              Explore the space
            </span>
          </button>
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#F91E48] rounded-[32px] gap-[12px]">
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-semibold text-[16px] text-white">
              VR Experience
            </span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
