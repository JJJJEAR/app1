import React from "react";

import Header from './context-header'
import { userContext } from './context'

export default function App() {
  return (
    <>
    <div> 
      <userContext.Provider value={'tom Jerry'}>
        <Header/>
      </userContext.Provider>
       
    </div>
    </>
  );
}
