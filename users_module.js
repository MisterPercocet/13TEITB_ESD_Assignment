const mongoose = require("mongoose");
const env =require('dotenv').config();

mongoose.connect(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected successfully..."))
.catch( (error) => console.log(error) );
const userSchema = new mongoose.Schema({
name: String,
id: Number,
classdiv: String
})

const userObject = new mongoose.model("student", userSchema);
exports.User = userObject;
