'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Trying to deploy Automatically')
})


app.listen(PORT, () => {
  console.log(`app is up on port http://localhost:${PORT}`)
})
