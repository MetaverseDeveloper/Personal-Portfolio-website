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
      className="mb-28 lg:px-32 md:px-16  sm:px-8   text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I completed my undergraduate studies at{" "}
        <span className="font-medium">The University of Haripur, Pakistan</span>{" "}
        in June 2024, earning a Bachelor of Science in Software Engineering with
        a commendable CGPA of <span className="font-medium">3+ out of 4</span>.
        My coursework encompassed intensive study in Software Engineering,
        Database Systems, Object-Oriented Programming, and Data Structures. With
        an unwavering passion for innovation, I'm committed to crafting{" "}
        <span className="font-medium">
          fast, secure, and cutting-edge websites
        </span>{" "}
        using React, Next.js, Node.js, and MongoDB as the cornerstone of my tech
        stack. Proficient in TypeScript and Prisma, I continually expand my
        technological horizons. I'm currently in search of an exciting{" "}
        <span className="font-medium">Team-Lead position</span> as a software
        developer at PANAVERS, where I'm also enhancing my proficiency in
        Generative AI to contribute to a dynamic team.
      </p>

      <p>
        When I'm not immersed in the world of coding, you'll find me indulging
        in my passion for video games, enjoying the beauty of nature, or
        cherishing quality time with my family and friends. I thrive on{" "}
        <span className="font-medium">continuous learning</span> and am
        currently exploring the realms of{" "}
        <span className="font-medium">history and philosophy</span>.
        Additionally, I'm on a journey to master the art of playing the guitar.
      </p>
    </motion.section>
  );
}
