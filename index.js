
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// Convert miles to kilometers
app.post('/convert', (req, res) => {
  const miles = req.body.miles;
  if (typeof miles !== 'number') {
    return res.status(400).json({ error: 'Invalid input, please provide a number for miles.' });
  }
  const km = miles * 1.60934;
  res.json({ miles: miles, kilometers: km });
});

// Serve HTML file for the front-end
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
