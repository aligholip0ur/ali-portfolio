
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { ReactNode } from "react";

interface AnimatedSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

const Section = ({
  id,
  children,
  className = "",
  delay = 0.3,
  amount = 0.6,
}: AnimatedSectionProps) => {
  return (
    <AnimatePresence mode="popLayout">
    <section id={id} className={`snap-start  min-h-[calc(100vh-85px)]  ${className}`}>
      <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{  amount: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
    </AnimatePresence>
  );
};

export default Section;
