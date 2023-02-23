const {employe} = require('../src/db/sequelize')
const bcrypt = require('bcrypt')
module.exports = (app)=>{
    app.post('/api/add_user',(req,res)=>{ 
        const password = req.body.password
        bcrypt.hash(password, 12,(err,hash)=>{
            employe.create({
                nom : req.body.username,
                password : hash,
            })
        
        })
        res.status(200).json({success: "yes"})
    })
}