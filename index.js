const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000
const mongoDB = require("./db");
const exerciseRoute=require('./routes/exerciseRoute')
const exerciseController = require("./controller/exerciseController");
mongoDB();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use("/api", exerciseRoute);
app.get('/api/bodyParts/:bodyPart', exerciseController.getExercisesByBodyPart);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})