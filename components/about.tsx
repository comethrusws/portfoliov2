"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  With a robust background in <span className="font-medium">full-stack development</span> and <span className="font-medium">machine learning engineering</span>, I have honed my skills in creating innovative solutions and driving technological advancements. After earning my degree, I dived into the world of programming and embraced the challenge of solving complex problems.
  <span className="italic">My favorite part of programming</span> is the journey from identifying an issue to implementing a creative and efficient solution. I <span className="underline">thrive</span> on the satisfaction that comes with overcoming obstacles and delivering impactful results.
  My core stack includes <span className="font-medium">React, Node.js, and Python</span>. I am also proficient in <span className="font-medium">machine learning frameworks</span> like TensorFlow and PyTorch, and have hands-on experience with cloud platforms such as AWS and Azure. Continuously expanding my knowledge, I stay abreast of the latest trends and technologies in the field. Currently, I am actively seeking a <span className="font-medium">full-time position</span> that allows me to leverage my expertise and contribute to innovative projects.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy exploring new domains and enhancing my skill set. I love diving into the realms of <span className="font-medium">artificial intelligence and data science</span>. Outside the tech world, I find joy in playing video games, watching movies, and embarking on adventures with my dog. Additionally, I have a keen interest in <span className="font-medium">philosophy and history</span>, and am currently learning how to play the guitar.
</p>
    </motion.section>
  );
}