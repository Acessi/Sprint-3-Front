"use client"

import { useEffect } from 'react';

export default function EsqueciSenha() {
  useEffect(() => {
    document.title = "Recuperar Senha";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto bg-slate-50 p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold text-gray-800">Esqueceu sua senha?</h1>
          <h2 className="text-gray-600">
            Enviaremos um e-mail com instruções <br />
            de como redefinir a sua senha! <br /><br />
            Digite o e-mail cadastrado:
          </h2>
          <div className="mb-4">
            <input
              type="email"
              name="txtEmail"
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <a
              href="login"
              className="block bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
              Enviar
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
