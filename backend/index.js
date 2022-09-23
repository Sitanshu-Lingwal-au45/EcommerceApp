const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 8000

app.use(cors({
  origin: '*'
}))

//console.log(path.join(__dirname, '../front-end/build'))
const buildPath = path.join(__dirname, '../frontend/build')
app.use(express.static(buildPath))

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get("*", (req, res) => {
  res.sendFile(`${buildPath}/index.html`)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})


const products = [
  {
    name: 'P1',
    price: 100
  },
  {
    name: 'P2',
    price: 300
  },
]