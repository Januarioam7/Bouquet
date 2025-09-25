import React from "react";

const CelebrateSectionGrelha = () => {
  return (
    <div className="flex justify-around items-center relative py-10 top-100 ">
      {/*grelha */}
      <div className="bg-gray-400 mx-2 w-100 h-180 card-gralha1 rounded-3xl relative z-[-10px]"></div>

      <div className="bg-gray-400 mx-2 rounded-3xl w-65 h-85 img-grelha4 sombra-grelha relative top-[-220px]"></div>

      <div className="bg-gray-400 mx-2 rounded-3xl w-65 h-120 img-grelha2 sombra-grelha relative top-[-250px]"></div>

      <div className="bg-gray-400 mx-2 rounded-3xl w-65 h-130 img-grelha3 sombra-grelha relative top-[-400px]"></div>
      <div className="bg-gray-400 mx-2 rounded-3xl w-65 h-110 img-grelha5 sombra-grelha relative top-[-400px]"></div>
    
    </div>
  );
};

export default CelebrateSectionGrelha;
