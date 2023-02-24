import React from "react"
import Navigation from "./Navigation";

const Header = (props) => {
  
    return (
      <>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap');
          </style>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,700&display=swap');
          </style>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Lora&family=Playfair+Display:ital,wght@0,500;1,700&display=swap');
          </style>
        <div id="top"></div>
        <Navigation {...props} />
      </>
    );
  }


export default Header