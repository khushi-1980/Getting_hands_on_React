import React, { useState } from "react";

function ColorInput({ color, onChange }) {
  return (
    <div>
      <label className="font-semibold">Pick a color: </label>
      <input 
        type="color" 
        value={color} 
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  );
}

function ColorPreview({ color }) {
  return (
    <div 
      style={{ 
        width: "100px", 
        height: "100px", 
        backgroundColor: color, 
        marginTop: "10px", 
        border: "2px solid #333" 
      }}
    />
  );
}

export default function App() {
  const [color, setColor] = useState("#ff0000");

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎨 Color Picker</h1>
      <ColorInput color={color} onChange={setColor} />
      <ColorPreview color={color} />
    </div>
  );
}
