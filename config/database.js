const {Sequelize} = require("sequelize")

// mysql connection
const mysql = new Sequelize('Product','MySQL','2356',{
    host:'localhost',
    dialect:'mysql'
})

// postgreSQL connection
const postgres = new Sequelize('ProfitRecord','postgres','2356',{
    host:'localhost',
    dialect:'postgres'
})
 
module.exports = {mysql,postgres};