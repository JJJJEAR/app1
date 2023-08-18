import React from "react";
import { Header, Content, Footer } from "./func-components";
import Calendar from "./class-components";
import Banner from "./banner";
import { Calculator } from "./calculator";

export default function App() {
  return (
    <>
    <div>
    <Header/>
        <p><center><Calendar/></center></p>
        <Content/>
        <center><Calculator /></center>
        <Banner />
    <Footer/>  
    </div>
    </>
  );
}
