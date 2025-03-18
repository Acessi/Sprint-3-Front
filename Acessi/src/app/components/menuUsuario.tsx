const MenuUsuario = () => {
    return(
    <>
        <div className="flex justify-center gap-5 mt-10 mb-10">
            <button className="bg-red-700 hover:bg-red-900 text-white pt-2 pb-2 pr-4 pl-4 rounded-full pla">Colaborador</button>
            <button className="bg-green-500 hover:bg-green-700 text-white pt-2 pb-2 pr-4 pl-4 rounded-full">Passageiro</button>
        </div>
    </>
    );
}

export default MenuUsuario;