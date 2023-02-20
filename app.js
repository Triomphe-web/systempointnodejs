// todo : module utiliser
const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

// todo : initialisation de l'application
const app = express()
app.set('view engine', 'ejs')

app
    .use(express.static('public'))
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
// connexion et synchronisation avec la base de donnée 
sequelize.authenticate()
sequelize.initDB()


// ROUTES
require('./routes/home')(app)
require('./routes/GetTimeArrived')(app)
require('./routes/SendTimerUser')(app)
require('./routes/AddEmploye')(app)


// todo : Lancement de l'application
app.listen(3000,(req,res)=>{
    console.log("Service heberger sur : http://localhost:3000");
})