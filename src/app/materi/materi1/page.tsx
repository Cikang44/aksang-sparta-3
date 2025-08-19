import React from 'react';
import MateriBar from '@/components/MateriBar';

const Page = () => {
    return (
        <div>
            <MateriBar />
            <div className="mx-25">
                {/* Bagian atas: 2 kolom pakai flex */}
                <div className="flex gap-2 m-2" style={{ height: "300px" }}>
                    <div className="flex flex-col justify-center items-center flex-[3] text-center bg-blue-950 text-white rounded-2xl">
                        <h1 className="font-bold text-5xl">Judul Materi</h1>
                        <h2 className="text-xl">Sub-Judul</h2>
                    </div>
                    <div className="flex items-center justify-center flex-[2] bg-blue-950 text-white rounded-2xl">
                        <h1 className="font-bold text-5xl">Foto apapun</h1>
                    </div>
                </div>

                {/* Bagian tengah */}
                <div className="m-2 mt-8">
                    <div className="flex flex-col items-center justify-center bg-blue-950 text-white rounded-2xl" style={{ height: "200px" }}>
                        <h1 className="font-bold text-5xl">Penjelasan Lagi</h1>
                    </div>
                </div>

                {/* Bagian bawah: 2 box sejajar */}
                <div className="m-2 mt-8 flex gap-4 mb-100">
                    <div className="flex-1 h-40 rounded-2xl">
                        <div className="flex-1 bg-blue-950 h-100 rounded-2xl">
                            <h1 className='font-bold'>Foto</h1>
                        </div>
                        <div className="mt-8 flex-1 bg-blue-950 h-100 rounded-2xl">
                            <h1>Foto</h1>
                        </div>
                    </div>
                    <div className="flex-1 bg-blue-950 h-208 rounded-2xl" style={{}}></div>
                </div>
            </div>
        </div>
    )
}

export default Page;
