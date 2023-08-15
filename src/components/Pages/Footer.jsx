import React from 'react'

function Footer() {

  const footer ={
      "color":"#301091",
      "font-weight":"bolder",
      "backgroundColor": "white",
      "position": "absolute",
      "left": "0",
      "bottom": "0",
      "right": "0",
      "height" : "2.5rem",
      "display":"flex",
     " alignItems": "center",
      "justifyContent": "center",
    
      
  }

  return (
    <>
      <div style={footer}>
        <br/><br/>
            Copyright 2023 - All Reserved by Healthcare CRM | Privacy Policy | Terms
        </div> 
   
       
        </>
  )
}

export default Footer