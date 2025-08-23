"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
    children: ReactNode;
    className?: string;
}

const AnimatedTextUp: React.FC<AnimatedTextProps> = ({ children, className }) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { amount: 0.5 }); // animasi saat 50% terlihat

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`text-3xl ${className || ""}`}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedTextUp;
