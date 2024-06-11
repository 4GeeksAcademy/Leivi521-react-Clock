//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const Clock = ({onesplace, tenths, hundredths, thousandths}) => {
    return (
        <div
        style={{
          
          display: "flexbox",
          margin: "auto",
          textAlign: "center",
          
        }}
      >
        <h1 style={{ color: "Blue" }}>Simple Clock Project</h1>
        <h3>Leivi Dominguez</h3>
        <h1>
          [{thousandths}{hundredths}:0{tenths}:0{onesplace}]
        </h1>
      </div>
    )
  }
  let counter = 0
  
  setInterval(() => {
      let slot1 = Math.floor(counter/1) % 10
      let slot2 = Math.floor(counter/10) % 10
      let slot3 = Math.floor(counter/100) % 10
      let slot4 = Math.floor(counter/1000)% 10
      counter++
      console.log(slot1, slot2, slot3, slot4, "CONSOLE LOG FROM SET INTERVAL")
  
      ReactDOM.render(<Clock onesplace={slot1} tenths={slot2} hundredths={slot3} thousandths={slot4} />, document.querySelector("#app"));
  
  }, 1000)

//render your react application
ReactDOM.render(<Clock />, document.querySelector("#app"));
