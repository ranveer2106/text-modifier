// import logo from './logo.svg';
import './App.css';
import Form from './elements/form';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes,
//   // Link
// } from "react-router-dom";
// let name = "ranvir"

import Navbar from './elements/navbar';
import { useState } from "react";
import Alert from './elements/alert';
// import About from './elements/about';


function App() {
  const [mode, setdark] = useState("light");
  const [color, setcolor] = useState("dark");
  const [tex, setTex] = useState("black");
  const [bg, setbg] = useState("white");
  const [alert, setAlert] = useState(null)
  // const [message, setmessage] = useState(null);

  let callAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }


  let togglemode = () => {
    if (mode === "dark") {
      setdark("light");
      setcolor("dark");
      setTex("black");
      setbg("white");
      callAlert("light mode enabled", "success")
      // document.body.style.backgroundColor = "green";
      document.body.style.backgroundColor = "white";
      document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white";
      document.getElementById("exampleFormControlTextarea1").style.color = "black";
      document.getElementById("h1").style.color = "black";
    }
    else {
      setdark("dark");
      setcolor("light");
      setTex("white");
      setbg("grey");
      callAlert("dark mode enabled", "success")
      // document.body.style.backgroundColor = "dark";
      // document.getElementById("root").style.backgroundColor = "dark";
      document.body.style.backgroundColor = "grey";
      document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "grey";
      document.getElementById("exampleFormControlTextarea1").style.color = "white";
      document.getElementById("h1").style.color = "white";
    }
    // document.body.style.backgroundColor = mode;
  }
  let togglecolor = () => {
    if (document.getElementById("exampleRadios1").checked) {
      document.body.style.backgroundColor = "white";

    }
    else if (document.getElementById("exampleRadios2").checked) {
      // console.log("dark")
      document.body.style.backgroundColor = "grey";

    }
    else if (document.getElementById("exampleRadios3").checked) {
      // console.log("dark")
      document.body.style.backgroundColor = "green";

    }
    else if (document.getElementById("exampleRadios4").checked) {
      // console.log("dark")
      document.body.style.backgroundColor = "red";

    }
  }
  return (
    <>


      {/* <Router> */}
      <Navbar title="rana ki website" mode={mode} togglecolor={togglecolor} togglemode={togglemode} color={color} />

      <Alert alert={alert} />
      <Form color={tex} bgcolor={bg} alert={callAlert} />
      {/* <Routes> */}
      {/* <Route exact path="/about" element={<About />} /> */}
      {/* <Route path="/" element={<Form color={tex} bgcolor={bg} alert={callAlert} />} /> */}
      {/* <Route path="/index.html" element={<Form color={tex} bgcolor={bg} alert={callAlert} />} /> */}
      {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
