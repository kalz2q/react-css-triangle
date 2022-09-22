import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-triangle"
  })
  return (
    <div className="App">
      <div className="BOX">
        <div className="triangle"></div>
      </div>
      <div className="BOX">
        <div className="triangle2"> </div>
      </div>

      <div className="trinagle3"></div>
      <div className="triangle3">
      </div>
      <div className="BOX">
        <div className="triangle4"></div>
      </div>
    </div>
  );
}

export default App;
