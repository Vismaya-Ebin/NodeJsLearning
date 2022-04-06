import {client } from './index.js';


 async function updateMovie(id, updateMovie) {
    return client
      .db("test")
      .collection("movied")
      .updateOne({ id: id }, { $set: updateMovie });
  }
  
  async function addMovie(newMovies) {
    return client
      .db("test")
      .collection("movied")
      .insertMany(newMovies);
  }
  
  
  async function deleteByID(id) {
    return client
      .db("test")
      .collection("movied")
      .deleteOne({ id: id });
  }
  
  async function getMovieByID(id) {
    return client
      .db("test")
      .collection("movied")
      .findOne({ id: id });
  }
  
  async function getAllMovies() {
    return await client
      .db("test")
      .collection("movied")
      .find({})
      .toArray();
  }
  
  export{getAllMovies,getMovieByID,deleteByID,addMovie,updateMovie}