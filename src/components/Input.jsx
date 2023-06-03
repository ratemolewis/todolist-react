import react, { useState } from "react";

function Input(props){
    const [isClick, setIsClick]= useState(false);

    function handleClick(event){
        setIsClick((prevValue)=>{
            if(prevValue===true){
                return false;
            }else if(prevValue === false){
                return true;
            }
        });
    }

    return (
    <div onClick={handleClick}>
   
    <li style={{textDecoration:isClick?"line-through":null}}>{props.todoItem} </li>
    </div>)
}

export default Input;