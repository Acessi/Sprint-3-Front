"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function Cadastro() {
  useEffect(() => {
    document.title = "Cadastro";
  }, []);
  
  return (
    <>
      <main>
      <form method="post" encType="multipart/form-data" className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md mt-8 mb-10">
      <p className="text-xl font-bold text-gray-700 text-center mb-4">Atualize os dados do seu cadastro</p>
      
      <div className="mt-6 flex flex-col items-center justify-center">
        <label htmlFor="carregarImagem" className="text-gray-700 font-medium text-xl">Foto de Perfil</label>
        
        <div className="w-24 h-24 rounded-full overflow-hidden mt-2 mb-5">
          <Image src="/images/default-user.png" width={100} height={0} alt="Foto de Perfil" className="w-full h-full object-cover"></Image>
        </div>

        <input type="file" name="carregarImagem" id="carregarImagem" accept="image/*" className="mt-3 p-2 border border-gray-300 bg-white rounded-md cursor-pointer w-full text-sm"/>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="txtNome" className="block text-gray-700 font-medium mt-2 mb-2">Nome Completo</label>
          <input type="text" name="txtNome" id="txtNome" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        </div>

        <div>
          <label htmlFor="txtNomeUsuario" className="block text-gray-700 font-medium mb-2">E-mail</label>
          <input type="text" name="txtNomeUsuario" id="txtNomeUsuario" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Digite sua nova senha</label>
          <input type="password" name="txtCriarSenha" id="txtCriarSenha" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Confirme a sua nova senha</label>
          <input type="password" name="txtConfirmarSenha" id="txtConfirmarSenha" className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
        </div>

        <div className="text-center mt-4">
          <a href="home" className="inline-block px-6 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition">Atualizar Cadastro</a>
        </div>
      </div>
      </form>
      </main>
    </>
  );
}
