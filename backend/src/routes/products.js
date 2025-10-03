const router = require('express').Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// create (admin only)
router.post('/', auth, async(req,res)=>{
  if(!req.user.isAdmin) return res.status(403).json({msg:"Admin only"});
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// get all
router.get('/', async(req,res)=>{
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
