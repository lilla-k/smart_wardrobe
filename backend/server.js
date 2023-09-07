import express from 'express';
import cors from 'cors';

import {getCloths, addCloth} from './database.js';

const app = express();
const port = 3001;

app.use(express.json()); 
app.use(cors());

app.get('/api/cloths', async (req, res) => {
  const cloths = await getCloths();
  res.json(cloths);
});

app.post('/api/cloths', async (req, res) => {
  const result = await addCloth(req.body);
  if (result){
    res.sendStatus(201);
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

function isValid(cloth) {
  if (typeof cloth.price !== 'number' || cloth.price < 0) {
    return false;
  }
  return true;
}
