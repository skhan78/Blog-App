import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [mode, setMode]=useState('light');
  const [theme, setTheme]=useState('black');
  const[myStyle, setMyStyle] = useState({
    color:"black",
    backgroundColor:"white"
  })

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      setTheme("white")
      setMyStyle({
        color:"white",
        backgroundColor:"black"
      })
    }
    else{
      setMode("light")
      setTheme("black")
      setMyStyle({
        color:"black",
        backgroundColor:"white"
      })
    }
  }
  return (
    <>
      <Navbar title="My Blog App" about_us="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        {/* <TextForm heading="Enter the text"/> */}
        <About theme={theme} myStyle={myStyle}/>
      </div>
    </>
  );
}

export default App;
