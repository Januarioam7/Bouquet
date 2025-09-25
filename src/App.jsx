import React from "react";
import Header from "./Componentes/header";
import Heropg from "./Componentes/Heropg";
import Detalhes from "./Componentes/Detalhes";
import HeroSegundo from "./Componentes/HeroSegundo";
import CelebrateSection from "./Componentes/CelebrateSection";

const App = () => {
  return (
    <div>
      <Header /> {/**1 */}
      <Heropg />
      <Detalhes />
      <HeroSegundo />
      <CelebrateSection />
    </div>
  );
};

export default App;
