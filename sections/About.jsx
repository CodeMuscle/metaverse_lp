'use client';

import { motion } from "framer-motion";
import { TypingText } from '../components';

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'true', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaverse" textStyles="text-center"  />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new-age phenomenon which in the future will let its users experience physically impossible things in the virtual world. <span className="font-extrabold text-white">The madness of the metaverse</span> today is such that you can explore the metaverse worlds using a <span className="font-extrabold text-white">VR</span> device and you can turn your dreams into reality. Let's <span className="font-extrabold text-white">explore</span> the expliciteness of the metaverse by scrolling down the page.
      </motion.p>

      <motion.img 
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />

    </motion.div>
    <div className="gradient-02 z-0" />
  </section>
);

export default About;
