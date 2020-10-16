import React from 'react';
import './nav.css';
const NavBar =(props) =>
{
    let menuclass ;
    if(props.sideBarOpen === true) menuclass =" clicked_menu"
return(
    <div>
<div id="menu" className = {menuclass}>
    <div className ="circle shadow-ld">
        <i onClick={props.onClick} className = " menu_ico">{"<"}</i>
    </div>
</div>
<section id="shadow_deviation">
        <div id="deviation_container">
            <div id="cloud_standard" style={{ "textAlign": "center" }}> 
            <p className="tooltip1">CL</p> = {props.cl}% | 
            <p className="tooltip1"> μ</p>  = 12.5 |
            <p className="tooltip1">σ</p> = 12.6 | 
            <p className="tooltip1">Lower</p>= 12.1 | 
            <p className="tooltip1">Upper</p> = 13.2
            </div>
        </div>
    </section>
    </div>
);
}
export default NavBar;