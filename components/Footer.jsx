'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Uncover the Exosky!
        </h4>
      </div>
      <div className="flex items-center justify-left flex-wrap gap-5">
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#F91E48] rounded-[32px] gap-[12px]">
          <img
            src="/vrpano.svg"
            alt="vrpano"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-semibold text-[16px] text-white">
            Explore universe
          </span>
        </button>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#F91E48] rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-semibold text-[16px] text-white">
            VR experience
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            HEXAGON
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 Hexagon. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
