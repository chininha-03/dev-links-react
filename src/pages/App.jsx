import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css"

import imgDarkMode from "../img/eudnv.png"
import imgLightMode from "../img/eu.jpeg"


const App = () => {
    const [isLightMode,SetIsLightMode] = useState(false)
    
    const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
    const imgAlt = isLightMode ? "Imagem no modo claro" : "Imagem no modo escuro"
    return(
        <div>
        <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@o_chininha</Profile>
     </div>
    )
};

export default App;
