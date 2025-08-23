import React from 'react';
import MateriBar from '@/components/MateriBar';
import AnimatedTextUp from '@/components/animatedTextUp';
import AnimatedTextLeft from '@/components/animatedTextLeft';
import AnimatedTextRight from '@/components/animatedTextRight';
import Image from 'next/image';

const Page = () => {
    return (
        <div>
            <MateriBar />
            <div className="px-25 mx-auto max-w-[1400px]">
                <AnimatedTextUp>
                    {/* Bagian atas: 2 kolom pakai flex */}
                    <div className="flex gap-2 m-2 bg-blue-950 rounded-2xl" style={{ height: "300px" }}>
                        <div className="flex flex-col justify-center items-center flex-[3] text-start">
                            <h1 className="font-bold text-5xl max-w-100">The Adventures Start Here</h1>
                        </div>
                        <div className="flex items-center justify-center flex-[2] bg-blue-950 text-white rounded-2xl">
                            <Image
                                width={250}
                                height={250}
                                src="/materi1.png"
                                alt="Materi 1"
                                className="w-[250px] h-[250px] object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </AnimatedTextUp>

                <AnimatedTextUp>
                    {/* Bagian tengah */}
                    <div className="m-2 mt-8">
                        <div className="flex flex-col items-start justify-start text-justify" style={{ height: "200px" }}>
                            <p className="font-bold text-3xl">AI atau Kecerdasan Aritifisal serangkaian teknologi yang memungkinkan komputer melakukan
                                fungsi komplek seperti kemampuan melihat, menganalisi data, membuat rekomendasi dan sebagainya. karena banyaknya besarnya dampak AI dalam kehidupan.
                                Dalam penggunaan AI penting adanya sebuah etika sebagai batasan, yaitu Etika AI.
                            </p>
                        </div>
                    </div>
                </AnimatedTextUp>

                {/* Bagian bawah: 2 box sejajar */}

                <div className="m-2 mt-8 flex gap-4 mb-25">
                    <div className="flex-1 rounded-2xl">
                        <AnimatedTextLeft>
                            <div className="flex flex-1 bg-blue-950 h-100 rounded-2xl justify-center text-center items-center">
                                <img
                                    src={'/img1.jpeg'}
                                    className='object-cover w-full p-4'
                                />
                            </div>
                        </AnimatedTextLeft>
                        <AnimatedTextLeft>
                            <div className="mt-8 flex flex-1 bg-blue-950 h-100 rounded-2xl justify-center text-center items-center">
                                <img
                                    src={'/img2.jpeg'}
                                    className='object-cover w-full p-4'
                                />
                            </div>
                        </AnimatedTextLeft>
                    </div>
                    <div className="flex-1 h-208 justify-start text-start items-start" style={{}}>
                        <div className='ml-25'>
                            <AnimatedTextRight>
                                <h1 className='block font-bold text-3xl text-justify mb-10'>3 Prinsip Belmont dalam Pengembangan AI</h1>
                                <div className='mb-15'>
                                    <h1 className='block font-bold text-3xl text-justify'>Respect for Persons</h1>
                                    <h1 className='block text-3xl text-justify'>Setiap individu punya hak penuh atas dirinya—AI tidak boleh memperlakukan manusia hanya sebagai &quot;objek&quot; semata.</h1>
                                </div>
                                <div className='mb-15'>
                                    <h1 className='block font-bold text-3xl text-justify'>Beneficence</h1>
                                    <h1 className='block text-3xl text-justify'>AI harus membawa kebaikan: keputusan dan penggunaannya diarahkan demi kesejahteraan orang lain.</h1>
                                </div>
                                <div className='mb-15'>
                                    <h1 className='block font-bold text-3xl text-justify'>Justice</h1>
                                    <h1 className='block text-3xl text-justify'>Manfaat dan beban dari AI harus dibagi secara adil—tidak boleh hanya menguntungkan sebagian pihak.</h1>
                                </div>
                            </AnimatedTextRight>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Page;
