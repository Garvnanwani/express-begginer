import express from 'express';

// index.js, main.js, app.js, server.js kchbhi naam
// express ek class hain uska ek app object banana padta hain
const app = express();

// constant string, number variables mostly all caps main define karte hain
// jis cheez ko tu as a value use karti hain
// like env vars ko all caps main define karte hain

const PORT = process.env.PORT || 5000

// ye cheez tabbhi kaam aati hain agar tumhe same app ko diff ports pe run karna hain

// prb aati hain jab tum deploy karte ho, like heroku khud ke port pe deploy karta hai, aur heroku us port ko as a env variable tumhare code main inject kardeta han tumhe define nah karna padta, to tumhe koi env file banane ki zarurat nahi hain, heroku khud env insert kardeta hain
// .env files ko use karne ke liye ek dotfiles package download karna padta hain, bina uske node main kaam nahi karengi,
// react internally use karta hain dotfiles package isliye hume install karne ki zarurat nahi
// biggest prb with express is that it doesnt have a proper folder structure, its quite unopioniated, basically its a routing framework
// this prb is solved by nestjs ( class based ) but vo thoda difficult

// kahani ab tak -> express import, express ka app initialize, port define

// http methods ->
// - get - used to get something from serve, you communicate to sevrver ki tumhe kya chahiye using query params ('?per_page=4&page=3')
// - post - used to add something to server, for eg, tumhe user add karna hain sign up ke, server communicate using body
// (body: {
//     name: "ramesh",
//     password: "fjerois"
// })

// - put - used to update something in server, for eg like mujhe user profile page pe user details edit karte ho
// // put -> replace type

// - patch -
// // post is used to add something on database, put is used to update the details of a already existing thing, patch is similar to put but here you update only a some particular fields but in put you update whole thing at once

// - delete - used to delete something from database

// like get request hum browser pe run aur test kar sakte hin
// tune ek post route banaya usko call run kaise karegi bina front end ke
// to iskeliye kaafi apps aate hain like postman, insomia, aur do vs code ki extension ek choti si hain rest client aur ek hain badiii thunder client

// rest -> state, stateless protocols
// rest is basically a convention how u make apis
