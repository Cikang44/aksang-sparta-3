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
                            <h1 className="font-bold text-5xl max-w-120">Brains vs. Bots: Rethinking Education with AI</h1>
                        </div>
                        <div className="flex items-center justify-center flex-[2] bg-blue-950 text-white rounded-2xl">
                            <Image
                                width={250}
                                height={250}
                                src="/materi2.png"
                                alt="Materi 2"
                                className="w-[250px] h-[250px] object-cover rounded-lg object-right"
                            />
                        </div>
                    </div>
                </AnimatedTextUp>
                <AnimatedTextUp>
                    {/* Bagian tengah */}
                    <div className="m-2 mt-8">
                        <div className="flex flex-col items-start justify-start text-justify" style={{ minHeight: "200px" }}>
                            <p className="font-bold text-3xl" style={{ fontSize: "35px" }}>
                                AI saat ini berkembang dengan sangat pesat dan memberikan beragam
                                dampak, termasuk dalam bidang akademik. Namun, besarnya pengaruh
                                tersebut menuntut penggunaan yang bijak agar tidak menimbulkan penyalahgunaan
                            </p>
                        </div>
                    </div>
                </AnimatedTextUp>
                <div className="m-2 mt-8">
                    <div className="flex flex-col items-start justify-start text-justify" style={{ minHeight: "200px" }}>
                        <AnimatedTextUp>
                            <p className="font-bold text-3xl" style={{ fontSize: "35px" }}>
                                Beberapa dampak negatif penggunaan AI dalam bidang akademik antara lain:
                            </p>
                            <ol className="list-decimal text-3xl ml-10 font-bold">
                                <li>
                                    <p>Plagiarisme,{" "}
                                        <b className='font-normal'>
                                            risiko menyalin karya orang lain tanpa sitasi, terutama jika
                                            hasil AI digunakan secara langsung tanpa verifikasi.
                                        </b>
                                    </p>
                                </li>
                                <li>
                                    <p>Ketergantungan,{" "}
                                        <b className='font-normal'>
                                            pelajar cenderung terlalu bergantung pada AI dalam
                                            mengerjakan tugas, padahal seharusnya mereka yang berperan aktif.
                                        </b>
                                    </p>
                                </li>
                                <li>
                                    <p>Bias Informasi dan Echo Chamber,{" "}
                                        <b className='font-normal'>
                                            AI sering memberikan jawaban sesuai preferensi pengguna.
                                            Akibatnya, pelajar dapat semakin terjebak pada
                                            keyakinan sendiri dan kehilangan pandangan alternatif.
                                        </b>
                                    </p>
                                </li>
                            </ol>
                        </AnimatedTextUp>
                    </div>
                </div>

                {/* Bagian bawah: 2 box sejajar */}
                <div className="m-2 mt-8 flex gap-4 mb-25">
                    <div className="flex-1 rounded-2xl">
                        <AnimatedTextLeft>
                            <div className="flex flex-1 bg-blue-950 h-120 rounded-2xl justify-center text-center items-center">
                                <h1 className='font-bold' style={{ fontSize: "50px" }}>Foto</h1>
                            </div>
                        </AnimatedTextLeft>
                    </div>
                    <div className=" justify-start text-justify items-start" style={{ fontSize: "35px", flex: "1.5" }}>
                        <div className='ml-10'>
                            <AnimatedTextRight>
                                <h1 className='block font-bold text-3xl text-justify'>
                                    Selain itu, dampak AI juga terlihat pada pola pikir pelajar:
                                </h1>
                                <ol className="list-decimal text-3xl ml-10 font-bold">
                                    <li>
                                        <p>Jawaban Seragam,{" "}
                                            <b className='font-normal'>
                                                karena mekanisme LLM, banyak orang
                                                memperoleh jawaban yang mirip sehingga
                                                mengurangi keberagaman ide dan kreativitas.
                                            </b>
                                        </p>
                                    </li>
                                    <li>
                                        <p>Penurunan Literasi dan Kemampuan Berpikir Kritis,{" "}
                                            <b className='font-normal'>
                                                kemudahan memperoleh jawaban instan membuat
                                                pelajar kurang terbiasa mencari, membaca, serta
                                                menyimpulkan sendiri, Hal ini meningkatkan risiko
                                                menerima informasi yang salah tanpa penyaringan kritis.
                                            </b>
                                        </p>
                                    </li>
                                </ol>
                            </AnimatedTextRight>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Page;
