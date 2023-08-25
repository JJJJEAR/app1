import React from "react";

import Banner from "./banner";
import { Calculator } from "./calculator";
import { EventData2 } from './event-data';
import RefsFunc from './refs-func'

export default function App() {
  return (
    <>
    <div> 
        <Banner />
        <center><Calculator /></center>
        <EventData2/>      
        <RefsFunc/>
    </div>
    </>
  );
}
