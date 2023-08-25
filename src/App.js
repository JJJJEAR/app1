import React from "react";

import Banner from "./banner";
import { Calculator } from "./calculator";
import { EventData2 } from './event-data';
import RefsFunc from './refs-func'
import RefsArray from './refs-array'
import MessageBox from './state-func'

export default function App() {
  return (
    <>
    <div> 
        <Banner />
        <center><Calculator /></center>
        <EventData2/>      
        <RefsFunc/>
        <RefsArray/>
        <MessageBox/>
    </div>
    </>
  );
}
