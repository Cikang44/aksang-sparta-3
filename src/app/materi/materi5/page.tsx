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
        {/* Bagian atas: 2 kolom pakai flex */}
        <AnimatedTextUp>
          <div className="flex gap-2 m-2 bg-blue-950 rounded-2xl" style={{ height: "300px" }}>

            <div className="flex flex-col justify-center items-center flex-[3] text-start">
              <h1 className="font-bold text-5xl max-w-120">Generative AI Images: Between Patterns and Creativity</h1>
            </div>
            <div className="flex items-center justify-center flex-[2] bg-blue-950 text-white rounded-2xl">
              <Image
                width={250}
                height={250}
                src="/materi5.jpg"
                alt="Materi 5"
                className="w-[250px] h-[250px] object-cover rounded-lg object-right"
              />
            </div>
          </div>
        </AnimatedTextUp>
        {/* Bagian tengah (TEKS) */}
        <div className="m-2 mt-8">
          <br></br>
          <AnimatedTextUp>
            <div className="flex flex-col items-start justify-start text-justify">
              <p className="font-bold text-3xl" style={{ fontSize: "30px" }}>
                Generative AI, khususnya model text-to-image, mampu mengubah teks menjadi gambar baru. Sebagian besar menggunakan model difusi yang belajar dari pola dalam jutaan gambar di internet. Meski berguna, ada risiko: penyalahgunaan untuk hoaks, politik, konten berbahaya, hingga masalah hak cipta karena data latihnya sering pakai karya berhak cipta.
              </p>
            </div>
          </AnimatedTextUp>
          <div className="flex flex-col items-start justify-start text-justify" style={{ minHeight: "200px" }}>
            <AnimatedTextUp>
              <p className="font-bold text-3xl mt-8" style={{ fontSize: "30px" }}> Pola vs Kreativitas</p>
              <p>AI sebenarnya mesin pengenal pola, bukan pencipta ide orisinal.</p>
              <ul className="text-3xl ml-10 font-bold pl-4">
                <li>AI: hanya mereproduksi pola yang sudah ada.</li>
                <li>Manusia: melahirkan kreativitas dari emosi, intuisi, dan ide baru.</li>
              </ul>
              <p>Jika ruang digital dipenuhi hasil AI, potensi kreativitas murni manusia bisa terhambat.</p>
            </AnimatedTextUp>
            <div className="text-3xl mt-8" style={{ fontSize: "30px" }}>
              <AnimatedTextUp>
                <b>Fenomena “Model Collapse”</b>
                <p>Model AI kadang belajar dari output AI lain di internet, sehingga hasilnya makin bias dan menurun kualitasnya.</p>
                <p>Contoh: tren <b>“Ghibli Image”</b> membuat banyak model terbiasa menghasilkan gambar bernuansa kuning meski tidak diminta.</p>
              </AnimatedTextUp>
            </div>
          </div>
        </div>

        {/* Bagian bawah: 2 box sejajar */}
        <div className="m-2 mt-8 flex gap-4 mb-25">
          <div className="flex-1 rounded-2xl gap-">
            <AnimatedTextRight>
              <div className="flex flex-1 bg-blue-950 h-70  justify-center text-center items-center">
                <img
                  src={'/img11.jpeg'}
                  className='object-cover w-full p-4'
                />
              </div>
            </AnimatedTextRight>
            <AnimatedTextRight>
              <div className="flex flex-1 bg-blue-950 h-70 mt-6  justify-center text-center items-center">
                <img
                  src={'/img12.jpeg'}
                  className='object-cover w-full p-4'
                />
              </div>
            </AnimatedTextRight>
          </div>
          <div className="justify-start text-justify items-start mr-8" style={{ fontSize: "30px", flex: "3" }}>
            <AnimatedTextLeft>
              <b>Dampak pada Industri</b>
              <p>Generative AI mengguncang dunia seni digital.</p>
              <ol className="list-decimal text-3xl ml-10 mt-10">
                <li>Cepat & murah, sehingga perusahaan lebih tergoda pakai AI ketimbang pekerjakan seniman.</li>
                <li>Kuantitas jadi lebih dihargai ketimbang kualitas.</li>
                <li>Berisiko mengancam mata pencaharian seniman manusia, meski kreativitas sejati tidak bisa digantikan AI.</li>
              </ol>
            </AnimatedTextLeft>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Page;
