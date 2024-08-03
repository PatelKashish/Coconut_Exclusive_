const express  = require('express');
const app = express();

// const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");

var cors = require('cors');
app.use(cors()) // Use this after the variable declaration
require("./connection/connection");

//routes
app.use(express.json());

app.use('/api',productRoute);

app.listen(5000,()=>{
	console.log("port running on 5000");
});