import React, { useState } from "react";

export default function TextForm(props) {
  
  const [Text, setText] = useState('');
  const handleUpClick = ()=>{
    // console.log("Uppercase Was Clicked"+Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert('Converted Into Upper Case', 'success');
    
  }
  const handleLowClick = ()=>{
    // console.log("Uppercase Was Clicked"+Text);
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert('Converted Into Lower Case', 'success');
    
  }
  const handleOnChange = (event)=>{
    // console.log("Uppercase Was Clicked");
    setText(event.target.value);
    
  }
  const handleCopy = ()=>{
    let text = document.getElementById('mybox');
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied To Clipboard', 'success');
    
  }
  let clearText = ()=>{
    let newText = " ";
    setText(newText)
    props.showAlert('Your Text Has Been Cleared', 'warning');
  }
  let handleExtraSpace =()=>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra Spaces In Your Text Has Been Removed', 'success');
  }
  return (
      <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#000080'}}>
      <h2>{props.heading}</h2>
      <div className="my-3">
        <textarea className="form-control" id="mybox" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#1f7cc5':'white',color:props.mode === 'dark'?'white':'#000080'}} rows="10"></textarea>
      </div>
      <button disabled={Text.length===0} className="btn btn-success mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To Lowercase</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear Text</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"style={{color:props.mode === 'dark'?'white':'#000080'}}>
      <h2>Your Text Summary</h2>
      <p>{Text.split(' ').filter((element)=>{return element.length!==0}).length} Words ::: {Text.length} Characters</p>
      <p>{0.008 *Text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
      <h3>Preview</h3>
      <p>{Text.length>0?Text:"Enter Something In The TextBox Above To Preview It Here"}</p>
    </div>
    </>
  );
}
