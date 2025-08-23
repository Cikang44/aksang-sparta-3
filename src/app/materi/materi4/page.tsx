import React from 'react';
import MateriBar from '@/components/MateriBar';

const Page = () => {
    return (
        <div>
            <MateriBar />
            <div className="mx-25">
                {/* Bagian atas: 2 kolom pakai flex */}
                <div className="flex gap-2 m-2 bg-blue-950 rounded-2xl" style={{ height: "300px" }}>
                    <div className="flex flex-col justify-center items-center flex-[3] text-start">
                        <h1 className="font-bold text-5xl max-w-120">Data Literacy: An Ability to Digest Information</h1>
                    </div>
                    <div className="flex items-center justify-center flex-[2] bg-blue-950 text-white rounded-2xl">
                        <img
                            src="/materi3.png"
                            alt="Materi 3"
                            className="w-[250px] h-[250px] object-cover rounded-lg object-right"
                        />
                    </div>
                </div>
                {/* Bagian tengah (TEKS) */}
                <div className="m-2 mt-8">
                    <br></br>
                    <div className="flex flex-col items-start justify-start text-justify">
                        <p className="font-bold text-3xl" style={{ fontSize: "30px" }}>
                            Literasi data adalah kemampuan untuk membaca, menginterpretasikan, dan mengkomunikasikan data sehingga dapat menjadi informasi yang berguna. <br /> <br />
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-start text-justify">
                        <p className="text-3xl mt-4" style={{ fontSize: "30px" }}>
                            <b>Masalah + Literasi Data = Solusi<br /></b>
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-start text-justify" style={{ minHeight: "200px" }}>
                        <p className="font-bold text-3xl mt-8" style={{ fontSize: "30px" }}> Esensi Literasi Data:</p>
                        <ol className="list-decimal text-3xl ml-10 font-bold pl-4">
                            <li>
                                <p>Read,{" "}
                                    <b className='font-normal'>
                                        memahami bentuk dan isi data yang ada.
                                    </b>
                                </p>
                            </li>
                            <li>
                                <p>Interpret,{" "}
                                    <b className='font-normal'>
                                        menarik makna atau insight dari data.
                                    </b>
                                </p>
                            </li>
                            <li>
                                <p>Communicate,{" "}
                                    <b className='font-normal'>
                                        menyampaikan interpretasi agar dimengerti orang lain.
                                    </b>
                                </p>
                            </li>
                        </ol>
                        <div className="text-3xl mt-8" style={{ fontSize: "30px" }}>
                            <p>
                                <b>Kompetensi</b> yang diharapkan adalah dapat <b>mengartikulasi</b> masalah yang a, <b>memahami</b> sumber, <b>memastikan </b>
                                relevansi, <b>menginterpretasikan</b> wawasan baru, mengambil <b>keputusan</b>, dan kemudian <b>mengkomunikasikannya</b>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bagian bawah: 2 box sejajar */}
                <div className="m-2 mt-8 flex gap-4 mb-25">
                    <div className=" justify-start text-justify items-start mr-8" style={{ fontSize: "30px", flex: "3" }}>
                        <p> Sebagai manusia pasti memiliki data. Data digital adalah yang sering kita temui seperti, </p>
                        <ol className="list-decimal text-3xl ml-10">
                            <li><b>Riwayat Digital</b>: klik situs web, penggunaan aplikasi, belanja online, data lokasi, dan  interaksi media sosial.</li>
                            <li><b>Rekam medis</b>: data kesehatan pasien yang terekam sepanjang hidup.</li>
                            <li><b>Data citra dan video</b>: hasil rekaman kamera, tangkapan layar, video CCTV.</li>
                            <li><b>Data otomotif</b>: data pengemudi, perilaku berkendara, dan data pabrik kendaraan</li>
                        </ol>
                        <p className="text-3xl mt-8">
                            <b>Q</b>: Mengapa dibutuhkan literasi data? <br />
                            <b>A</b>: Diperlukan untuk meningkatkan kualitas layanan, mempercepat pengambilan keputusan, meraih keunggulan kompetitif, membuat prediksi akurat, dan mengelola risiko.
                        </p>
                    </div>
                    <div className="flex-1 rounded-2xl">
                        <div className="flex flex-1 bg-blue-950 h-120  justify-center text-center items-center">
                            <h1 className='font-bold' style={{ fontSize: "50px" }}>Foto</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page;
