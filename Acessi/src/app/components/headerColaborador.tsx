import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const HeaderColaborador = () => {

    const [menuAberto, setMenuAberto] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () =>{
        setMenuAberto(!menuAberto);
    }

    useEffect(() => {
        const handleClickFora = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuAberto(false);
            }
        };

        if (menuAberto) {
            document.addEventListener('mousedown', handleClickFora);
        } else {
            document.removeEventListener('mousedown', handleClickFora);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickFora);
        };
    }, [menuAberto]);

    return (
        <>
            <div className="bg-red-700 h-[75px] flex items-center justify-between">
                <div className="ml-24">
                    <button className="text-white" aria-label="Menu" onClick={toggleMenu}>
                    <span className="block w-7 h-0.5 bg-white mb-1 rounded"></span>
                    <span className="block w-7 h-0.5 bg-white mb-1 rounded"></span>
                    <span className="block w-7 h-0.5 bg-white rounded"></span>
                    </button>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2">
                    <a href='home'><Image src="/images/logo.png" width={80} height={0} alt="Logo" /></a>
                </div>
                <div className="text-white text-sm mr-24 flex items-center">
                    <a href="atualizarCadastro"><Image src="/images/usuario_branco.png" width={30} height={0} alt="perfil"></Image></a>
                </div>
            </div>
            <div ref={menuRef} className={`absolute top-0 left-0 w-[300px] h-full bg-gray-300 border-2 border-gray-900 
                    ${menuAberto ? 'block' : 'hidden'} transition-all ease-in-out duration-300`}
                    style={{ zIndex: 999 }}
                >
                    <div className="flex justify-end p-6">
                        <button 
                            className="text-white text-3xl"
                            onClick={toggleMenu}
                        >
                        </button>
                    </div>

                    <div className="flex flex-col place-items-end mr-3">
                        <div className="flex items-center gap-20">
                            <Image src="/images/usuario.png" width={30} height={0} alt="Ícone para acessar conta" className='relative top-3'/>
                            <a href="#" className="text-lg hover:text-gray-700">Acesse a sua conta</a>
                        </div>
                        <a href="#" className="text-base text-gray-600 hover:text-gray-500">ou cadastre-se grátis</a>
                            <div className="w-full border-t border-gray-700 my-2"></div>
                        <div className="flex items-center gap-[180px]">
                            <Image src="/images/home.png" width={30} height={0} alt="Ícone da página inicial"></Image>
                            <a href="#" className="text-lg hover:text-gray-700">Home</a>
                        </div>    
                            <div className="w-full border-t border-gray-700 my-2"></div> 
                        <div className="flex items-center gap-[57px]">
                            <Image src="/images/mapa.png" width={30} height={0} alt="Ícone de mapa do metrô e trem"></Image>
                            <a href="#" className="text-lg hover:text-gray-700">Mapa do Metrô/Trem</a>
                        </div>
                            <div className="w-full border-t border-gray-700 my-2"></div>
                        <div className="flex items-center gap-[100px]">    
                            <Image src="/images/falar.png" width={30} height={0} alt="Ícone para pedir ajuda à Ceci"></Image>
                            <a href="#" className="text-lg hover:text-gray-700">Falar com a Ceci</a>
                        </div>
                            <div className="w-full border-t border-gray-700 my-2"></div>
                        <div className="flex items-center gap-[100px]">    
                            <Image src="/images/notificar.png" width={30} height={0} alt="Ícone para criar notificação"></Image>
                            <a href="#" className="text-lg hover:text-gray-700">Criar Notificação</a>
                        </div>
                            <div className="w-full border-t border-gray-700 my-2"></div>
                        <div className="flex items-center gap-[140px]">
                            <Image src="/images/usuario.png" width={30} height={0} alt="Ícone de integrantes da equipe"></Image>
                            <a href="#" className="text-lg hover:text-gray-700">Integrantes</a>
                        </div>
                            <div className="w-full border-t border-gray-700 my-2"></div>
                        <div className="flex items-center gap-[130px]">
                            <Image src="/images/deslogar.png" width={30} height={0} alt="Ícone para desconectar"></Image>
                            <a href="#" className="text-lg hover:text-gray-700">Desconectar</a>
                        </div>
                            <div className="w-full border-t border-gray-700 my-2"></div>
                    </div>
            </div>            
        </>
    )
}

export default HeaderColaborador;