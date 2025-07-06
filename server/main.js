require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const Product = require('./models/product');
const app = express();
const PORT =  process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// DATABASE COONECTION
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✅ MongoDB connected successfully');
    app.listen(PORT , ()=>{
        console.log(`Server is started at http://localhost:${PORT}`);
    })
})
.catch((err) => {
    console.error('❌ MongoDB connection error:', err);
});


// POST : create or insert a product
app.post('/api/product',async(req,res)=>{
   try{
    const ProductAdd = await Product.create(req.body);
    res.status(200).json(ProductAdd);
   }catch(error){
    res.status(500).json({message : error.message});
   }
});

// DELETE: Remove product by ID
app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//PUT: Update product by ID
app.put('/api/product/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updatedData,
      { new: true, runValidators: true } // new:true returns updated doc
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated", data: updatedProduct });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: error.message });
  }
});


//GET: Read all products
app.get('/api/product', async (req, res) => {
  try {
    const products = await Product.find(); // fetch all documents
    res.status(200).json(products);
  } catch (error) {
    console.error("Error reading products:", error);
    res.status(500).json({ message: error.message });
  }
});









