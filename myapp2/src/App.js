import React, { useState, useEffect } from "react";

function App() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> WST React useEffect Assignment</h1>

      {showText && (
        <h2 style={{ color: "blue" }}>
          This component appeared after 3 seconds!
        </h2>
      )}
    </div>
  );
}

export default App;