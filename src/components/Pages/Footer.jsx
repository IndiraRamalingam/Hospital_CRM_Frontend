import React from 'react'

function Footer() {

  const footer ={
      "color":"white",
      "backgroundColor": "rgb(121 180 236)",
      "position": "absolute",
      "left": "0",
      "bottom": "0",
      "right": "0",
      "height" : "2.5rem",
      "display":"flex",
     " alignItems": "center",
      "justifyContent": "center"
  }

  return (
      <div style={footer}>
            Copyright © Hospital 2023
        </div>
  )
}

export default Footer