//movie related api details

import { createUser, getUserByName } from "../helper.js";
import bcrypt from "bcrypt";

import express from "express";

const router = express.Router();

//POST DATA TO DB
router.post("/signup", async function (req, res) {
  const { username, password } = req.body;
  const hashPassword = await generatePassword(password);
  const userDetails = {
    username: username,
    password: hashPassword,
  };
  console.log(`userDetails: ${userDetails}`);
  const result = await createUser(userDetails);
  //very important
  res.send(result);
});
//PUT DATA TO DB
router.post("/login", async function (req, res) {
  const { username, password } = req.body;

  const movie = await getUserByName(id, updateMovie);
  //very important
  res.send(movie);
});


async function generatePassword(password){
    //generating salt of 10 rounds
    const salt = await bcrypt.genSalt(10);
    //genarating hash password with salt(Salt is the random string generation)
    const hashPassword = await bcrypt.hash(password,salt);
    console.log(hashPassword);

    return hashPassword;
}
export const userRouter = router;
