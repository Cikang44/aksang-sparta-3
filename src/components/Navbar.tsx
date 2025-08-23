"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import path from "path";
import Image from "next/image";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Materi", path: "/materi/materi1" },
        { name: "Game", path: "/game" },
        { name: "ChatBot", path: "/chatbot" },
    ];

    return (
        <nav
            className="shadow-md"
            style={{ backgroundColor: "var(--navbar-bg)", color: "var(--navbar-fg)" }}
        >
            <div className="container mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link href="/" className="px-10 py-1 cursor-pointer">
                    <Image
                        src="/Proxy_Color.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="cursor-pointer"
                    />
                </Link>

                {/* Menu */}
                <ul className="hidden md:flex gap-6 font-bold relative">
                    {navItems.map((item) => {
                        const isActive =
                            pathname.startsWith("/materi") && item.path.includes("/materi")
                                ? true
                                : pathname === item.path;

                        return (
                            <li key={item.path} className="relative nav-link">
                                <Link
                                    href={item.path}
                                    className="relative z-10 px-4 py-2 rounded-md"
                                >
                                    {item.name}
                                </Link>

                                {isActive && (
                                    <motion.div
                                        layoutId="activeBackground"
                                        className="absolute inset-0 rounded-md" style={{ backgroundColor: "var(--navbar-bg-actived)" }}
                                        transition={{ type: "spring", stiffness: 600, damping: 50 }}
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Button mobile */}
                <button className="md:hidden px-3 py-2 rounded bg-blue-500 hover:bg-blue-600">
                    ☰
                </button>
            </div>
        </nav>
    );
}
