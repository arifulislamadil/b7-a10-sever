const express = require('express')
const app = express()
const port = 5000
const chefs = require("./chefs.json")
const cors = require('cors')

app.use(cors())


app.get('/', (req, res) => {
  res.send("hello world")
})
app.get('/chefs', (req, res) => {
  res.send(chefs)
})
app.get('/chefs/:id', (req, res) => {
    const userId = req.params.id;
    const chef = chefs.find((chef) =>parseInt(chef.id)=== parseInt(userId));
  if (chef) {
    res.send(chef);
  } else {
    res.status(404).send('User not found');
    
  }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})