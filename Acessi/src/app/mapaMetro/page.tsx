"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function MapaMetro() {
  useEffect(() => {
    document.title = "Mapa do Metrô";
  }, []);
  
  return (
    <>
      <main>
        <h1 className="text-2xl font-bold text-center mt-6 mb-4"> Mapa Metropolitano do Metrô de São Paulo </h1>

        <div className="flex justify-center">
          <Image src="/images/mapaMetro.jpg" width={1200} height={100} alt="Mapa do Metrô" className="max-w-full h-auto rounded-lg shadow-lg mb-10"/>
        </div>
      </main>
    </>
  );
}
