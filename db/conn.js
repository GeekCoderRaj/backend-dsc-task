const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Movie-api").then(()=>{
    console.log("connection is successful");
}).catch(()=>{
    console.log("no connection");
})