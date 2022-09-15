import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-triangle"
  })
  return (
    <div className="App">
      <div className="triangle"></div>
    </div>
  );
}

export default App;
