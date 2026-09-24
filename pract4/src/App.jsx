import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px", color: "red"}}>
      <h1>Digital Clock</h1>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
