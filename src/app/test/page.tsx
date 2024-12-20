import React from "react";
import HeaderComponent from "./components_home/HeaderComponent";
import HeroHeader from "./components_home/HeroComponents";
import ValeursComponents from "./components_home/ValeurComponents";
import SlideAnimation from "./components_home/BandeauxComponent";
import SliderCardComponents from "./components_home/CathegoriesComponent";
import CardCoursComponent from "./components_home/CardCoursComponents";


export default function Home(){
    return(
        <>
        <HeaderComponent />
        <HeroHeader />
        <SlideAnimation />
        <CardCoursComponent />
        <ValeursComponents />
        <SliderCardComponents />
        </>

    );
}