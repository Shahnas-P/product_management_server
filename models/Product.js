const {DataTypes}= require('sequelize')
const {mysql} = require('../config/database')
const Product = mysql.define('Products',{
    product_id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, allowNull:false},
    purchase_price:{type:DataTypes.FLOAT,allowNull:false},
    sales_price:{type:DataTypes.FLOAT,allowNull:false},
    profit:{type:DataTypes.FLOAT,allowNull:false}
},{
    timestamps:false
})
module.exports = Product;