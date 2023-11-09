import React from "react";
//import ReactDOM from "react-dom";
import RGL, { WidthProvider } from "react-grid-layout";
//import makeLayout from "./test-hook";
import "./App.css";

const ReactGridLayout = WidthProvider(RGL);

let idCounter = 0;

const getId = () => {
  idCounter++;

  return idCounter.toString();
};

class MinMaxLayout extends React.PureComponent {
  static defaultProps = {
    isDraggable: true,
    isResizable: true,
    items: 5,
    rowHeight: 30,
    preventCollision: false,
    cols: 12
  };
  /*
  [{"w":1,"h":5,"x":6,"y":0,"i":"5","moved":false,"static":false},{"w":3,"h":3,"x":0,"y":0,"i":"6","moved":false,"static":false}]
  state = {
    layout: [
      { x: 0, y: 0, w: 3, h: 3, i: getId() },
      { x: 0, y: 1, w: 3, h: 3, i: getId() }
    ],
    playout:[
        { x: 1, y: 0, w: 3, h: 3, i: getId() },
        { x: 1, y: 1, w: 3, h: 3, i: getId() }  
    ]
  };
  fanem:jjjj
*/
state = {
  layout: [
    {"w":1,"h":5,"x":6,"y":0,"i":"5","moved":false,"static":false},
  {"w":3,"h":3,"x":0,"y":0,"i":"6","moved":false,"static":false}
  ],
  playout:[
      { x: 1, y: 0, w: 3, h: 3, i: getId() },
      { x: 1, y: 1, w: 3, h: 3, i: getId() }  
  ]
};
  render() {
    function checklayout(lay){
      console.log("layout change:: "+JSON.stringify(lay));
      
    }
    return (
      <React.Fragment>
        <button onClick={this.addNewItem}>Add item</button>
        <ReactGridLayout
          {...this.props}
          onLayoutChange={checklayout}
         // onLayoutChange={layout => this.setState({ layout })}
        >
          {this.state.layout.map(item => (
            <div key={item.i} data-grid={item}>
              <span>{item.i}</span>
            </div>
          ))}
        </ReactGridLayout>

<hr></hr>

<button onClick={this.addNewItem2}>Add second</button>
        <ReactGridLayout
          {...this.props}
          onLayoutChange={playout => this.setState({ playout })}
        >
          {this.state.playout.map(item => (
            <div key={item.i} data-grid={item}>
              <span>{item.i}</span>
            </div>
          ))}
        </ReactGridLayout>
      </React.Fragment>
    );
  }

  addNewItem = () => {
    const { layout } = this.state;
    const newItem = { x: 0, y: 0, w: 3, h: 3, i: getId() };

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

  addNewItem2 = () => {
    const { playout } = this.state;
    const newItem = { x: 0, y: 0, w: 3, h: 3, i: getId() };

    if (playout.some(item => item.x === 0 && item.y === 0)) {
      this.setState({
        playout: playout
          .map(item => {
            if (item.x === 0) {
              return { y: item.y++, ...item };
            }

            return item;
          })
          .concat([newItem])
      });
    } else {
      this.setState({ playout: playout.concat([newItem]) });
    }
  };


}

/*
module.exports = MinMaxLayout;

if (require.main === module) {
require(makeLayout)(module.exports);
}
*/
export default MinMaxLayout;