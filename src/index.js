const express = require('express')
const routes = require('./routes')

const port = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})