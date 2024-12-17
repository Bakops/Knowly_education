import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import HeroHeader from "./components/HeroComponents";
import ValeursComponents from "./components/ValeurComponents";
import SlideAnimation from "./components/BandeauxComponent";

export default function Home(){
    return(
        <>
        <HeaderComponent />
        <HeroHeader />
        <SlideAnimation />
        <ValeursComponents />
        </>

    );
}