import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import ReactHighcharts from "react-highcharts";
import './App.css';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
// import "react-grid-layout/css/styles.css";
// import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
//import "./styles/styles.css";
const ResponsiveGridLayout = WidthProvider(Responsive);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

var data = [
  [1220832000000, 22.56],
  [1220918400000, 21.67],
  [1221004800000, 21.66],
  [1221091200000, 21.81],
  [1221177600000, 21.28],
  [1221436800000, 20.05],
  [1229299200000, 13.54]
];

var config = {
  rangeSelector: {
    selected: 1
  },
  title: {
    text: "AAPL Stock Price"
  },
  series: [
    {
      name: "AAPL",
      data: data,
      tooltip: {
        valueDecimals: 2
      }
    }
  ]
};

function Header() {
  return (
    <>
      <header className="window-header">
        <div className="logo-container">
          <div className="app-logo">
            <span className="app-name">Widget Name</span>
          </div>
        </div>
        <div className="actions-container">
          <button className="settings-window window-button-style">
            <svg className="window-controls-icon">
              <use href="#window-settings"></use>
            </svg>
          </button>
          <button className="close-window window-button-style">
            <svg className="window-controls-icon">
              <use href="#window-close"></use>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default class Myapp extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.conRef = React.createRef();

    this.chartRefs = [];

    this.setChartRef = (ref) => {
      this.chartRefs.push(ref);
    };
  }

  render() {
    const gridItems = [
      { id: 1, name: "Item One" },
      { id: 2, name: "Item Two" }
      // { id: 3, name: "Item Three" },
      // { id: 4, name: "Item Four" },
      // { id: 5, name: "Item Five" },
      // { id: 6, name: "Item Six" },
      // { id: 7, name: "Item Seven" },
      // { id: 8, name: "Item Eight" },
      // { id: 9, name: "Item Nine" }
    ];
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
        { i: "a", x: 0, y: 0, w: 2, h: 1 },
        { i: "b", x: 2, y: 0, w: 2, h: 1 },
        { i: "c", x: 1, y: 1, w: 2, h: 1 },
        { i: "d", x: 1, y: 0, w: 2, h: 1 },
        { i: "e", x: 0, y: 1, w: 2, h: 1 }
      ];
    return (
        <div>
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        measureBeforeMount={true}
        className="layout"
        // rowHeight={this.props.rowHeight}
        isDragable={true}
        isResizable={true}
        onDrag={this.onDragging}
        onDragStop={this.onMoveCard}
        margin={[30, 30]}
        onResizeStop={function (e, layout) {
          this.chartRefs[layout.i - 1].chart.reflow();
        }.bind(this)}
      >
        {gridItems.map((item, i) => {
          return (
            <div key={item.id} ref={this.conRef} className="grid-item">
              {/* <div
                className="handle"
                style={{ cursor: "move", background: "lightblue" }}
              >
                <span>x</span>
                <span>Header Title</span>
                <span>---</span>
              </div> */}
              <Header />
              <HighchartsReact
                ref={this.setChartRef}
                containerProps={{ style: { width: "100%", height: "100%" } }}
                options={config}
                // highcharts={Highcharts}
              />
            </div>
          );
        })}
      </ResponsiveGridLayout>

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
      style={{ backgroundColor: "red" }}
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
}
