"use client"

import Image from 'next/image';
import { useEffect } from 'react';
import MenuTopo from '../components/menuTopo';


export default function ChatCeci() {
  useEffect(() => {
    document.title = "Ajuda";
  }, []);

  return (
    <>
      <main>
      <MenuTopo/>
        <div className="w-[85%] mx-auto mb-10">
          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <Image src="/images/Ceci_S_BG.png" width={100} height={0} alt="IconeCeci" className="w-16 h-16 rounded-full" />
            <p className="text-lg">
              Olá! Eu sou a <b>Ceci</b>, sua Assistente Virtual.
              <br />
              Como posso te ajudar?
            </p>
          </div>

          <div className="h-72"></div>

          <div id="chat" className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow-md">
            <input
              id="chatConversa"
              type="text"
              placeholder="Digite sua mensagem..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-green-500 rounded-full p-2 pl-4 pr-4 text-white">Enviar</button>
            <div id="iconesChat" className="flex space-x-4">
              <a href="#">
                <Image src="/images/microfone.png" width={100} height={0} alt="microfone" className="w-6 h-6" />
              </a>
              <a href="#">
                <Image src="/images/headphone.png" width={100} height={0} alt="headphone" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
