import React from "react";

const Heropg = () => {
  return (
    <section
      className="bg-cover bg-center h-[600px] flex items-center justify-center text-white p-4 mx-20 mt-4 rounded-lg heroImg"
    >
      <div className="text-gray-800 text-center p-10 /*bg-black*/  border-2 border-white bg-opacity-40 backdrop-blur-[1px] rounded-lg max-w-2xl mx-auto  relative top-[-40px] ">
      
        <p className="text-2xl md:text-5xl font-bold mb-4 text-pink-600 ">
          Bem-vindo(a) à <span className="text-gradient-florize">𝓕𝓵𝓸𝓻𝓲𝔃𝓮!</span>
        </p>

        {/* <h1 className="text-[18px] items-center ml-30 ">𝓕𝓵𝓸𝓻𝓲𝔃𝓮</h1> */}

    
        <p className="text-2xl md:text-[16px] leading-relaxed  font-bold">
          "Descubra a arte dos buquês na Florize! Explore nossa coleção
          exclusiva de flores frescas e arranjos encantadores, prontos para
          levar cor e alegria à sua vida ou a quem você ama. Sua dose diária de
          natureza e beleza está a um clique de distância."
        </p>
       
        <button className="mt-8 px-6 py-2 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition duration-300 mr-4">
          Explore Nossos Buquês
        </button>
        <button className="mt-8 px-6 py-2 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition duration-300 ">
          Contacte nós
        </button>
      </div>
    </section>
  );
};

export default Heropg;
