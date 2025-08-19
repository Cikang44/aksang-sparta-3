import React, { use } from 'react'
import Navbar from '@/components/Navbar'

const MateriBar = () => {
    return (
        <div style={{ fontFamily: "var(--font-family)" }}>
            <Navbar />
            <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10  mx-auto px-6 py-10'>
                <div className='text-center font-bold'>Materi 1</div>
                <div className='text-center font-bold'>Materi 2</div>
                <div className='text-center font-bold'>Materi 3</div>
                <div className='text-center font-bold'>Materi 4</div>
            </div>
        </div >
    )
}

export default MateriBar