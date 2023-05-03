import React, {useState} from "react"
export default function TextForm(props){
  const handleUpClick = ()=>{
    setText(text.toUpperCase())
  }
  const handleLoClick = ()=>{
    setText(text.toLowerCase())
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const clearBox =()=>{
    setText('')
  }
  const [text, setText]=useState("Enter your text here...");

  return (
  <>
    <div className="container">
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
      <button className="btn btn-secondary mx-1" onClick={handleLoClick}>convert to lowercase</button>
      <button className="btn btn-danger mx-1" onClick={clearBox}>clear text</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>Characters:{text.length}</p>
      <p>Words: {text.split(" ").length}</p>
    </div>
  </>
  )
}
