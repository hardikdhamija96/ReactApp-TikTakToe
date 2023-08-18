import React from 'react'

const Square = (props) => {
  return (
    <div 
    onClick={props.onClick}
    style={{border:"5px solid black", height:"100px", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", fontSize:"35px",margin:"2px"}} className='square'>
        <h5 style={{color:"crimson"}}>{props.value}</h5>
    </div>
  )
}

export default Square