import React from "react";


const Nav = () => {
  return (
    <div className="flex items-center gap-x-10 bg-gray-100 rounded-full px-20 sobra-header h-10"> 
      <navlink to="/Home" className="navheader">Home</navlink>
      <hr className="Hr" />
      <navlink to="/Bouquet" className="navheader">Bouquet</navlink>
      <hr className="Hr" />
      <navlink to="/Aboutus" className="navheader">About us</navlink>
      <hr className="Hr" />
       <navlink to="/ Client Feedback" className="navheader"> Client Feedback</navlink>
    </div>
  
  );
};

export default Nav;