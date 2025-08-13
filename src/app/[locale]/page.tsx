"use client";
import Image from "next/image";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { store } from "../store/store";
import { Provider } from 'react-redux'
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 35,
    restDelta: 0.001,
  });
  return (
    <>
    <Provider store={store}>
      <div className="min-h-screen snap-y snap-mandatory ">
         <About/>
         <Projects/>
         <Skills/>
         <Contact/>
         <motion.div
          className="bg-black dark:bg-white p-2 h-[5px] left-0 right-0 flex items-center justify-center rounded-md bottom-20 fixed"
          style={{ scaleX }}
        />
      </div>
    </Provider>
    </>
  );
}
