import React,{useState} from "react";
import "./App.css";
function App(){
    let [temp,setTemp]=useState(10);
    let [class1,setClass1]=useState("temp");
    let [class2,setClass2]=useState("hot");
    let [class3,setClass3]=useState("cold");

function tempinc(){
    if(temp < 30){
setTemp(temp+1);
    }
    else{
        alert("limt exceed");
    }
}
function tempdec(){
    if(temp >= 1){
setTemp(temp-1);
    }
    else{
        alert("temp can't in - minus");
    }
    
}
    return(
        <div>
<h1 className={ temp>= 17? class2 :class3}>{temp}</h1>
<button onClick={tempinc} type="submit">Increment</button>
<button onClick={tempdec} type="submit">Decrement</button>

        </div>
    )
}
export default App;