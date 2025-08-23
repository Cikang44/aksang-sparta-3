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
                            <h1 className="font-bold text-5xl max-w-120">AI Bias & Hallucination: When Machines Reflect and Imagine</h1>
                        </div>
                        <div className="flex items-center justify-center flex-[2] bg-blue-950 text-white rounded-2xl">
                            <Image
                                width={250}
                                height={250}
                                src="/materi3.png"
                                alt="Materi 3"
                                className="w-[250px] h-[250px] object-cover rounded-lg object-right"
                            />
                        </div>
                    </div>
                </AnimatedTextUp>
                {/* Bagian tengah (TEKS) */}

                <div className="m-2 mt-8">
                    <br></br>
                    <div className="flex flex-col items-start justify-start text-justify" style={{ minHeight: "200px" }}>
                        <AnimatedTextUp>
                            <p className="font-bold text-3xl" style={{ fontSize: "30px" }}>
                                AI bukanlah netral sepenuhnya. Teknologi ini dapat &quot;mewarisi&quot; prasangka manusia (bias) dan bahkan &quot;mengarang&quot; fakta (halusinasi). Kedua fenomena ini membawa risiko serius dalam dunia nyata, dari rekutmen kerja hingga layanan kesehatan.
                            </p>
                            <p className="text-3xl mt-4" style={{ fontSize: "30px" }}>
                                <b>Apa itu Bias AI?</b> AI bisa memperkuat prasangka yang ada dalam data, algoritma, atau bahkan dari pembuatnya.
                            </p>
                        </AnimatedTextUp>
                        <AnimatedTextUp>
                            <p className="font-bold text-3xl mt-8" style={{ fontSize: "30px" }}> Sumber utama bias:</p>
                            <ol className="list-decimal text-3xl ml-10 font-bold pl-4">
                                <li>
                                    <p>Data Bias,{" "}
                                        <b className='font-normal'>
                                            data historis yang tidak seimbang melahirkan diskriminasi.
                                        </b>
                                    </p>
                                </li>
                                <li>
                                    <p>Algorithmic Bias,{" "}
                                        <b className='font-normal'>
                                            aturan algoritma yang tampak netral, tapi diskriminatif.
                                        </b>
                                    </p>
                                </li>
                                <li>
                                    <p>Human Bias,{" "}
                                        <b className='font-normal'>
                                            prasangka tim pengembang ikut tercermin di sistem.
                                        </b>
                                    </p>
                                </li>
                            </ol>
                        </AnimatedTextUp>
                        <div className="text-3xl mt-8" style={{ fontSize: "30px" }}>
                            <AnimatedTextUp>
                                <p>
                                    <b>Contoh nyata:</b> rekrutmen Amazon bias terhadap wanita, algoritma COMPAS  diskrimiatif terhadap ras kulit hitam, algoritma kesehatan meremehkan pasien kulit hitam, Apple Card dituding bias gender dalam kredit.
                                </p>
                            </AnimatedTextUp>
                        </div>
                    </div>
                </div>

                {/* Bagian bawah: 2 box sejajar */}
                <div className="m-2 mt-8 flex gap-4 mb-25">
                    <div className=" justify-start text-justify items-start mr-8" style={{ fontSize: "30px", flex: "3" }}>
                        <AnimatedTextLeft>
                            <p className="text-3xl"><b>Apa itu Halusinasi AI?</b> Model AI bisa menghasilkan jawaban yang terdengar meyakinkan tapi sepenuhnya salah.</p>
                            <p className="font-bold text-3xl mt-8"> Penyebab utama:</p>
                        </AnimatedTextLeft>
                        <AnimatedTextLeft>
                            <ol className="list-decimal text-3xl ml-10">
                                <li>Prediksi probabilistik kata (LLM tidak &quot;mengerti&quot;, hanya menebak).</li>
                                <li>Tidak &quot;grounded&quot; pada realitas.</li>
                                <li>Data pelatihan terbatas atau cacat.</li>
                                <li>Overfitting → hafal data, gagal di kasus baru.</li>
                            </ol>
                        </AnimatedTextLeft>
                        <AnimatedTextLeft>
                            <p className="text-3xl mt-8">
                                <b>Contoh nyata</b>: Pengacara di New York dihukum karena pakai kasus palsu dari ChatGPT, Google Bard salah info tentang teleskop James Webb, dan ChatGPT memberi saran medis berbahaya (bromida).
                            </p>
                        </AnimatedTextLeft>
                    </div>
                    <div className="flex-1 ">
                        <AnimatedTextRight>
                            <div className="rounded-2xl flex flex-1 bg-blue-950 h-120  justify-center text-center items-center">
                                <img
                                    src={'/img8.jpeg'}
                                    className='object-cover w-full p-4'
                                />
                            </div>
                        </AnimatedTextRight>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Page;
