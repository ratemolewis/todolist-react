import React, { useState } from "react";
import Input from "./Input";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([]);
  

  function handleClick(input) {
    setItems((prevItems) => {
      //use the spread operator
      return [...prevItems, input];
    });
    
  }

  function deleteItem(id){
  setItems((preValues)=>{
   return preValues.filter((item, index)=>{
    return id !== index;
   })
  })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     
        <InputArea 
          onAdd={handleClick}
        />
      
      <div>
        <ul>
          {items.map((todoItem, index) => (
            //NB: when we map trough array to create components we must have the key
            <Input
            key={index}
            id={index}
             todoItem={todoItem}
              onChecked={deleteItem}
             />
            
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
