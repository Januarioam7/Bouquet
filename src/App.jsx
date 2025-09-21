import React from "react";
import Header from "./Componentes/header";
import Heropg from "./Componentes/Heropg";
import Detalhes from "./Componentes/Detalhes";

const App = () => {
  return (
    <div>
      <Header /> {/**1 */}
      <Heropg />
      <Detalhes />
    </div>
  );
};

export default App;
