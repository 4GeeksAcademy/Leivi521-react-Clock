import React, { useState, useEffect } from "react";

const Clock = () => {
 
  return (
    <div
      style={{
        
        display: "flexbox",
        margin: "auto",
        textAlign: "center",
        
      }}
    >
      <h1 style={{ color: "Blue" }}>PST TIME ZONE</h1>
      <h3>React Example for using setInterval method</h3>
      <h1>
        {hours}:{minutes}:{seconds}
      </h1>
    </div>
  );
};

