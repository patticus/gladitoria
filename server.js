const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'game/dist')));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'game/dist', 'index.html'));
});