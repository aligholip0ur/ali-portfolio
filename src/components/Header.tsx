"use client";

import { useState, useEffect } from "react";
import Navigatorr from "./Navigator";
import { motion } from "motion/react";
export default function Header() {
  const [isscrolled, setIsscrolled] = useState<boolean>(false);
  useEffect(() => {
    const handelscrolling = () => {
      setIsscrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handelscrolling);
    return () => window.removeEventListener("scroll", handelscrolling);
  }, []);
  return (
    <motion.header
      className={`sticky p-1 rounded-lg top-0 z-50 border-b transition-all duration-300 ${
        isscrolled
          ? "bg-white/30 backdrop-blur-md shadow-sm border-gray-300"
          : "bg-white"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <Navigatorr />
    </motion.header>
  );
}
