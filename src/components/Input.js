import React from 'react';

function Input(props){
    return(
        <input className = 'input email' type = {props.type} placeholder = {props.placeholder} required/>  
    )
}

export default Input;