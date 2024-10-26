import React, { useState } from "react";
import "./State.css";

const State = () => {
  const [num, setNum] = useState(0);
  const [text,setText] = useState('rdddd')
  const[img, setImg] =useState(false)
  const [open,setOpen] = useState ('open')

const minus = () => {
    if (num > 0) {
        setNum(num-1)
    }
}

const plus = () => {
    if (num < 10){
        setNum(num + 1)
    }

}
 
const change = () => {
setImg(!img)
setOpen(img ? 'open' : 'close')
}



  return (
    <>
    <div className="box">
        <button onClick={change}> {open} image</button>
        {img && (
            <img src="https://sfunpay.com/s/file/r8/8n/blum.r88na4v82j.jpg" alt="" />
        )
        }
    </div>
<div className="box">
    <h2>{text}</h2>
<input type="text" value={ text} onChange= {(e) => setText (e.target.value)} className="text" />
</div>


      <div className="box">
        <h2>{num}</h2>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={( ) => setNum(num * 2)}>*</button>
        <button onClick={( ) => setNum(num / 2)}>:</button>        <button onClick={( ) => setNum(0)}>0</button>
           </div>
     
    </>
  );
};

export default State;
