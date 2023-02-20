module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('Employe',{
        id_employe: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom : {
            type: DataTypes.STRING,
            allowNull: false
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false
        }       
    },{
        timestamp: true,
        createdAt: 'created',
        updateAt: false
        
    });
}