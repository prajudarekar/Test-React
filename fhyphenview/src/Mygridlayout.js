import GridLayout from "react-grid-layout";
import "./App.css";
import React, { useEffect, useState } from "react";
/*const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 1 },
  { i: "b", x: 1, y: 0, w: 1, h: 1 }
];
*/

export default function Mygridlayout() {
  let [rlayout, setRlayout] = useState([]);
  let [newitemadd, setNewitemadd] = useState({});
  let [slayout, setSlayout] = useState([
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 1, h: 1 },
  ]);
  let [clayout, setClayout] = useState([]);
  let [rr, setRr] = useState([]);
  let [noti, setNoti] = useState([]);
  let [count, setCount] = useState(0);

  /*const layout1 = [
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 1, h: 1 },
  ];
  const layout = [
    { w: 1, h: 1, x: 3, y: 0, i: "a", moved: false, static: false },
    { w: 1, h: 1, x: 1, y: 0, i: "b", moved: false, static: false },
  ];
*/
  let idCounter = 0;

  const getId = () => {
    idCounter++;

    return idCounter.toString();
  };
  useEffect(() => {
    fetch("http://localhost:304/hyphenview/layout/")
      .then((res) => res.json())
      .then((rdata) => {
        setRlayout(rdata);
        console.log("api data:: " + JSON.stringify(rdata));
      });

    function selectFewerProps(show) {
      const { w, h, x, y, i } = show;
      return { w, h, x, y, i };
    }
    var newEpisodes = [];
    newEpisodes = rlayout.map(selectFewerProps);
    console.log("new array:: " + JSON.stringify(newEpisodes));
    setRr(newEpisodes);
  }, []);

  /*function savedata() {
    rr.forEach((mc) => {
      let data1 = {
        i: mc.i,
        x: mc.x,
        y: mc.y,
        w: mc.w,
        h: mc.h,
      };
      alert("save" + JSON.stringify(data1));

      let data = { w: 1, h: 1, x: 3, y: 0, i: "a" };
      let url = "http://localhost:304/hyphenview/LayData/insert/";
      // let url = "http://localhost:304/member/insert";
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data1),
      };
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((rdata) => console.log("resp data:: " + rdata));
    });
  }*/
  function deletelayout() {
    alert("name i is:: ");
  }
  function updatedata() {
    alert("update");

    function selectupdate(show) {
      const { x, y, w, h } = show;
      return { x, y, w, h };
    }
    var uparr = [];
    uparr = clayout.map(selectupdate);
    console.log("update array:: " + JSON.stringify(uparr));
    clayout.forEach((mc) => {
      let udata1 = {
        x: mc.x,
        y: mc.y,
        w: mc.w,
        h: mc.h,
      };
      /*   let id = {
      i: mc.i
    }*/
      console.log("i in update:: " + JSON.stringify(mc.i));

      //let item={uid,name,color,price};
      fetch("http://localhost:304/hyphenlayout/update/" + mc.i, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(udata1),
      }).then((result) => {
        result.json().then((resp) => {
          console.log("resp PUT:: " + resp);
        });
      });
    });
  }

  function checklayout(lay) {
    setClayout(lay);
  }
  function addchart() {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    var no = Math.round(rand);
    setCount(count + 1);
    var slayout1 = [];
    slayout1 = rlayout;
    alert("slayout:: " + JSON.stringify(slayout1));
    const newItem = { x: 0, y: 0, w: 1, h: 1, i: "h" + no };

    if (slayout1.some((item) => item.x === 0 && item.y === 0)) {
      console.log("item in if:: ");

      setRlayout(
        slayout1
          .map((item) => {
            if (item.x === 0) {
              return { y: item.y++, ...item };
            }

            return item;
            console.log("NEw box layout in if:: " + JSON.stringify(item));
          })
          .concat([newItem])
        //console.log("NEw box layout in else:: "+JSON.stringify(newItem));
      );
    } else {
      console.log("item in else:: ");
      console.log("NEw box layout in else:: " + JSON.stringify(newItem));

      setRlayout(slayout1.concat([newItem]));
    }

    setNewitemadd(newItem);
    /* newitemadd.forEach((mc) => {
       let data1 = {
         i: mc.i,
         x: mc.x,
         y: mc.y,
         w: mc.w,
         h: mc.h,
       };
       alert("save" + JSON.stringify(data1));
 */
    let data = { w: 1, h: 1, x: 3, y: 0, i: "a" };
    let data1 = newItem;
    let url = "http://localhost:304/hyphenview/LayData/insert/";
    // let url = "http://localhost:304/member/insert";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data1),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((rdata) => console.log("resp data:: " + rdata));
    // updatedata();
  }

  function checkclose(i) {
    alert("close:: "+i);
    var id=i;
    fetch("http://localhost:304/Layout/Delete/"+id,{method:'DELETE'})
    .then(result=>{
        result.json().then((resp)=>{
            console.log("resp delete:: "+resp);
      
        })
    })
  
  }

  return (
    <div>
      {/* <button onClick={savedata}>Save data</button>*/}
      <button onClick={addchart}>Add chart</button>
      <button onClick={updatedata}>Save</button>
      <p>Api result Layout:: {JSON.stringify(rlayout)}</p>
      <hr></hr>
      <p>change layout:: {JSON.stringify(clayout)}</p>
      <hr></hr>
      <p>addd {JSON.stringify(newitemadd)}</p>


      <GridLayout
        layout={rlayout}
        cols={5}
        rowHeight={100}
        width={1000}
        onLayoutChange={checklayout}
        

      >
       

        {rlayout.map((item, index) => (

          <div className="box" key={item.i+""+index}>
              <button onMouseDown={(e)=>{
                console.log("Clicked");
                e.stopPropagation();
              }}>close</button>
<br/><br/>
<button onMouseDown={()=>checkclose(item.i)}>close Final</button>
<br/>
            {item.i}
          </div>

        ))}
      </GridLayout>

      {/* <GridLayout
        layout={rlayout}
        cols={5}
        rowHeight={100}
        width={1000}
        onLayoutChange={checklayout}
      >
        <div className="box" key="a">
          a
        </div>
        <div className="box" key="b">
          b
        </div>
      </GridLayout>*/}
    </div>
  );
}
