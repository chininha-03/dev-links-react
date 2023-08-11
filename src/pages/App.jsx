import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/link";

import "./App.css"

import imgDarkMode from "../img/eudnv.png"
import imgLightMode from "../img/eu.jpeg"


const App = () => {
    const [isLightMode,SetIsLightMode] = useState(false)
    
    const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
    const imgAlt = isLightMode ? "Imagem no modo claro" : "Imagem no modo escuro"
    return(
        <div id="container">
        <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@o_chininha</Profile>
        <Switch></Switch>
        <div id="links">
            <ul>
                <Links link={"https://github.com"}>GitHub</Links>
                <Links link={"#"}>Instagram</Links>
                <Links link={"#"}>Portifólio</Links>
                <Links link={"#"}>Projetos</Links>

            </ul>
        </div>
     </div>
    )
};

export default App;
