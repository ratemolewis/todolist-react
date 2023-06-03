import react, { useState } from "react";

function Input(props){
    const [isClick, setIsClick]= useState(false);

    function handleClick(event){
        setIsClick((prevValue)=>{
            return !prevValue;
        });
    }

    return (
    <div onClick={handleClick}>
   
    <li style={{textDecoration:isClick?"line-through":null}}>{props.todoItem} </li>
    </div>)
}

export default Input;