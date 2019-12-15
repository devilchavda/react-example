import React from "react";
import ParamsExample from "./component/childexample.js";
import    NestingExample from "./component/pathurlexample.js"; 
import AuthExample from "./component/redirectauth.js";
import ExtraPractices from "./component//extrapractices.js";
import CustomLinkExample from "./component/customlink.js";
export default function App() {
  return (
    <div>
        {/* <ParamsExample/> */}
        {/* <NestingExample/> */}
        <AuthExample/>
        {/* <ExtraPractices props={props}/> */}
        <CustomLinkExample/>
    </div>
   
  );
}
