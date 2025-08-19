import React from 'react'
import Navbar from '@/components/Navbar'

const Homepage = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className="flex items-center justify-between" style={{ marginTop: "10vh", marginLeft: '25vh', marginRight: '25vh' }}>
                {/* Kiri: Teks */}
                <div className="flex flex-col items-start" style={{ maxWidth: "50%" }}>
                    <h1 className="font-bold" style={{ fontSize: "50px" }}>Merah Putih : One For All</h1>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad maiores
                        laudantium nobis inventore! Nam, libero? Minima amet sed, dignissimos
                        eos eius magnam nihil? Dolorem reiciendis eos facilis quo nobis animi!
                    </h2>
                </div>

                {/* Kanan: Lingkaran */}
                <div
                    style={{
                        width: "450px",
                        height: "450px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        flexShrink: 0, // biar tidak dipaksa mengecil oleh flexbox
                    }}
                >
                    <img
                        src="/betabukagudang.jpg"
                        alt="gambar"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }} />
                </div>
            </div>
        </div>
    )
}

export default Homepage
