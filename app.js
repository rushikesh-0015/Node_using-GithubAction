const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Node App Running on ECS 🚀');
});

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
