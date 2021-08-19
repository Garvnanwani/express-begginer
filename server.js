const express = require('express')
const app = express()
const mainRouter = require('./route/mainRoutes')
const proRouter = require('./route/proRouter')
const PORT = process.env.PORT || 5500

app.set('view engine', 'ejs')
app.use(proRouter)
app.use(mainRouter)
app.use(express.json())
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`listening to port http://localhost:${PORT}`)
})
