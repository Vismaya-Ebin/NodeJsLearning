import {client } from './index.js';
//for login post data to DB
async function createUser(userDetails) {
  return client
    .db("test")
    .collection("users")
    .insertOne(userDetails);
}

//get user by name
async function getUserByName(username) {
  console.log(`USERNAME: ${username}`);
  return client
    .db("test")
    .collection("users")
    .findOne({ username: username });
}
 async function updateMovie(id, updateMovie) {
    return client
      .db("test")
      .collection("movied")
      .updateOne({ _id: Object(id) }, { $set: updateMovie });
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
      .deleteOne({ _id: Object(id) });
  }
 //Id changed to atlas _id convert to Object type
  async function getMovieByID(id) {
    return client
      .db("test")
      .collection("movied")
      .findOne({ _id: Object(id) });
  }
  
  async function getAllMovies() {
    return await client
      .db("test")
      .collection("movied")
      .find({})
      .toArray();
  }
  
  export{getAllMovies,getMovieByID,deleteByID,addMovie,updateMovie,createUser,getUserByName}