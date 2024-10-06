'use client';

import { motion } from 'framer-motion';
import { TypingText, TeamCard } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { teamMembers } from '../constants';

const People = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Meet the Hexagon Team" textStyles="text-center" />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-[24px] flex flex-col space-y-8 z-10"
      >
        {teamMembers.map((member, index) => (
          <TeamCard
            key={member.name}
            imgUrl={member.imgUrl}
            name={member.name}
            role={member.role}
            linkedinUrl={member.linkedinUrl}
            index={index}
          />
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default People;
