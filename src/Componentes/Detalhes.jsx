import React from "react";
import { Search , Phone } from 'lucide-react';

const Detalhes = () => {
  return (

    <div className="mx-20 flex justify-around top-[-70px] relative items-center">

      <div className="bg-gray-100 flex p-1 w-60 rounded-2xl h-24 justify-center items-center flex-col sombra-card">
       
        <span className="flex "><Search className="text-pink-600"/>
        <input type="text" placeholder=" Rosas" className="bg-gray-100 rounded-full h-6 border-2 border-pink-600 "/></span>
        
        <button className=" bnt my-2 rounded-2xl px-2" >Buscar</button>
      </div>

      <div className="flex-col h-24 w-50 bg-gray-100 text-center justify-center items-center rounded-2xl sombra-card">
          <span className="text-gray-600 text-2xl">Cadastrar</span>
          <input type="text" placeholder=" Email" className="bg-gray-100 rounded-full h-6 border-2 border-pink-600"/>
          <button className="bnt my-2 rounded-2xl px-2" >Submeter</button>

      </div>

      <div className="flex-col h-24 w-60 bg-gray-100 text-center justify-center items-center rounded-2xl sombra-card">
       <span className="flex items-center justify-center mt- px-3"><Phone className="text-pink-600 size-15"/>  Contacte-nos para mais informaçoes </span>  
       <button className="bnt my-2 rounded-2xl px-2 relative mt-[-20px]">ligar (+258) </button>
      </div>

      <div className="bg-gray-100  w-100 rounded-2xl h-38 justify-center items-center p-2 text-center sombra-card">
        <span className="text-gray-600 text-2xl">Faça Seu Pedido</span><br />Encomende Com facilidade Simples e
        rápido! Escolha, personalize e finalize seu pedido. Cuidamos da entrega,
        levando a beleza até você. <br />
        <button className="bnt my-2 rounded-2xl px-2">Encomendar</button>
      </div>

    </div>
  );
};

export default Detalhes;



