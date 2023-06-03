import react, { useState } from "react";

function Input(props){
     return (
    <div onClick={()=>{
        props.onChecked(props.id)
    }}>
   
    <li>{props.todoItem} </li>
    </div>)
}

export default Input;