"use client";
import Link from "next/link";
import {
  FaDownload,
  FaGithub,
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import Location from "./Location";
import Languages from "./Languages";
import Skills from "./Skills";
import Tools from "./Tools";
import Contact from "./Contact";
import { SOCIAL_LINKS, NAME, DESIGNATION } from "@/constants/constants";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
const Introduction = () => {
  return (
    <section className="fixed inset-0 overflow-hidden p-8">
      <div
        className="p-4 h-screen w-1/5 rounded-xl border-white border-opacity-40 bg-white bg-opacity-60 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 text-Snow flex flex-col items-center"
        style={{ overflowX: "hidden" }}
      >
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src="/UmerQadoos.png"
                alt="UmerQadoos portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>

            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>
        <div className="mb-2 mt-4 px-auto   flex flex-col items-center justify-center  text-2xl font-medium !leading-[1.5] sm:text-4xl">
          <h1 className="text-lg font-semibold content-center mt-2">{NAME}</h1>
          <p className="text-sm text-gray-400 content-center items-center object-center text-center">
            {DESIGNATION}
          </p>
        </div>
        <hr className="border-t border-gray-300 w-64 my-4" />
        <div className="overflow-y-auto cursor-all-scroll no-scrollbar overflow-x-hidden max-h-[calc(100vh-14rem)]">
          <div className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
            <Location />
          </div>
          <hr className="border-t border-gray-300 w-64 my-8" />
          <div className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
            <Languages />
          </div>
          <hr className="border-t border-gray-300 w-64 my-8" />
          <div className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
            <Skills />
          </div>
          <hr className="border-t border-gray-300 w-64 my-8" />
          <div className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
            <Tools />
          </div>
          <hr className="border-t border-gray-300 w-64 my-8" />
          <div className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
            <Contact />
          </div>
          <hr className="border-t border-gray-300 w-64 my-8" />
        </div>
        <div className="mb-10 mt-4 px-4 text-2xl flex flex-row justify-center  space-x-14 font-medium !leading-[1.5] sm:text-4xl">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 space-x-4 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/umer-qadoos-28b84a216/"
              target="_blank"
            >
              <FaTwitter />
            </a>

            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/umer-qadoos-28b84a216/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com/MrUmerQadoos"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
          {/* <Link href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer">
            <FaGithub className="text-xl mx-2" />
          </Link>
          <Link href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noreferrer">
            <FaTwitter className="text-xl mx-2" />
          </Link>
          <Link href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl mx-2" />
          </Link> */}
          {/* Add more social links/icons here */}
        </div>
      </div>
    </section>
  );
};
export default Introduction;
