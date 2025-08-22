"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
    { name: "Materi 1", path: "/materi/materi1" },
    { name: "Materi 2", path: "/materi/materi2" },
    { name: "Materi 3", path: "/materi/materi3" },
    { name: "Materi 4", path: "/materi/materi4" },
];

const MateriBar = () => {
    const pathname = usePathname();

    return (
        <div style={{ fontFamily: "var(--font-family)" }}>
            <Navbar />
            <div className="relative flex justify-center gap-40 p-10 font-bold">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`materi-style relative px-2 font-bold"
                            }`}
                    >
                        {item.name}
                        {pathname === item.path && (
                            <motion.div
                                layoutId="underline"
                                className="absolute left-0 right-0 -bottom-1 h-[3px] rounded"
                                style={{ backgroundColor: "var(--materi-underline)" }}
                                transition={{ type: "spring", stiffness: 500, damping: 50 }}
                            />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MateriBar;
