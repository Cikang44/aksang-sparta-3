import React from 'react';
import Navbar from '@/components/Navbar';
import BlurryDot from '@/components/BlurDot';
import AnimatedTextScale from '@/components/animatedTextScale';

const Homepage = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <AnimatedTextScale>
                <BlurryDot size={300} color="bg-blue-500" position="top-1" />
            </AnimatedTextScale>
            <AnimatedTextScale>
                <BlurryDot size={300} color="bg-pink-500" position="bottom-1 right-1" />
            </AnimatedTextScale>
            <div className="flex items-center justify-between" style={{ marginTop: "10vh", paddingLeft: '25vh', paddingRight: '25vh' }}>
                {/* Kiri: Teks */}
                <div className="flex flex-col items-start text-justify" style={{ maxWidth: "60%" }}>
                    <h1 className="font-bold" style={{ fontSize: "50px" }}>MAKE</h1>
                    <h1 className="font-bold" style={{ fontSize: "50px" }}>Melek AI Kritis dan Etis</h1>
                    <h2>
                        MAKE (Melek AI Kritis dan Etis) adalah acara angkatan Kelompok 3 yang
                        bertujuan mengajak peserta lebih memahami perkembangan AI serta dampaknya.
                        Melalui diskusi ringan dan interaktif, acara ini menekankan pentingnya bersikap kritis
                        sekaligus bijak dalam menggunakan AI agar tetap etis dan bermanfaat bagi semua.
                    </h2>
                </div>

                {/* Kanan: Lingkaran */}
                <div
                    style={{
                        width: "450px",
                        height: "450px",
                        overflow: "hidden",
                        flexShrink: 0, // biar tidak dipaksa mengecil oleh flexbox
                    }}
                >
                    <img
                        src="/Proxy_Color.png"
                        alt="gambar"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain"
                        }} />
                </div>
            </div>
        </div>
    )
}

export default Homepage
