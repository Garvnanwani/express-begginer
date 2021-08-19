const express = require('express')
    // const path = require('path')
const app = express()
const mainRouter = require('./route/mainRoutes')
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


app.set("view engine", "ejs")
app.use(mainRouter)
    // app.get("/", (req, res) => {
    //     res.render("index", {
    //         title: "my home"
    //     })
    // })

// app.get("/about", (req, res) => {
//         res.render("about", {
//             title: "my about"
//         })
//     })
// app.get('/dream', (req, res) => {
//     res.send('heyyy')
// })
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname) + `/index.html`)
// })

// app.use()
// app.set()