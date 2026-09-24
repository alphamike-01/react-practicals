import { useState, useEffect } from "react"; 

export default function App() { 
  const [isDark,setIsDark] = useState(false);
  const [count, setCount] = useState(0); 
  function themeToogle(){
    if(!isDark){
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setIsDark(true);
    }
    else{
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setIsDark(false);
    }
  }

  function inc() { 
    setCount(count + 1); 
  } 

  function dec() { 
    if (count > 0) { 
      setCount(count - 1);
    } 
  } 

  return ( 
    <> 
      <div> This is App.jsx file </div> 
      <p>Current value of count is: {count}</p> 
      <button onClick={inc}>increment</button> 
      <button onClick={dec}>decrement</button> 
      <button onClick={themeToogle}>Change Theme</button>
    </> 
  ); 
}
