const { Sequelize, DataTypes } = require('sequelize')
const EmployeModel = require('../models/employes')
const HistModel = require('../models/hist')

// todo: connexion a la base de donnée Mariadb avec Sequelize
const sequelize = new Sequelize(
    'data_pointage',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions : {
            timezone: 'Etc/GMT-2'
        },
        logging: false
    }
)
const authenticate = () =>{
    sequelize.authenticate()
    .then(_ =>{console.log("La connexion a la base de donnée a bien été etablie")})
    .catch(error =>{console.log(`Erreur de connexion : ${error}`)})
}

// todo :  synchronisation des model avec la base de donnée
const employe = EmployeModel(sequelize,DataTypes)
const hist = HistModel(sequelize,DataTypes)

const initDB = () =>{
    sequelize.sync({force:false})
    .then(_ =>{console.log("La synchronisation de la table dans la base de donnée a été etablis ")})
}

module.exports = {initDB, authenticate, employe, hist}