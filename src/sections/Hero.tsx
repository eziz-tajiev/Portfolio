"use client";

import memoji from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StartIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
export const HeroSection = () => {
  return (
    <section id="home" className="py-32 md:py-48 relative z-0 overflow-x-clip">
      <div className="relative z-10 container">
        <div className="flex flex-col items-center">
          <Image
            src={memoji}
            className="size-[100px] relative top-1"
            alt="Person with laptop."
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="relative bg-green-500 size-2.5 rounded-full">
              <motion.div
                className="absolute bg-green-500 inset-0 rounded-full"
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  delay: 0.3,
                }}
              />
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Eziz Tajiyev
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I'm a beginner React developer, ready to take an internship, learn
            new technologies, and adapt to the team.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link
            href="/#projects"
            aria-label="Go to project section."
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Explore My Work</span>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: easeInOut,
              }}
            >
              <ArrowDown className="size-4" />
            </motion.div>
          </Link>
          <Link href="/#contact" aria-label="Go to contact section.">
            <motion.div
              whileHover="hover"
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl"
            >
              <motion.span
                variants={{
                  hover: { rotate: [0, 20, -10, 0] },
                }}
                transition={{
                  duration: 0.7,
                  ease: easeInOut,
                }}
              >
                👋🏽
              </motion.span>
              <span className="font-semibold">Let's Connect</span>
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />

        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        <HeroOrbit size={430} rotation={-14} duration={30} spin={3}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} duration={32} spin={3}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} duration={34} isRotate={false}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} duration={36} spin={3}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} duration={38} spin={6}>
          <StartIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} duration={40} spin={6}>
          <StartIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} duration={42} isRotate={false}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} duration={44} spin={3}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} duration={46} isRotate={false}>
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} duration={48} spin={6}>
          <StartIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
    </section>
  );
};
