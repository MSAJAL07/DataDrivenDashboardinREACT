import React from 'react';
import './nav.css'


 const SideBar = props => {
  let menuclass="side_bar" ;
  if(props.sideBarOpen === true) menuclass += " open"
  return (
   
          <div className={menuclass}>
              <center>
              <div >
                <div className="card-box mt-3 white ">
                <center>
  <h4 style={{color:"red",marginTop:"10px",fontSize:"15px"}}>{props.ee}</h4>
  <p className="mb-0" style={{fontSize:"15px"}}>{props.v}| Probable|</p>
<p style={{fontSize:"15px"}}>Gainning traction</p>
    </center>
                    </div>
                  <div>
                  <p> <b>{"Show & Filter"}</b></p>
                    <tr >
                    
                      <td className="white" style={{width:"100px"}}>
                      

                      <div>
                      <p> Topic</p>
                      <select onChange={()=>props.filter("topic")} style={{width:"100px"}} >
                      <option >All</option>
                         <option >Oil</option>
                          <option >Gas</option>
                      <option >car</option>
                      <option >econmic grouth</option>
                      <option >export</option>
                      <option >battery</option>
                      </select>
                    </div>

                    <div>
                      <p> Sector</p>
                      <select onChange={()=>props.filter("sector")} style={{width:"100px"}}  >
                      <option >All</option>
                         <option >20</option>
                          <option >50</option>
                      <option >100</option>
                      </select>
                    </div>


                    <div>
                      <p> Pestle</p>
                      <select onChange={()=>props.filter("pestle")} style={{width:"100px"}}  >
                      <option >All</option>
                         <option >20</option>
                          <option >50</option>
                      <option >100</option>
                      </select>
                    </div>


                    <div>
                      <p> Country</p>
                      <select onChange={()=>props.filter("country")} style={{width:"100px"}}  >
                      <option >All</option>
                         <option >india</option>
                          <option >USA</option>
                      <option >UK</option>
                      <option >china</option>
                      </select>
                    </div>


                    <div>
                      <p> Region</p>
                      <select onChange={()=>props.filter("region")} style={{width:"100px"}}  >
                      <option >10</option>
                         <option >20</option>
                          <option >50</option>
                      <option >100</option>
                      </select>
                    </div>
                    </td>

                    <td className="white " style={{marginLeft:"10px"}}>

                    <div>
                      <p> Measures</p>
                      <select onChange={()=>props.filter("topic")} style={{width:"100px"}}  >
                      <option >Intensity</option>
                         <option >Likelihood</option>
                          <option >Relevance</option>
                      </select>
                    </div>

                    <div>
                      <p> Confidence</p>
                      <div onChange={(e)=>{
                        props.setCL(e.target.value); props.filter("topic")}} style={{width:"100px"}}  >

                      <tr> <td><input value="90" type="radio" name="confidence"/></td> <td> 90</td> </tr>
                      <tr> <td><input value="95" type="radio" name="confidence"/></td> <td> 95</td> </tr>
                      <tr> <td><input value="99" type="radio" name="confidence" /></td> <td> 99</td> </tr>
                      </div>
                    </div>

                    <div>
                      <p> SWTO</p>
                      <select onChange={()=>props.filter("topic")} style={{width:"100px"}} >
                      <option >Strength</option>
                         <option >Weakness</option>
                          <option >Opportunity</option>
                      <option >Threat</option>
                      </select>
                    </div>
                    </td>


                    </tr>

                  </div>
                  <div className="col-sm-5"></div>
                  
              </div>
              </center>

          </div>
     
 
  );
};
export default SideBar;