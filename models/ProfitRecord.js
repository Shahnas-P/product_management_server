const {DataTypes}= require('sequelize');
const {postgres} = require('../config/database')

const ProfitRecord = postgres.define('ProfitRecord',{
    record_id:{type:DataTypes.INTEGER, primaryKey:true ,autoIncrement:true},
    product_id:{type:DataTypes.INTEGER, allowNull:false},
    profit:{type:DataTypes.FLOAT,allowNull:false}

},{
    timestamps:true
})
module.exports = ProfitRecord