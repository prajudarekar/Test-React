import GridLayout from "react-grid-layout";
import React, { useState,useEffect } from "react";
import "./ChartStyle.css";

//import { WidthProvider, Responsive } from "react-grid-layout";
//const ResponsiveReactGridLayout = WidthProvider(Responsive);
function HyphenGridLayout() {
  let [clayout,setClayout]=useState([]);
  let [cdata,setCdata]=useState([]);

    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 1, y: 0, w: 1, h: 2 },
      { i: "b", x: 9, y: 0, w: 1, h: 2 }
    ];

    useEffect(()=>{
        fetch("http://localhost:304/hyphenview/layout/")
        .then((res)=>res.json())
        .then((dres=>{
          console.log("result:: "+JSON.stringify(dres));
          setCdata(dres);
        }))
        
        },[])

    function checklayout(layoutn)
    {
setClayout(layoutn);
console.log("new Layout:: "+JSON.stringify(layoutn));
    }
    return (
        <div>
            <h1>{JSON.stringify(layout)}</h1>
            <hr></hr>
            <h1>{JSON.stringify(clayout)}</h1>

      <GridLayout
        className="layout"
        layout={cdata}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={checklayout}
      >
        <div className="chartbox" key="a">a</div>
        <div className="chartbox" key="b">b</div>
      </GridLayout>
      </div>
    );
  }


export default HyphenGridLayout;