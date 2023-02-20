const {employe} = require('../src/db/sequelize')
const bcrypt = require('bcrypt')
module.exports = (app)=>{
    app.post('/api/get_user_entry/',async (req,res)=>{
        let hours = new Date().getHours()
        let journey = '.'
        if (hours < 12) {
            journey = "Bonjour"
        }
        else{
            journey = "Bonsoir"
        }
        const username = req.body.username;
        // verification de l'utilisateur
        let result = await employe.findOne({ where : { nom : username}})
        result = JSON.stringify(result)
        if (result === 'null') {
            let erreur = "identifiant"
            bcrypt.hash(erreur,12,(err,hash)=>{
                res.redirect(`/?message=${hash}`)
            })   
        }
        else{
            // verify password
            let result_obj = JSON.parse(result)
            bcrypt.compare(req.body.password, result_obj.password,(err,resulat)=>{
                if (resulat) { 
                    res.render('../views/welcome.ejs',{data : {nom: username, journey: journey}})
                 }
                 else{
                    let erreur = "motdepasse"
                    bcrypt.hash(erreur,12,(err,hash)=>{
                        res.redirect(`/?message=${hash}`)
                    }) 
                 }
            })
        }
    })
}