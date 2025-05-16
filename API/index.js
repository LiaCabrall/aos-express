const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Liana é gay');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Tá rodando na porta ${PORT} boy`);
});