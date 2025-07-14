"use client";
import Image from "next/image";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Pages from "./Pages";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 35,
    restDelta: 0.001,
  });
  return (
    <>
      <div>
        {[1, 2, 3, 4].map((item,key) => (
          <motion.div
           
          >
            <Pages id={item} key={key} />
          </motion.div>
        ))}
        <motion.div
          className="bg-black dark:bg-white p-2 h-[5px] left-0 right-0 flex items-center justify-center rounded-md bottom-20 fixed"
          style={{ scaleX }}
        />
      </div>
    </>
  );
}
