"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();// ambil path aktif

    return (
        <nav className="shadow-md" style={{ backgroundColor: "var(--navbar-bg)", color: "var(navbar-fg)" }}>
            <div className="container mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link href="/" className={`nav-link font-bold px-3 py-1 ${pathname === "/" ? "link-position-navbar" : ""
                    }`} style={{ color: "var(navbar-fg)" }}>
                    Proxy
                </Link>

                {/* Menu */}
                <ul className="hidden md:flex gap-12 font-bold">
                    <li className="nav-link">
                        <Link
                            href="/materi/materi1"
                            className={`transition duration-200 px-3 py-1 ${pathname.startsWith("/materi") ? "link-position-navbar" : ""
                                }`}
                        >
                            Materi
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            href="/game"
                            className={`nav-link transition duration-200 px-3 py-1 ${pathname === "/game" ? "link-position-navbar" : ""
                                }`}
                        >
                            Game
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            href="/chatbot"
                            className={`nav-link transition duration-200 px-3 py-1 ${pathname === "/chatbot" ? "link-position-navbar" : ""
                                }`}
                        >
                            ChatBot
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link
                            href="/inovasi"
                            className={`nav-link transition duration-200 px-3 py-1 ${pathname === "/inovasi" ? "link-position-navbar" : ""
                                }`}
                        >
                            Inovasi
                        </Link>
                    </li>
                </ul>

                {/* Button */}
                <button className="md:hidden px-3 py-2 rounded bg-blue-500 hover:bg-blue-600">
                    ☰
                </button>
            </div>
        </nav >
    );
}
