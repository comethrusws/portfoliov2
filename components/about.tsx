"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  With a robust background in <span className="font-medium">full-stack development</span> and <span className="font-medium">machine learning engineering</span>, I have honed my skills in creating innovative solutions and driving technological advancements. After earning my degree, I dived into the world of programming and embraced the challenge of solving complex problems.
  I <span className="underline">thrive</span> on the satisfaction that comes with overcoming obstacles and delivering impactful results.
  My core stack includes <span className="font-medium">Python, Next.js and Node.js</span>. I am also proficient in <span className="font-medium">machine learning frameworks</span> like TensorFlow and PyTorch. Continuously expanding my knowledge, I stay abreast of the latest trends and technologies in the field. 
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy exploring new domains and enhancing my skill set. I love diving into the realms of <span className="font-medium">artificial intelligence and data science</span>. Outside the tech world, I find joy in playing video games, reading books, and playing the piano.
</p>
    </motion.section>
  );
}