import React, { useState } from 'react'
import './Calculator2.css';

export default function Calculator2() {
    const[input1,setInput1]=useState(0);
  return (
    <div>
        <div className="container">
            <input type="text" value={input1} className="field1"/>
            <div className="row">
             <div className="col-4">
                <button className="button1 button2">C</button>
                <button className="button1">+-</button>
                <button className="button1"> %</button>
                <button className="button1"> /</button>
             </div>
            </div>
            <div className="row">
            <div className="col-4">
                <button className="button1">7</button>
                <button className="button1">8</button>
                <button className="button1"> 9</button>
                <button className="button1"> X</button>
             </div>
            </div>
            <div className="row">
            <div className="col-4">
                <button className="button1">4</button>
                <button className="button1">5</button>
                <button className="button1"> 6</button>
                <button className="button1"> -</button>
             </div>
            </div>
            <div className="row">
            <div className="col-4">
                <button className="button1">1</button>
                <button className="button1">2</button>
                <button className="button1"> 3</button>
                <button className="button1"> +</button>
             </div>
            </div>
            <div className="row">
            <div className="col-2">
                <button className="button1">0</button>
                <button className="button1">.</button>
                <button className="button1 button3"> =</button>
            </div>
            
                
                
             
            </div>
        </div>
    </div>
  )
}
