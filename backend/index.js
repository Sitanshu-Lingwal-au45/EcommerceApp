const express = require("express")

const app=express()
const cors=require('cors')

const PORT=process.env.PORT ||8000
app.use(cors())

app.get('/api/products/',(req,res)=>{
    res.json(products)
    })

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})



const products=[
    {
        name: 'P1',
        price:100
    },
    {
        name:  'P2',
        price:  300

    }
]