import React from "react";
import Msg from "./Msg";
import Logomsg from "/logoMsg.png";

const Heropg = () => {
  return (
    <section className="bg-cover h-[600px] flex items-center justify-center text-white p-4 mx-20 mt-2 rounded-lg heroImg">
      <div className="text-gray-100  text-center p-10 border-2 border-white  bg-opacity-40 backdrop-blur-[0.9px] rounded-lg max-w-2xl mx-auto  relative top-[-40px] ">
        <p className=" md:text-5xl mb-2 text-center justify-center mx-15">
          <img src={Logomsg} alt="imagem logo junto da msg" className="h-40"/>
        </p>

        <p className=" md:text-[16px] leading-relaxed  font-bold text-gray-100">
          <Msg />
        </p>

        <button className="heropg-bnt">Explore Nossos Buquês</button>
        <button className="heropg-bnt ">Contacte nós</button>
      </div>
    </section>
  );
};

export default Heropg;
