import React from "react"
import './button.css'



const Button =  props =>{
    let classes = 'button '
    classes+= props.operation?'operation':''
    classes += props.double? 'double':''
    classes += props.triple?'triple' :''
    return (
     <button 
        onClick={() => {
        if (typeof props.click === 'function') {
          props.click(props.label);
        } else {
          console.warn('props.click não é uma função');
        }
      }}
        className={classes}>
        {props.label}
     
     </button>
    )
}

export default Button;