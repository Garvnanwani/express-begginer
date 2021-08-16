const express = require('express')
const app = express()
const mainRouter = require('./route/mainRoutes')
const PORT = process.env.PORT || 5500

app.listen(PORT, () => { console.log(`listening to port http://localhost:${PORT}`) })

app.set("view engine", "ejs")
app.use(mainRouter)