"use client"

import React, { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);
  
  return (
    <>
      <main>
        <form method="post" encType="multipart/form-data" className="w-full max-w-sm mx-auto bg-slate-50 p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="txtUsuario" className="block text-gray-700 font-bold mb-2">Usuário</label>
                <input 
                    type="text" 
                    name="txtUsuario"  
                    required 
                    placeholder="Digite seu usuário"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="txtSenha" className="block text-gray-700 font-bold mb-2">Senha</label>
                <input 
                    type="password" 
                    name="txtSenha" 
                    placeholder="Digite sua senha"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </form>
            <div className="flex justify-center gap-5 mt-10">
                <a href="cadastro" className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400">Cadastrar</a>
                <a href="home" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700">Entrar</a>
            </div>
            <div className="mt-3 text-center mb-8">
                <a href="esqueciSenha" className="text-sm text-blue-500 hover:underline">Esqueci minha senha...</a>
            </div>
      </main>
    </>
  );
}
