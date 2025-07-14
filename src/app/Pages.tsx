"use client"
import useParallax from "@/hooks/MotionValue"
import { motion, useScroll } from "motion/react"
import { useRef } from "react"
import About from "../components/About"
import Projects from "../components/Projects"
export default function Pages({ id }: { id: number }) {
    return (
        <>
            <section>
                <div id={id.toString()} className={`md:snap-start h-screen scroll-mt-20`}>
                    <motion.div
                      >
                        {id === 1 ? <About /> : id === 2 ? <Projects /> : ""}
                    </motion.div>
                </div>
            </section>
        </>
    )

}