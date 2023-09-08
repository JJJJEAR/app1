import React from "react";

import Header from './context-header'
import { userContext } from './context'
import Content from './context-content'
import Header2 from "./context-header2";
import Content2 from "./content-content2";

export default function App() {
  let [user,setUser] = React.useState()
  return (
    <>
    <div> 
      <userContext.Provider value={[user,setUser]}>
        <Header2/>
        <Content2/>
      </userContext.Provider>
       
    </div>
    </>
  );
}
