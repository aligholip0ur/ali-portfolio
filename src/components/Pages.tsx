"use client"
import useParallax from "@/hooks/MotionValue"
import { motion, useScroll } from "motion/react"
import { useRef } from "react"

export default function Pages({id}:{id:number})
{
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)
        return (
        <>
        <section>
         <div ref={ref} id={id.toString()}  className={`${id===1?'bg-blue-300':id===2?'bg-red-300':id===3?'bg-yellow-300':id===4?'bg-green-300':""} h-screen text-8xl text-center flex items-center justify-center font-bold myscroll` }>
         {id}
         </div>
        </section>
        </>
    )

}