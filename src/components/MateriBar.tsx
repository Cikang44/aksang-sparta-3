"use client";
import React, { use } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MateriBar = () => {
    const pathname = usePathname();
    return (
        <div style={{ fontFamily: "var(--font-family)" }}>
            <Navbar />
            <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10  mx-auto px-6 py-10'>
                <div className='text-center font-bold-style'>
                    <Link href='/materi/materi1' className={`text-center font-bold ${pathname === "/materi/materi1" ? "link-position-materi" : ""
                        }`}>
                        Materi 1
                    </Link>
                </div>
                <div className='text-center font-bold materi-style'>
                    <Link href='/materi/materi2' className={`text-center font-bold ${pathname === "/materi/materi2" ? "link-position-materi" : ""
                        }`}>
                        Materi 2
                    </Link>
                </div>
                <div className='text-center font-bold materi-style'>
                    <Link href='/materi/materi3' className={`text-center font-bold ${pathname === "/materi/materi3" ? "link-position-materi" : ""
                        }`}>
                        Materi 3
                    </Link>
                </div>
                <div className='text-center font-bold materi-style'>
                    <Link href='/materi/materi4' className={`text-center font-bold ${pathname === "/materi/materi4" ? "link-position-materi" : ""
                        }`}>
                        Materi 4
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default MateriBar