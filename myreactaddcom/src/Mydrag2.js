import React from "react";
//import ReactDOM from "react-dom";
import RGL, { WidthProvider } from "react-grid-layout";
//import makeLayout from "./test-hook";
import "./App.css";

const ReactGridLayout = WidthProvider(RGL);

let idCounter = 0;

let barid=0;

const getId = () => {
  idCounter++;

  return idCounter.toString();
};


const getBid = () => {
    barid++;
  
    return barid.toString();
  };

class MinMaxLayout2 extends React.PureComponent {
  static defaultProps = {
    isDraggable: true,
    isResizable: true,
    items: 5,
    rowHeight: 30,
    preventCollision: false,
    cols: 12
  };

  /*state = {
    layout: [
      { x: 0, y: 0, w: 3, h: 3, i: "bar" }
      
    ]
  };
*/
  state = {
    barlayout: [
      { x: 0, y: 0, w: 3, h: 3, i: "bar" }
      
    ]
  };

  render() {
    return (
      <React.Fragment>
      {/*  <button onClick={this.addNewItem}>Add item</button>
        <ReactGridLayout
          {...this.props}
          onLayoutChange={layout => this.setState({ layout })}
        >
          {this.state.layout.map(item => (
            <div key={item.i} data-grid={item}>
              <span>{item.i}</span>
            </div>
          ))}
        </ReactGridLayout>*/}

<br></br>
<hr></hr>
<button onClick={this.addNewItembar}>Add item</button>
        <ReactGridLayout
          {...this.props}
          onLayoutChange={barlayout => this.setState({ barlayout })}
        >
          {this.state.barlayout.map(item => (
            <div key={item.i} data-grid={item}>
              <span>{item.i}</span>
            </div>
          ))}
        </ReactGridLayout>
      </React.Fragment>
    );
  }

  /*addNewItem = () => {
    const { layout } = this.state;
    const newItem = { x: 0, y: 0, w: 3, h: 3, i: "Bar"+getId() };

    if (layout.some(item => item.x === 0 && item.y === 0)) {
      this.setState({
        layout: layout
          .map(item => {
            if (item.x === 0) {
              return { y: item.y++, ...item };
            }

            return item;
          })
          .concat([newItem])
      });
    } else {
      this.setState({ layout: layout.concat([newItem]) });
    }
  };
*/

  addNewItembar = () => {
    const { barlayout } = this.state;
    const newItem = { x: 0, y: 0, w: 3, h: 3, i: "Bar"+getBid() };

    if (barlayout.some(item => item.x === 0 && item.y === 0)) {
      this.setState({
        barlayout: barlayout
          .map(item => {
            if (item.x === 0) {
              return { y: item.y++, ...item };
            }

            return item;
          })
          .concat([newItem])
      });
    } else {
      this.setState({ barlayout: barlayout.concat([newItem]) });
    }
  };

}

/*
module.exports = MinMaxLayout;

if (require.main === module) {
require(makeLayout)(module.exports);
}
*/
export default MinMaxLayout2;