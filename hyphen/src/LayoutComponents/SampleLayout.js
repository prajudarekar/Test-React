import GridLayout from "react-grid-layout";
import "./SampleLayoutStyle.css";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
const rlayout = [
  { i: "a", x: 0, y: 0, w: 1, h: 1 },
  { i: "b", x: 1, y: 1, w: 1, h: 1 }
];


function SampleLayout() {
    function checklayout(){
        console.log("layout changed");
    }
return(
<GridLayout
        layout={rlayout}
        cols={5}
        rowHeight={100}
        width={10}
        onLayoutChange={checklayout}
      >
         <div className="chartcardlayout card" key="a">
        <p >Test chart</p>
        </div>
        
        <div className="chartcardlayout card" key="b">
        <p >Test chartjhjh</p>
        </div>
        </GridLayout>
)
}
export default SampleLayout;