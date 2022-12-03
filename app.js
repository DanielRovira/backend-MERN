const express = require('express');
const app = express()
const port = 3001
const cors = require('cors');
const dbRoute = require("./routes/financial-control")
require('dotenv').config();

app.use(express.json());
app.use(cors());
// app.get("*")
app.use(`/${process.env.DB}`, dbRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})