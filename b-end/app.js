const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('www'));

app.get('/api/mante', (req, res) => {
  res.json(require('./mante.json'));
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
