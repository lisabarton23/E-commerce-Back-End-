// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey:'category_id'
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey:'category_id'
  //do I need to add a CASCADE ON DELETE?
})

// Products belongToMany Tags (through ProductTag)
Product.belongtoMany(Tag,{
  foreignKey:'ProductTag_id'
  
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey:'ProductTag_id'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
