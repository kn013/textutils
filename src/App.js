
import About from './About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import { Routes, Route } from "react-router"


function App() {

  const [mode,setMode]=useState('white');
  const [alert,setAlert]=useState(null);
  // const changeMode=(color)=>{
  //   setMode(color);
  // }

  const changeMode=(color)=>{
    setMode(color);
    if(color==='blue'){
      document.body.style.backgroundColor='#99ccff';
    }else if(color==='green'){
      document.body.style.backgroundColor='#90EE90';
    }else if(color==='red'){
      document.body.style.backgroundColor='#EE9090';
    }
  }

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const toggleMode=()=>{
  //   if(mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor='#042743';
  //     showAlert("Dark mode has been enabled","success");
  //     document.title='TextUtils - Dark Mode '
  //     // setInterval(()=>{
  //     //   document.title='TextUtils is Amazing';
  //     // },2000);
  //     // setInterval(()=>{
  //     //   document.title='Install TextUtils Now';
  //     // },1500);
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light mode has been enabled","success");
  //     document.title='TextUtils -Light Mode '
  //   }
  // }

 


  return (
   <>
   {/* <Router> */}
   <Navbar title="TextUtils" mode={mode} changeMode={changeMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
        {/* <Routes>
          <Route path="/" element={<TextForm alert={alert}  heading="Enter the text to Analyze" mode={mode} changeMode={changeMode} showAlert={showAlert}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
        </Routes> */}
        <TextForm alert={alert}  heading="Enter the text to Analyze" mode={mode} changeMode={changeMode} showAlert={showAlert}/>
    </div>
    {/* </Router> */}
   </>
  );
}

export default App;
