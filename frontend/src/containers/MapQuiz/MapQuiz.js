import React, { useState, useEffect } from "react";
// import Box from '@mui/material/Box';


const MapQuiz = (props) => {
  const [cities, setCities] = useState([]);

  const init = () => {
    fetch("http://localhost:8000/api/cities")
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    init();
  }, []);

  return (
      // <Box
      //   sx={{
      //     display: 'grid',
      //     gridTemplateColumns: 'repeat(4, 1fr)',
      //     gap: 1,
      //     gridTemplateRows: 'auto',
      //     gridTemplateAreas: `"header header header header"
      //   "main main . sidebar"
      //   "footer footer footer footer"`,
      //   }}
      // >
      //   <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }}>Header</Box>
      //   <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>Main</Box>
      //   <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>Sidebar</Box>
      //   <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark' }}>Footer</Box>
      // </Box>
        <header className="App-header">
        <h1>City Information</h1>
        <ul id="city-list"></ul>
        {cities.map((city) => (
          <li key={city.name}>{city.name}</li>
        ))}
      </header>
  );
};

export default MapQuiz;

