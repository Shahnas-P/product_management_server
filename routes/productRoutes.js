const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const ProfitRecord = require('../models/ProfitRecord')

// Add Product 
const addProduct =async (req,res)=>{
try{
    const { name, purchase_price, sales_price } = req.body;
    const profit = sales_price - purchase_price

    // Add Product  to mysql 
    const newProduct = await Product.create({name,purchase_price,sales_price,profit});

    // Add ProfitRecord to postgreSQL
    await ProfitRecord.create({ product_id: newProduct.product_id, 
      profit: newProduct.profit,})
    res.status(200).json({message:"Product Added Successfully!!",newProduct})
}catch(error){
res.status(500).json({message:"Something went wront!!",error:error.message})
}
}

//Get All Products List 
const getAllProduct = async (req,res)=>{
    try{
        const products = await Product.findAll();
        res.status(200).json({message:"ProductedListed Successfully!!",data:products})
    }catch(error){
        res.status(500).json({message:"Something Went Wrong!!",error:error.message})
    }
}

//Get Product details by id 
const getProductById = async (req,res)=>{
    try{
const product_id = req.params.id

const product = await Product.findByPk(product_id)
const profitRecord = await ProfitRecord.findAll({where:{product_id}})
res.status(200).json({message:"Fetched Successfully!!",product,profitRecord})

    }catch(error){
res.status(500).json({message:"Something Went Wrong!!",error:error.message})
    }
}

router.post('/addProduct',addProduct)
router.get('/products',getAllProduct)
router.get('/productDetails/:id',getProductById)
module.exports = router