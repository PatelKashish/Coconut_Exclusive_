// Connect to MongoDB using mongoose
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/murari', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb://localhost:27017/kashish", { useNewUrlParser: true, useUnifiedTopology: true });
// Import the Mongoose model
const Product = require('C:/Study/CC/Project/e_commerce_website/Backend_M/models/productsmodel.js');

// Create a new product instance
const newProduct = new Product({
    productname: "Tshirt",
    productid: "123457",
    gender: "Male",
    price: 12000,
    brand: "Levis",
    productimg: "C:/Study/CC/Project/e_commerce_website/Backend_M/assets/2.jpg",
    qty: 10
});

// Save the product to the database
newProduct.save()
    .then(() => {
        console.log('Product added successfully');
        mongoose.connection.close(); // Close the connection after adding the product
    })
    .catch(error => {
        console.error('Error adding product:', error);
        mongoose.connection.close(); // Close the connection in case of error
    });
