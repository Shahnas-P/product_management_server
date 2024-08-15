require('dotenv').config()
const express = require('express')
const app = express()
const productRoutes = require('./routes/productRoutes')
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use(express.json())
app.use('/api',productRoutes)
//Sync database 
const {mysql,postgres}=require('./config/database')
mysql.sync()
postgres.sync()

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Server is running on the port" ,PORT)
})