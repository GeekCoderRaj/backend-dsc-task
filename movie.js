// Postman Documentation link:: https://documenter.getpostman.com/view/18275022/UVC5E74A
const express = require('express');
const app = express();

require("./db/conn");
const Movie = require("./models/movies")

const port = process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.post('/movies',async(req,res)=>{
   try{
      const user = new Movie(req.body);
      const createUser = await user.save();
      res.status(201).send(createUser);
   }catch(err){
      res.status(400).send(err);
      console.log(err);
   }
   
})

app.get('/movies',async(req,res)=>{
   try{
      const moviesData = await Movie.find();
      res.send(moviesData);
   }catch(err){
      res.send(err);
   }
})

app.put("/movies/:id",async(req,res)=>{
   try{
      const _id = req.params.id;
      const updateMovie = await Movie.findByIdAndUpdate(_id ,req.body);
      res.send(updateMovie);
   }catch(err){
      res.status(404).send(err);
   }
  
})

app.delete("/movies/:id",async(req,res)=>{
   try{
      const _id = req.params.id;
      const deleteMovie = await Movie.findByIdAndDelete(_id);
      res.send(deleteMovie);
   }catch(err){
      res.status(404).send(err);
   }
  
})

app.listen(port,()=>{
   console.log(`port is successful at ${port}`);
})