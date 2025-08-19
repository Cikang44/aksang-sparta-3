import React from 'react';
import MateriBar from '@/components/MateriBar';

const page = () => {
    return (
        <div>
            <MateriBar />
            <div className='mx-25'>
                <div className='grid grid-cols-5 grid-rows-2 gap-2 m-2' style={{ height: "300px" }}>
                    <div className='col-span-3 row-span-2 flex flex-col items-center justify-center bg-blue-950'>
                        <h1 className="font-bold " style={{ fontSize: "50px" }}>Judul Materi</h1>
                        <h2>Sub-Judul</h2>
                    </div>
                    <div className='col-span-2 row-span-2 bg-blue-950 flex items-center justify-center'>
                        <h1 className="font-bold text-center" style={{ fontSize: "50px" }}>Foto apapun</h1>
                    </div>
                </div>
                <div className='m-2 mt-8'>
                    <div className='bg-blue-950' style={{ height: "200px", maxWidth: "100%", minWidth: "30%" }}>
                        <h1>Penjelasan Lagi</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div >
    )
}

export default page