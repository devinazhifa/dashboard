// import express
const express = require('express')
const app = express()
const routers = require("./routers");
const port = 1500

const bcrypt = require('bcrypt')

global.users = [
  {
    id: 1,
    username: 'devi@gmail.com',
    password: 'rahasia123'
  }
]

// Module untuk autentikasi
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

app.use(express.urlencoded({ extended: false}))

// Middleware untuk autentikasi & session
app.use(flash())
app.use(session({
  secret: 'fejsbinar',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use( (req, res, next) => {
  req.app.set('layout','layouts/default')
  next()
})

// import ejs layout
const expressLayouts = require('express-ejs-layouts')

// setup view engine
app.set('view engine', 'ejs')

// setup public folder
app.use(express.static('public'))
app.use(express.static('public/img'))

// setup ejs layouts
app.unsubscribe(expressLayouts)

app.use("/addcar/", routers.addcar);
app.use("/listcar/", routers.listcar);
app.use("/dashboard/", routers.dashboard);
app.use("/auth/", routers.auth);
app.use("/editcar/", routers.editcar);

app.listen(1500, () => { console.log(`localhost:${port} is running...`) })