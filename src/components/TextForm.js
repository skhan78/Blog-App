import React, {useState} from "react"
export default function TextForm(props){
  const handleUpClick = ()=>{
    setText(text.toUpperCase())
  }

  const handleOnChange = (event)=>{
    console.log(event)
    setText(event.target.value)
  }
  const [text, setText]=useState("Enter your text here...");

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
    </div>
  )
}
