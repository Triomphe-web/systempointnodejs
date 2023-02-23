module.exports = (app) => {
    app.get('/inscription',(req,res)=>{
        res.render('../views/inscription')
    })
}