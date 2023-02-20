const {hist} = require('../src/db/sequelize')

module.exports = (app)=>{
    app.post('/api/get_user_info',async (req,res)=>{
        // ------------------- VAR -----------------------
        let name = req.body.name
        const date = req.body.date
        const time_start = req.body.time_start
        const time_end = req.body.time_end
        // ------------------- END  VAR -----------------------
        hist.create({
            nom_user : name,
            time_arrived : time_start,
            time_leave: time_end,
            date: date
        })
        res.json({time_start: time_start, time_end: time_end, date: date})
    })
}
