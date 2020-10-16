import React, {  } from 'react';
import One from "./one"
function Topten({data}){

    var list1 =["Gainning traction","Gainning traction",
    "Early Stage" ,"Established", " undefined","Evolving","Early Stage","undefined", "Gaining Traction","Evolving"];
    var list2 = ["Probable","Probable","Probable","Business as usual", " undefined", 
    "Business as usual","Probable","Probable","Business as usua"," undefined"]
var d1=data.slice(0,5);
var d2=data.slice(5,10)
var d3=0;
    return(
        <div>
        <div class = "row">
{
    d1.map(d=>(
        <One text={d.text} value={d.value} t1={list1[d3]} t2={list2[d3++]}/>
       
    ))
}

</div>
    <div class = "row">{
    d2.map(d=>(
        <One text={d.text} value={d.value} t1={list1[d3]} t2={list2[d3++]}/>
       
    ))
}
    </div>
    </div>
    );
}
export default Topten;


