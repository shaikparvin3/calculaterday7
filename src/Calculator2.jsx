import React, { useState } from 'react'
import './Calculator2.css';

export default function Calculator2() {
    const[input1,setInput1]=useState("");
    function handleclick(event){
        setInput1(input1+(event.target.name))
    }
    function handleclick2(){
        setInput1("");
    }
    function handleclick3(){
        setInput1(eval(input1).toString())
    }
  return (
    <div>
        <div className="container">
            <input type="text" value={input1} className="field1" />
            <div className="row">
             <div className="col-4">
                <button name="c" className="button1 button2" onClick={handleclick2}>C</button>
                <button  name="+" className="button1" onClick={handleclick}>+-</button>
                <button name="%" className="button1" onClick={handleclick}> %</button>
                <button name="/" className="button1" onClick={handleclick}> /</button>
             </div>
            </div>
            <div className="row">
            <div className="col-4">
                <button name="7" className="button1" onClick={handleclick}>7</button>
                <button name="8" className="button1" onClick={handleclick}>8</button>
                <button name="9" className="button1" onClick={handleclick}> 9</button>
                <button name="*" className="button1" onClick={handleclick}> X</button>
             </div>
            </div>
            <div className="row">
            <div className="col-4">
                <button name="4" className="button1" onClick={handleclick}>4</button>
                <button name="5" className="button1" onClick={handleclick}>5</button>
                <button name="6" className="button1" onClick={handleclick}> 6</button>
                <button name="-" className="button1"onClick={handleclick}> -</button>
             </div>
            </div>
            <div className="row">
            <div className="col-4">
                <button name="1" className="button1" onClick={handleclick}>1</button>
                <button name="2" className="button1" onClick={handleclick}>2</button>
                <button name="3" className="button1" onClick={handleclick}> 3</button>
                <button name="+" className="button1" onClick={handleclick}> +</button>
             </div>
            </div>
            <div className="row">
            <div className="col-2">
                <button name="0" className="button1" onClick={handleclick}>0</button>
                <button  name="."className="button1" onClick={handleclick}>.</button>
                <button name="=" className="button1 button3" onClick={handleclick3}> =</button>
            </div>
            
                
                
             
            </div>
        </div>
    </div>
  )
}
