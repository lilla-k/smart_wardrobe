import express from 'express';
import cors from 'cors';

import {getCloths, addCloth} from './database.js';
import isValid from '../frontend/src/utils/validateCloth.js'

const app = express();
const port = 3001;

app.use(express.json()); 
app.use(cors());

app.get('/api/cloths', async (req, res) => {
  const cloths = await getCloths();
  res.json(cloths);
});

app.post('/api/cloths', async (req, res) => {
  const postedCloth = req.body;
  if(isValid(postedCloth)){
    const result = await addCloth(postedCloth);
    if(result){
      res.sendStatus(201);
    }
  res.sendStatus(500);
  }
  res.sendStatus(400);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


