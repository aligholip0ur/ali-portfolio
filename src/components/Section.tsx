
import { motion } from "motion/react";
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
    <section id={id} className={`snap-start  min-h-[calc(100vh-85px)]  ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y:0  }}
        transition={{ duration: 0.9, ease: "easeInOut", delay }}
        viewport={{ amount }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
