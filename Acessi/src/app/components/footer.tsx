import Image from "next/image";

const Footer = () => {
    return (
        <>
            <div className="bg-gray-200 h-[85px] text-xs flex items-center justify-between ">  
                <div className="flex justify-start gap-40 ml-24">
                    <div className="flex flex-col underline">
                        <a href="home">HOME</a>
                        <a href="login">ACESSE A SUA CONTA/ CADASTRE-SE</a>
                        <a href="mapaMetro">MAPA DO METRÔ/ TREM</a>
                    </div>
                    <div className="flex flex-col underline">
                        <a href="chatCeci">FALAR COM A CECI</a>
                        <a href="integrantes">INTEGRANTES</a>
                    </div>
                </div>
                <div className="flex flex-col items-end mr-24">
                    <Image src="/images/logo.png" width={65} height={0}  alt="logo"/>
                    <p id="copy">© Copyright 2025 | Grupo CCR</p>
                </div>
            </div>
        </>
    );
}

export default Footer;