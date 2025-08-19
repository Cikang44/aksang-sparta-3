"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="shadow-md" style={{ backgroundColor: "var(--navbar-bg)", color: "var(navbar-fg)" }}>
            <div className="container mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold nav-link" style={{ color: "var(navbar-fg)" }}>
                    Proxy
                </Link>

                {/* Menu */}
                <ul className="hidden md:flex gap-12 font-bold">
                    <li>
                        <Link
                            href="#about"
                            className="nav-link transition duration-200"
                        >
                            Materi
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#Game"
                            className="nav-link transition duration-200"
                        >
                            Game
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#Chatbot"
                            className="nav-link transition duration-200"
                        >
                            ChatBot
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#Inovasi"
                            className="nav-link transition duration-200"
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
        </nav>
    );
}
