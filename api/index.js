const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors('*'));
mongoose
  .connect('mongodb://127.0.0.1:27017/MISAINFO', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongo Connection Open !!');
  })
  .catch((err) => {
    console.log('Mongo Connection Error');
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  subcategory: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  stock: {
    type: String,
  },
  stockQt: {
    type: Number,
  },
  stockSold: {
    type: Number,
  },
});
const Product = mongoose.model('Product', productSchema);

app.post('/api/createProduct', (req, res) => {
  const newProduct = new Product({
    category: req.body.category,
    subcategory: req.body.subcategory,
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
    stock: req.body.stock,
    stockQt: req.body.inStockQuantity,
    stockSold: req.body.soldQuantity,
  });

  newProduct.save();
  res.send('Received!');
});

app.get('/api/getAllProducts', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.send(products);
    }
  });
});

app.put('/api/updateProduct', (req, res) => {
  const newProduct = {
    category: req.body.category,
    subcategory: req.body.subcategory,
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
    stock: req.body.stock,
    stockQt: req.body.inStockQuantity,
    stockSold: req.body.soldQuantity,
  };
  Product.findByIdAndUpdate(
    { _id: req.body.id },
    { $set: newProduct },
    { returnOriginal: false }
  ).then(res.send('updated!'));
});

app.delete('/api/deleteProduct', (req, res) => {
  Product.findByIdAndDelete(
    { _id: req.body.id },
    { returnOriginal: false }
  ).then(res.send('deleted!'));
});

app.listen(5000, () => {
  console.log('App listening on port //127.0.0.1:27017/MISAINFO!');
});
