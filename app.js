const express = require('express');
const app = express()
const port = 3001
const cors = require('cors');
const dbRoute = require("./routes/financial-control")

app.use(express.json());
app.use(cors());
app.get("*")
app.use("/financial-control", dbRoute);

app.listen(port, '127.0.0.1', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})