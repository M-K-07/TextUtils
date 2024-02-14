import Navbar from './components/Navbar';
import Text from './components/Text';
import React, { useState } from 'react'


function App() {
  const [modetxt,setModeText]=useState("Dark Mode")
  const [btnCol,setbtnCol]=useState("primary")
  const [mode,setMode]=useState("light")
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#0f0f33'
      setModeText("Light Mode")
      setbtnCol("info")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      setModeText("Dark Mode")
      setbtnCol("primary")
    }
  }
  return (
    <>
    <Navbar Navtitle="TextUtils" mode={mode} toggleMode={toggleMode} btnTxt={modetxt}/>
    <div className="container my-3" >
    <Text textheading="Enter Text Here" mode={mode} btnCol={btnCol}/>
    </div>
    </> 
  );
}

export default App;
