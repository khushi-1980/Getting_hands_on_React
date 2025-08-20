import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

 
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      fontFamily: "monospace"
    }}>
      <h1>⏰ Live Digital Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
