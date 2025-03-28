"use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electronics and Instrumentation</span>, I
        started working as a Firmware Engineer. Then, I realized I have a
        passion for programming and began learning{" "}
        <span className="font-medium">frontend web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        includes{" "}
        <span className="font-medium">
          React, Node.js, Express.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and have some knowledge of Framer
        Motion. I am always eager to learn new technologies. I am currently
        seeking a <span className="font-medium">full-time position</span> as a
        Frontend Engineer or Frontend Developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and spending time with my cute little
        daughter. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        focusing on{" "}
        <span className="font-medium">
          Data Structures and Algorithms (DSA) in JavaScript
        </span>
        .
      </p>
    </motion.section>
  );
}
