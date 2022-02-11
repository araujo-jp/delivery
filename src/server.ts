import express from 'express'

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
  return res.json({
    message: 'Olá mundo!!!'
  })
})

app.listen(3333, () => console.log(`Server is running in port 3333 🔥`))