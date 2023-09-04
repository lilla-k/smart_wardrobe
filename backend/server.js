const express = require('express');
const app = express();
const getCloths = require('./database.js');
const path = require('path');
const port = 3001;
const cors = require('cors');
const fs = require('fs');
const clothsFilePath = path.join(__dirname, 'cloths.json');

app.use(express.json()); 
app.use(cors());

app.get('/api/cloths', async (req, res) => {
  const cloths = await getCloths();
  res.json(cloths);
});

app.post('/api/cloths', (req, res)=> {
  const clothsFileContent = JSON.parse(fs.readFileSync(clothsFilePath));
  const postedCloth = req.body;

  if (!isValid(postedCloth)) {
    res.sendStatus(400);
  }

  clothsFileContent.push(postedCloth);
  fs.writeFileSync(clothsFilePath, JSON.stringify(clothsFileContent, null, 2));
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

function isValid(cloth) {
  if (typeof cloth.price !== 'number' || cloth.price < 0) {
    return false;
  }
  return true;
}
