import React from 'react';

function One(props)
{
    var style={
        height : "100Px",
        width : "195Px"
    }

return(
    <div className =" m-3 white" style={style}>
        <center>
    <h4 style={{color:"red",marginTop:"10px",fontSize:"15px"}}>{props.text}</h4>
<p className="mb-0" style={{fontSize:"15px"}}>{props.value}| {props.t1}|</p>
<p style={{fontSize:"15px"}}>{props.t2}</p>
    </center>
    </div>
)
}
export default One;
