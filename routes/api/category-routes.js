const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try { const CategoryData = await CategoryData.findAll({
    include:[{ model : Product}],
  });
  res.status(200).json(CategoryData);}
  catch (err){
    res.status (500).json(err)
  }




  });
  // find all categories
  // be sure to include its associated Products

router.get('/:id', async (req, res) => {
  try{
const CategoryData = await Category.findByPk(req.params.id, {
  include:[{model : Product}]
})
if (!CategoryData) {
  res.status (404).json ({ message: 'No category found with that id'});
  return;
}
res.status(200).json(CategoryData);
  }catch (err){
    res.status(500).json(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try{
const locationData = await Category.create({
  category_id: req.body.category_id,
  
});
res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);

  }
});

router.put('/:id',async (req, res) => {
  try{
    const locationData = await Category.create({
      category_id: req.body.category_id,
  // update a category by its `id` value
});
res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);

  }
});

router.delete('/:id', async (req, res) => {
  try{
const CategoryData = await CategoryData.destroy({
  where:{
    id:req.params.id
  },
})
if(!CategoryData){
  res.status(404).json({ message: 'No category found with that id!' });
  return;
}

res.status(200).json(CategoryData);
} catch (err) {
res.status(500).json(err);
}
});


module.exports = router;
