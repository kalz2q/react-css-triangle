import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-triangle"
  })
  return (
    <div className="App">
      <div className="triangle"></div>
      <div className="triangle2">
        {/* <div className="trinagle3"></div> */}
      </div>
      <div className="triangle"></div>
      <div className="triangle3"></div>
    </div>
  );
}

export default App;
