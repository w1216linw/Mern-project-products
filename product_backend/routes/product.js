const express = require('express');
const { default: mongoose } = require('mongoose');
const product = require('../models/product');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const products = await product.find({}).sort({ createdAt: -1 });
    
    if(!products) throw new Error();
    
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

router.get('/getByName', async (req, res) => {

  if(!req.query.name) return res.status(404).json({error: 'Provide name'});

  try{
    const response = await product.find({title: req.query.name}).collation({locale: 'en', strength: 2}); // search in case insensitive

    if(response.length < 1) return res.status(404).json({error: 'No such item'});

    res.status(200).json(response)
  } catch(e) {
    res.json({error: error.message});
  }

})

router.get('/getById/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({ error: 'No such item' });

    const response = await product.findById(req.params.id);
    if(!response) throw new Error();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

router.get('/getByStart', async (req, res) => {
  if(!req.query.start) return res.json({error: 'No input found'});

  const regex = new RegExp(`^${req.query.start}`, 'i');
  
  try{
    const response = await product.find({title: {$regex: regex}}); // search in case insensitive

    res.status(200).json(response)
  } catch(e) {
    res.json({error: error.message});
  }
})

router.post('/', async (req, res) => {

  try {
    const newProduct = await product.create({ ...req.body });
    res.status(200).json({
      itemName: newProduct.title,
      success: "Item added"
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

})

router.delete('/deleteById/:id', async (req, res) => {

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({ error: 'No such item' });

  try {
    const result = await product.findByIdAndDelete(req.params.id); // {_id: id}
    if (!result) throw new Error();
    res.status(200).json({ item: result.title , success: 'deleted' });
  } catch (error) {
    res.status(404).json({ error: 'Not found listing item' });
  }
})

router.patch('/updateById/:id', async (req, res) => {

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({ error: 'No such item' });

  try {
    const result = await product.findByIdAndUpdate(req.params.id, { ...req.body }); // {_id: id}
    if (!result) throw new Error();
    res.status(200).json({ item: result.title ,success: 'updated' });
  } catch (error) {
    res.status(404).json({ error: 'Not found listing item' });
  }
})



module.exports = router;