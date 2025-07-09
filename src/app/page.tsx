"use client";
import Image from "next/image";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Pages from "@/components/Pages";
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
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Pages id={item} />
          </motion.div>
        ))}
        <motion.div
          className="bg-black p-2 rounded-md bottom-20 sticky"
          style={{ scaleX }}
        />
      </div>
    </>
  );
}
