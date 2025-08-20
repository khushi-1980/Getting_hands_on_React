import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const prevValue = useRef(""); 
  useEffect(() => {
    prevValue.current = text; 
  }, [text]);

  return (
    <div className="app">
      <h1>📝 useRef Mini Project</h1>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="card">
        <h2>Current Value: {text}</h2>
        <h2>Previous Value: {prevValue.current}</h2>
      </div>
    </div>
  );
}

export default App;
