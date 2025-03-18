"use client"

import React, { useEffect } from 'react';
import Footer from "../components/footer";
import MenuTopoColaborador from '../components/menuTopoColaborador';
import HeaderColaborador from '../components/headerColaborador';

export default function CriarNotificacao() {
  useEffect(() => {
    document.title = "Criar Notificação";
  }, []);
  
  return (
    <>
      <main>
      <MenuTopoColaborador/>
      <form method="post" encType="multipart/form-data" className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md mt-8 mb-10">
      <p className="text-xl font-bold text-gray-700 text-center mb-4">Preencha os dados abaixo para criar uma Notificação</p>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mt-2 mb-2">Título da Notificação</label>
          <input type="text" name="txtNome" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        </div>

        <div>
            <label className="block text-gray-700 font-medium mt-2 mb-2">Linha</label>
            <select 
                name="linha" 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
                <option value="">Selecione uma linha</option>
                <option value="linha4">Linha 4 - Amarela</option>
                <option value="linha5">Linha 5 - Lilás</option>
                <option value="linha8">Linha 8 - Diamante</option>
                <option value="linha9">Linha 9 - Esmeralda</option>
            </select>
        </div>
      
        <div>
        <label className="block text-gray-700 font-medium mb-2">Conteúdo</label>
        <textarea 
            name="txtConteudo" 
            id="txtConteudo" 
            rows={5} 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
        />
        </div>


        <div className="text-center mt-4">
          <a href="home" className="inline-block px-6 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition">Enviar Notificação</a>
        </div>
      </div>
      </form>
      </main>
    </>
  );
}
