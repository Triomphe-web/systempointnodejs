module.exports = (app) => {
    app.get('/',(req,res)=>{
        res.render('../views/index',{message: req.query.message})
    })
}