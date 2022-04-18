//const express = require("express");
import express from "express";
import { Db, MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { movieRouter } from "./routes/movie.js";
import { userRouter } from "./routes/users.js";

dotenv.config();

const app = express();


const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
/**Should make client as global */
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connect 👍✨✨");
  return client;
}
export const client = await createConnection();
var corsOption = {
  origin: true,
};
app.use(cors(corsOption));
app.use(express.json());

// const corsOptions ={
//   origin:'http://localhost:3000',
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }
//app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello Express 💕💕💕💕💕💕💕" + PORT);
});



//for url with  / movies we have to use movieRouter


  app.use((res, req, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
 

  
//to get recipie
app.get("/recipie", async function (req, res) {
 const result = await client.db("recipie").collection("recipies").find({}).toArray();
  res.send(result);
});

app.post("/recipie", async function (req, res) {
  const addRecipie = req.body;
  const result = await client.db("recipie").collection("recipies").insertMany(addRecipie);
  res.send(result);
})
app.use("/movies", movieRouter);
app.use("/users", userRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
