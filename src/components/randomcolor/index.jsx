import React, { useEffect } from 'react'
import { useState } from 'react';
const Randomcolor = () => {

  const [typeofcolor, settypeofcolor] = useState('hex');
  const [color, setcolor] = useState("#000000");

function randomclr(length){
  return Math.floor(Math.random()*length)
}


function handlecreaterandomhexcolor(){
const hex = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexcolor = '#';

for(let i=0;i<6;i++){
    hexcolor+=hex[randomclr(hex.length)]
}
setcolor(hexcolor)

}
function handlecreaterandomrgbcolor(){
    const r = randomclr(256)
    const g = randomclr(256)
    const b = randomclr(256)

setcolor(`rgb(${r}, ${g}, ${b})`)
}

useEffect(()=>{
  if(typeofcolor === 'rgb') handlecreaterandomrgbcolor();
  else handlecreaterandomhexcolor()
},[typeofcolor])


  return (
    <div style={{
      width:"100vw",
      height:"100vh",
      background:color,
    }}>
      <button onClick={()=>settypeofcolor('hex')}>Create hex color</button>
      <button onClick={()=>settypeofcolor('rgb')}>Create rgb color</button>
      <button onClick={typeofcolor === 'hex'? handlecreaterandomhexcolor : handlecreaterandomrgbcolor}>Generate random color</button>
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        fontSize:"35px",
        marginTop:"50px"
      }}>
        <h3>{typeofcolor === 'rgb' ? 'RGB color' : 'HEX color'}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  )
}

export default Randomcolor