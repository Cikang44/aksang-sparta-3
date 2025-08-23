"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
    children: ReactNode;
    className?: string;
}

const AnimatedTextScale: React.FC<AnimatedTextProps> = ({ children, className }) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            className={`text-3xl font-bold ${className || ""}`}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedTextScale;
