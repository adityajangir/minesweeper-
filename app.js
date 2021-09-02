const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const data = require(__dirname + '/public/scripts/script.js')


// Importing mongoose
const mongoose = require("mongoose");
// Connecting mongoose to the Database
mongoose.connect('mongodb://localhost:27017/msdb');
const msdbSchema = mongoose.Schema({
  // _id: mongoose.SchemaTypes.Email,
  moves: Number,
  minesfound: Number,
  time: Date
})
// Creating the mongoose Model
const Score = mongoose.model('Score', msdbSchema);



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));


app.get("/", function(req,res){
  res.render("index");
});



app.post("/",function(req,res){
  // const moves_taken = data.moves_taken;
  // const mines_found = data.mines_found;
  const score = new Score({
    moves: moves_taken,
    minesfound: mines_found,
    time: time_used
  })
  score.save();
  res.redirect("/");
})


app.listen(3000,function(){
  console.log("Server started at port 3000")
})
