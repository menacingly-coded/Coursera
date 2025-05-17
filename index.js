const express = require('express')
const app = express()
const port = 3000

app.post("/user/signup", function(req, res){
  res.json({
    message: "signup endpoint" 
  })
})

app.post("/user/signin", function(req, res){
  res.json({
    message: "signup endpoint" 
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
