import React, { useState } from 'react';
import Alert from './Alert';
import Navbar from './Navbar';
export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was Clicked " + text);
        let newText=text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick= ()=>{
        // console.log("Uppercase was Clicked " + text);
        let newText=text.toLowerCase();
        props.showAlert("Converted to Lowercase","success");
        setText(newText);
    }

    const handleOnChange= (event)=>{
        // console.log("Uppercase was Clicked");
        setText(event.target.value);
       
    }

    const clearOnClick= ()=>{
        setText("");
    }

  

    const [text,setText]=useState("");
  return (
    <>
    <div className="container" style={{color:`${props.mode!==`white`?`grey`:`black`}`}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor:`${props.mode!==`white`?`white`:`grey`}` ,color:`${props.mode==='white'?`white`:`black`}`}}></textarea>
        <button className="btn btn-primary my-4" onClick={ handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-4 mx-4" onClick={ handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary my-4 mx-4" onClick={clearOnClick}>Clear Text</button>
        
        </div>
    </div>
    <div className="container my-3" style={{color:`${props.mode!==`white`?`grey`:`black`}`}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes Read</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview it Here"}</p>
    </div>
    </>
  )
}
