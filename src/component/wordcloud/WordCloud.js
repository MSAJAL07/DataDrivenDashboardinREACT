import React from 'react';
import WordCloud from 'react-d3-cloud'; 


 export default function clou(props){
    const fontSizeMapper = word => Math.log2(word.value) * 15;
const rotate = word => (word.value * 90) % 360;
const handleClick = w => {
  console.log(w); 
  props.setEe(w.text);
  props.setV(w.value);
}
const handleMouseOver = w => console.log(w.value);
console.log(props.data)
return(
  <WordCloud 
   
    data={props.data}
    fontSizeMapper={fontSizeMapper}
    rotate={rotate}
    onWordClick = {handleClick}
    onMouseOver = { handleMouseOver}
    width ="950"
    height = "400"
  />
);

 }