"use client"

import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  
  return (
    <>
      <main>
        <div className="w-[85%] mx-auto mb-10">
          <h2 className="font-semibold text-3xl mb-5">Olá Passageiro,</h2>
          <h3 className="text-xl font-medium mt-2 text-center bg-slate-100 rounded-lg shadow-md">ÚLTIMAS NOTIFICAÇÕES</h3>
          <h4 className="text-gray-500 mt-1 text-right text-sm">atualizado em 20 de Março | 16:50</h4>

          <div className="space-y-4 mt-4">
            <div className="flex items-start bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="flex justify-center items-center text-2xl font-bold text-white mr-4 bg-purple-600 rounded-full w-10 h-10">5</p>
              <div className="flex-1">
                <p className="text-lg font-bold"><b>Linha 5 - Lilás | Manutenção no Elevador</b></p>
                <p className="text-gray-700">CPTM informa manutenção no elevador da Estação Moema entre 12h-13h no dia 09/11 (hoje).</p>
              </div>
              <p className="text-sm text-gray-500">08:47</p>
            </div>

            <div className="flex items-start bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="flex justify-center items-center text-2xl font-bold text-white mr-4 bg-emerald-500 rounded-full w-10 h-10">9</p>
              <div className="flex-1">
                <p className="text-lg font-bold"><b>Linha 9 - Esmeralda | Manutenção</b></p>
                <p className="text-gray-700">Comunicamos que, devido a manutenção programada, a Linha 9 encerrará suas atividades às 20 horas.</p>
              </div>
              <p className="text-sm text-gray-500">10:24</p>
            </div>

            <div className="flex items-start bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="flex justify-center items-center text-2xl font-bold text-white mr-4 bg-yellow-400 rounded-full w-10 h-10">4</p>
              <div className="flex-1">
                <p className="text-lg font-bold"><b>Linha 4 - Amarela | Lentidão</b></p>
                <p className="text-gray-700">A Linha 4 está enfrentando atrasos devido a um congestionamento na via. O tempo de espera pode ser maior.</p>
              </div>
              <p className="text-sm text-gray-500">12:10</p>
            </div>

            <div className="flex items-start bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="flex justify-center items-center text-2xl font-bold text-white mr-4 bg-purple-600 rounded-full w-10 h-10">5</p>
              <div className="flex-1">
                <p className="text-lg font-bold"><b>Linha 5 - Lilás | Manutenção</b></p>
                <p className="text-gray-700">CPTM informa manutenção nas estação Alto da Boa Vista entre 22h-23h | 17/11 (domingo).</p>
              </div>
              <p className="text-sm text-gray-500">13:45</p>
            </div>

            <div className="flex items-start bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="flex justify-center items-center text-2xl font-bold text-white mr-4 bg-stone-400 rounded-full w-10 h-10">8</p>
              <div className="flex-1">
                <p className="text-lg font-bold"><b>Linha 8 - Diamante | Alta ocupação</b></p>
                <p className="text-gray-700">CPTM informa lentidão na Linha 8 | Diamante.</p>
              </div>
              <p className="text-sm text-gray-500">16:36</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
