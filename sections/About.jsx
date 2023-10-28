'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About GG" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Galactic Guardians</span> is the new branch of Planet Side’s history  – DLC allows you to feel a  {' '}
        <span className="font-extrabold text-white">
          new atmosphere
        </span>{' '}
        of adventure. Test your might in the most {' '}
        <span className="font-extrabold text-white">wild planet</span> that was attacked by the most deadly creatures. Protect innocent lives oppressed by the grief of the {' '}
        <span className="font-extrabold text-white">plague</span>. Find out the {' '}
        <span className="font-extrabold text-white">secret</span> of the forgotten planet - The Grey Rock. Check more by scrolling down.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
