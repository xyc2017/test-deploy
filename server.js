require('dotenv').config()
const express =require('express')
const app = express()
const PORT=process.env.PORT 
const dataurl=process.env.DATABASE_URL

app.get('/', (req, res)=>{
    res.send('hello world')
})
app.get('/dburl', (req, res)=>{
    res.send(`my connection string is: ${process.env.DATABASE_URL}`)
})
app.listen(PORT, ()=>{
    console.log(`Listening to ${PORT}`)
})
