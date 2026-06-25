const express = require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const result=dotenv.config();
const PORT= process.env.PORT|| 8000
const user= require('/Users/parvarora/Desktop/techou/server/src/models/User.js');
const notes=require('/Users/parvarora/Desktop/techou/server/src/models/Notes.js');

// console.log(result);
// console.log(process.env.PORT);
// console.log(user.modelName);
// console.log(notes.modelName);

app.get("/", (req, res) => {
  res.send("Welcome to Techou");
});


app.listen(PORT,()=>{
    console.log(`connected and running to ${PORT}`);
});
