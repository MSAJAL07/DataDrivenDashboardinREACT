import React,{useState,useEffect} from 'react';
import  WordCloud from './component/wordcloud/WordCloud';
import data from './data/allData';
import Table from './component/table/table';
import SiteBar from './component/nav/sidebar';
import Navbar from "./component/nav/navbar";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Topten from './component/top10/topten';

function obj(text,value){
  this.text = text;
  this.value= value;
}
function App() {

  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [words, setWords] = useState(data)
  const [WordData,setWordData] = useState([])
  const [TopTen,setTopTen] = useState([])
  const [CL,setCL] = useState(90)
  const [ee,setEe] = useState("Click on a label")
  const [v,setV] = useState();
const handleOnclick = () => setSideBarOpen(!sideBarOpen);
let db = new Map();
let dbd =[];

function ddddd(key){
  words.map(d=>{
    if(db.has(d[key]) !== true ) db.set(d[key],  1);
    else{
      let t= db.get(d[key])
       db.delete(d[key]);
      db.set(d[key],t+1);
      }
  })

  db.forEach((key,vlaue)=>{
    let t= new obj(vlaue,key)
    dbd.push(t);
  })
  }

const handleFiltering=(key)=>
{ 
  ddddd(key);
  var tmp = JSON.parse(JSON.stringify(dbd)).sort((a,b)=>{
    return b.value-a.value
  })
  setWordData(tmp);
  setTopTen(tmp.slice(0,10));
  
}
useEffect(()=>{
  handleFiltering("topic")
}
  ,[]);


  return (
    <React.Fragment>
        <Navbar cl={CL} onClick={handleOnclick} sideBarOpen ={sideBarOpen}/>
     <SiteBar ee={ee} v= {v} setCL={setCL} filter={handleFiltering} sideBarOpen ={sideBarOpen} />
   
     <div className="card-box">
       <div className = "container" >
       
       <div className="mt-3  white">
          <center> <WordCloud setEe={setEe} setV={setV} data = {WordData}/> </center>
         </div>
      <div className="mt-3">
        <strong> Top Ten Undefineds</strong>
      </div>
      <div className="mt-3" >
        <Topten data ={TopTen}/>
      </div>
       <div className="mt-3 white"><Table data={data}/></div>
    
         </div>
     </div>
    

    </React.Fragment>
  );
}



export default App;
