import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);
  const [light, setLight] = useState(false);

  // Change the document background color
  useEffect(() => {
    document.body.style.backgroundColor = light ? "#d3c225" : "#f2f2f2";
  }, [light]);

  return (
    <div className="container">

      <h1>Counter & Light Switch</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <hr />

      <h2>
        {light ? "💡 Light ON" : "⚫ Light OFF"}
      </h2>

      <button onClick={() => setLight(!light)}>
        Toggle Light
      </button>

    </div>
  );
}

export default App;