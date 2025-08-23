"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
    children: ReactNode;
    className?: string;
}

const AnimatedTextRight: React.FC<AnimatedTextProps> = ({ children, className }) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { amount: 0.5 }); // 50% terlihat

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`text-3xl ${className || ""}`}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedTextRight;
