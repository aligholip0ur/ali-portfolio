"use client";

import Navigatorr from "./Navigator";
import { motion } from "motion/react";
import { useTheme } from "./Theme-context";
export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <motion.header
      className="fixed top-0 left-0 w-screen snap-start  z-50 p-3 backdrop-blur-md bg-gray-200/40 dark:bg-gray-800/30 border border-white/30 dark:border-white/10 shadow-lg rounded-b-2xl "
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration:1, ease: "easeOut" }}
      viewport={{once:true}}
    >
      <Navigatorr isDark={isDark} toggleTheme={toggleTheme} />
    </motion.header>
  );
}
