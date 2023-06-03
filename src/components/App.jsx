import React, { useState } from "react";
import Input from "./Input";


function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick() {
    setItems((prevItems) => {
      //use the spread operator
      return [...prevItems, input];
    });
    setInput("");
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
      <div className="form">
        <input onChange={handleChange} value={input} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
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
