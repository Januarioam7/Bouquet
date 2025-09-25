import React from "react";
import { Truck,Rose } from "lucide-react";
import MsgCelebrateSection from "./MsgCelebrateSection";
import CelebrateSectionGrelha from "./CelebrateSectionGrelha";

const CelebrateSection = () => {
  return (
    <div>
      <div className="mx-20 my-5 celebrateImg  h-100 rounded-lg">
        {/* <img src={Imgcelebrate} alt="imagem-Celebrate" className='w-full rounded-2xl' /> */}

        <MsgCelebrateSection />
        <CelebrateSectionGrelha />

        <div className="mt-25 pl-85 ">
          <div className=" text-center items-center w-190 justify-center bnt h-20  py-1 mt-20 rounded-r-full">
            <h1 className="text-5xl font-bold text-violet-300 py-3 ">
              Por Que Comprar de Nós?
            </h1>
          </div>

          <div className=" bnt flex text-center items-center w-175 justify-center h-20 px-6 py-3 mt-5 rounded-r-full">
          
            <p className="text-2xl ">
              Entregamos emoção e qualidade inigualável em cada arranjo.
            </p>
            
          </div>
          
          <div className="bnt flex text-end items-center w-160 justify-center h-15  py-3 mt-5 rounded-r-full">
          
            <p className="text-2xl">
            Nossos Princípios Florescem em Cada Buquê
            </p><Rose />
          </div>  
        </div>
        <div className="bnt flex text-center items-center w-210 justify-center h-15  py-3 mt-5 rounded-r-full">
           <p className="text-2xl">Delivery, levando a emoção do presente até você.</p>
           <Truck className="relative  w-8 h-8 ml-10" /> 
        </div>   

        
      </div>
    </div>
  );
};

export default CelebrateSection;
