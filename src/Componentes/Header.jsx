import React from "react";
import Nav from "./Nav";
import NavRedes from "./NavRedes";
import Logo from '/logo.png'

const Header = () => {
  return (
    <div >
       <header className="flex justify-between items-center mx-20 h-20 bg-gray-200">
      
          <img src={Logo} alt="logo" className="w-40 m-0 p-0 h-25 relative top-2"/>
          <Nav />  
          <NavRedes />  

            
       </header>
          <hr className="text-gray-300 m-0 "/>
    </div>
  );
};

export default Header;
