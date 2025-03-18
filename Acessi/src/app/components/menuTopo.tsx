"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MenuTopo = () => {
    const caminhoAtual = usePathname();
    const [rotaAtiva, setRotaAtiva] = useState("");

    useEffect(() => {
        setRotaAtiva(caminhoAtual);
    }, [caminhoAtual]);

    return (
        <div className="flex items-center justify-center mt-3 mb-3">
            <a href="/home">
                <button 
                    className={`bg-gray-200 pt-2 pb-2 pr-3 pl-3 rounded-full m-1 ${rotaAtiva === "/home" ? "border-2 border-black" : ""}`}
                >
                    HOME
                </button>
            </a>

            <a href="/mapaMetro">
                <button 
                    className={`bg-gray-200 pt-2 pb-2 pr-3 pl-3 rounded-full m-1 ${rotaAtiva === "/mapaMetro" ? "border-2 border-black" : ""}`}
                >
                    MAPA DO METRÔ/TREM
                </button>
            </a>

            <a href="/chatCeci">
                <button 
                    className={`pt-2 pb-2 pr-3 pl-3 rounded-full m-1 ${rotaAtiva === "/chatCeci" ? "bg-orange-500 text-white border-2 border-orange-500" : "bg-gray-200 text-black border-2 border-orange-500"}`}
                >
                    FALAR COM A CECI
                </button>
            </a>

            <a href="/integrantes">
                <button 
                    className={`bg-gray-200 pt-2 pb-2 pr-3 pl-3 rounded-full m-1 ${rotaAtiva === "/integrantes" ? "border-2 border-black" : ""}`}
                >
                    INTEGRANTES
                </button>
            </a>
        </div>
    );
};

export default MenuTopo;
