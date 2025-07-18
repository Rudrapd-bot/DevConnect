const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/',(req,res)=>{
    console.log("hey its a get request")
    res.send('hello world 2')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
