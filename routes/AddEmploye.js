const {employe} = require('../src/db/sequelize')
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')
module.exports = (app)=>{
    app.post('/api/add_user',(req,res)=>{
        const nom = req.body.name 
        const password = req.body.password
        bcrypt.hash(password, 12,(err,hash)=>{
            employe.create({
                nom : req.body.name,
                password : hash,
            })
        
        })
        let token = sign({nom},'dfdb4f3a3fcb2b9ffb81d32d5728553d')
        res.status(200).json({token: token})
    })
}