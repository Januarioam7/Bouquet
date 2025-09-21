import React from "react";


const Nav = () => {
  return (
    <div className="flex items-center gap-x-10 pr-30 "> 
      <navlink to="/Home" className="text-[12px] font-sans  tracking-[2px]  hover:text-blue-200 transition duration-300">Home</navlink>
      <hr className="w-px h-3 bg-gray-400" />
      <navlink to="/Bouquet" className="text-[12px] font-sans tracking-[2px]  hover:text-blue-200 transition duration-300">Bouquet</navlink>
      <hr className="w-px h-3 bg-gray-400" />
      <navlink to="/Aboutus" className="text-[12px] font-sans tracking-[2px]  hover:text-blue-200 transition duration-300 flex">About us</navlink>
    </div>
  );
};

export default Nav;