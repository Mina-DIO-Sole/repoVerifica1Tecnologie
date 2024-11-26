// app.js
const express = require('express');
const app = express();
const port = 3000;

// Serve file statici dalla cartella 'www'
app.use(express.static('www'));

// Definisci l'endpoint /api/mante per restituire il file mante.json
app.get('/api/mante', (req, res) => {
  res.json(require('./mante.json'));
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
