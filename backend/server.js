const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const cors = require('cors');
const fs = require('fs');
const clothsFilePath = path.join(__dirname, 'cloths.json');

app.use(express.json());
app.use(cors());

app.get('/api/cloths', (req, res) => {
  res.sendFile(clothsFilePath);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})