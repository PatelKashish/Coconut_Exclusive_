// const mongoose = require('mongoose')

// mongoose.connect("mongodb://localhost:27017/kashish").then(()=>console.log("db connected"));

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI,)
  .then(() => console.log("db connected"))
  .catch(err => console.error("Error connecting to MongoDB:", err));