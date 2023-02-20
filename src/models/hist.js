module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('hist',{
        id_hist: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time_arrived: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        time_leave: {
            type: DataTypes.STRING,
            allowNull: true
        },
        work_time: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        timestamp: true,
        createdAt: 'created',
        updateAt: false
        
    });
}