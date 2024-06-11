// //import react into the bundle
// import React from "react";
// import ReactDOM from "react-dom";

// // include your styles into the webpack bundle
// import "../styles/index.css";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS here



// //render your react application
// const Clock = ({onesplace, tenths, hundredths, thousandths}) => {
//   return (
//     <div id="mainDiv">
//         <i class="fa-solid fa-clock"></i>
//         <div class="border-2" id="digitFour">
//             {onesplace}
//         </div>
//         <div class="border-2" id="digitThree">
//             {tenths}
//         </div>
//         <div class="border-2" id="digitTwo">
//             {hundredths}
//         </div>
//         <div class="border-2" id="digitOne">
//             {thousandths}
//         </div>
//     </div>
//   )
// }
// let counter = 0

// setInterval(() => {
//     let slot1 = Math.floor(counter/1) % 10
//     let slot2 = Math.floor(counter/10) % 10
//     let slot3 = Math.floor(counter/100) % 10
//     let slot4 = Math.floor(counter/1000)% 10
//     counter++
//     console.log(slot1, slot2, slot3, slot4, "CONSOLE LOG FROM SET INTERVAL")

//     ReactDOM.render(<Clock onesplace={slot1} tenths={slot2} hundredths={slot3} thousandths={slot4} />, document.querySelector("#app"));

// }, 1000)

// export default Home;
