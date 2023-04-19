const express = require('express')
const app = express()
const cors=require('cors')
const port = process.env.PORT || 4000
const categories = require('./data/categories.json')
app.use(cors())
app.get('/', (req, res) => {
  res.send('News Dragon Client Server Is Running!')
})
app.get('/categories', (req, res) => {
  res.send(categories)
})
app.listen(port,()=>console.log(`News Dragon Client Server Is Running On Port:${port}`))