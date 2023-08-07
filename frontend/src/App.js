import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cities, setCities] = useState([]);

  const init = () => {
    fetch("http://localhost:8000/api/cities")
    .then(response => response.json())
    .then(data => setCities(data))
    .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>City Information</h1>
        <ul id="city-list"></ul>
        {cities.map((city) => (
          <li key={city.name}>{city.name}</li>
        ))}
      </header>
    </div>
  );
}

export default App;
