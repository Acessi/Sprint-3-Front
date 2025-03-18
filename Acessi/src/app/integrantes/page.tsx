"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function Integrantes() {
  useEffect(() => {
    document.title = "Integrantes";
  }, []);
  
  return (
    <>
      <main>
        <h1 className="text-2xl font-bold text-center mb-6">Integrantes</h1>
          <div className="flex flex-col items-center space-y-6 mb-10">
            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md">
                <Image src="/images/integrantes_barbara.png" width={100} height={0} alt="integrante1" className="w-24 rounded-full mr-4"/>
                <div>
                    <p className="font-bold">Bárbara Bonome Filipus</p>
                    <p><b>RM:</b> 560431 <b>|</b> 1TDSPA-2024</p>
                    <a href="https://linkedin.com/in/barbarabonomef" target="_blank" className="inline-block mt-2">
                        <Image src="/images/linkedin.png" width={100} height={0} alt="LinkedIn" className="h-6"/>
                    </a>
                </div>
            </div>

            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md">
                <Image src="/images/integrantes_beatriz.png" width={100} height={0} alt="integrante2" className="w-24 rounded-full mr-4"/>
                <div>
                    <p className="font-bold">Beatriz Bortolai Lourenço</p>
                    <p><b>RM:</b> 560186 <b>|</b> 1TDSPA-2024</p>
                    <a href="http://linkedin.com/in/beatriz-bortolai" target="_blank" className="inline-block mt-2">
                        <Image src="/images/linkedin.png" width={100} height={0} alt="LinkedIn" className="h-6"/>
                    </a>
                </div>
            </div>

            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md">
                <Image src="/images/integrantes_vinicius.png" width={100} height={0} alt="integrante3" className="w-24 rounded-full mr-4"/>
                <div>
                    <p className="font-bold">Vinicius Lira Ruggeri</p>
                    <p><b>RM:</b> 560593 <b>|</b> 1TDSPA-2024</p>
                    <a href="https://www.linkedin.com/in/viniruggeri" target="_blank" className="inline-block mt-2">
                        <Image src="/images/linkedin.png" width={100} height={0} alt="LinkedIn" className="h-6"/>
                    </a>
                </div>
            </div>

            <a href="https://github.com/Acessi/Sprint-1-Front.git" target="_blank" className="flex items-center bg-slate-100 px-4 py-2 border-2 border-black rounded-full shadow-md hover:bg-gray-300 transition">
                <Image src="/images/github.png" width={100} height={0} alt="GitHub" className="w-6 h-6 mr-2"/>
                <p className="font-bold">GitHub</p>
            </a>
          </div>
      </main>
    </>
  );
}
