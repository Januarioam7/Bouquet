import React from "react";
import Nav from "./Nav";
const Header = () => {
  return (
    <div>
      <header className="m-2 bg-pink-600  /* bg-pink-600*/ sticky text-white font-bold top-0  z-[20] mx-20 flex wfull items-center justify-between rounded-[9px]">
        <h1 className="text-[18px] items-center ml-30 ">𝓕𝓵𝓸𝓻𝓲𝔃𝓮</h1>
        <Nav /> {/*componente*/}
      </header>
    </div>
  );
};

export default Header;
