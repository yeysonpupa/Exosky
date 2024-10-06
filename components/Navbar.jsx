'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'; // Importa el componente Link
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        HEXAGON
      </h2>
      <div className="flex items-center gap-8 ml-auto">
        <Link href="/">
          <h3 className="font-semibold text-[18px] leading-[24px] text-white cursor-pointer">
            Exosky!
          </h3>
        </Link>
        <Link href="/challenge">
          <h3 className="font-semibold text-[18px] leading-[24px] text-white cursor-pointer">
            Challenge
          </h3>
        </Link>
        <Link href="/team">
          <h3 className="font-semibold text-[18px] leading-[24px] text-white cursor-pointer">
            Team
          </h3>
        </Link>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
