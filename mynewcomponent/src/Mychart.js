import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
//import ReactHighcharts from "react-highcharts";
import './App.css';
// import "react-grid-layout/css/styles.css";
// import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
//import "./styles/styles.css";
const ResponsiveGridLayout = WidthProvider(Responsive);


function Mychart(){
   
    const layout = [
      { i: "1", x: 0, y: 0, w: 2, h: 1, minW: 2, minH: 1 },
      { i: "2", x: 5, y: 0, w: 2, h: 1, minW: 2, minH: 1 }
      // { i: "3", x: 8, y: 0, w: 3, h: 2, minW: 2, minH: 1 },
      // { i: "4", x: 0, y: 3, w: 5, h: 2, minW: 2, minH: 1 },
      // { i: "5", x: 5, y: 3, w: 3, h: 2, minW: 2, minH: 1 },
      // { i: "6", x: 8, y: 3, w: 3, h: 2, minW: 2, minH: 1 },
      // { i: "7", x: 0, y: 6, w: 5, h: 2, minW: 2, minH: 1 },
      // { i: "8", x: 5, y: 6, w: 3, h: 2, minW: 2, minH: 1 },
      // { i: "9", x: 8, y: 6, w: 3, h: 2, minW: 2, minH: 1 }
    ];
   /* const [items, setItems] = React.useState([
        { i: "a", x: 0, y: 0, w: 2, h: 1 },
        { i: "b", x: 2, y: 0, w: 2, h: 1 }
      ]);
      */
 const items=[
        { i: "one", x: 0, y: 0, w: 2, h: 1 },
        { i: "two", x: 2, y: 0, w: 2, h: 1 },
        { i: "three", x: 1, y: 1, w: 2, h: 1 },
        { i: "four", x: 1, y: 0, w: 2, h: 1 },
        { i: "five", x: 0, y: 1, w: 2, h: 1 }
      ];

    return (
        <div>
      

<ResponsiveGridLayout
className="layout"
layouts={{ lg: items }}
breakpoints={{ lg: 1200, md: 996, sm: 768 }}
cols={{ lg: 12, md: 10, sm: 6 }}
resizeHandles={["se"]}
// resizeHandle={<BottomRightHandle />}
>
{items.map((item) => {
  return (
    <div
      key={item.i}
      style={{ backgroundColor: "green" }}
      data-grid={{ x: item.x, y: item.y }}
    >
      {item.i}
    
    </div>
  );
})}
</ResponsiveGridLayout>
</div>
    );
  }

  export default Mychart;
