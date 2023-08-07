const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

const citiesData = require('./cities.json'); // Load JSON data

// Enable CORS for all routes
app.use(cors());

app.get('/api/cities', (req, res) => {
  res.json(citiesData.cities);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
