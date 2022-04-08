//movie related api details

import { createUser, getUserByName } from "../helper.js";
import bcrypt from "bcrypt";

import express from "express";

const router = express.Router();

//POST DATA TO DB FOR SIGNUP
router.post("/signup", async function (req, res) {
  const { username, password } = req.body;
  const hashPassword = await generatePassword(password);
  const userDetails = {
    username: username,
    password: hashPassword,
  };
  console.log(`userDetails: ${userDetails.username} ${userDetails.password}`);
  const result = await createUser(userDetails);
  //very important
  res.send(result);
});
//POST  DATA TO DB FOR LOGIN
router.post("/login", async function (req, res) {
  const { username, password } = req.body;
  const userFromDB = await getUserByName(username);
  //   console.log(`DBdata ${userFromDB.username} `);
  if (!userFromDB) {
    res.send({ message: "invalid credentials uname" });
  } else {
    const storePassword = userFromDB.password;
    const isPasswordMatch = await bcrypt.compare(password, storePassword);
    console.log({ isPasswordMatch });
    if (isPasswordMatch) {
      res.send({ message: "login success" });
    } else {
      res.send({ message: "invalid credentials password" });
    }
  }

  res.send(userFromDB);
});

async function generatePassword(password) {
  //generating salt of 10 rounds
  const salt = await bcrypt.genSalt(10);
  //genarating hash password with salt(Salt is the random string generation)
  const hashPassword = await bcrypt.hash(password, salt);

  return hashPassword;
}
export const userRouter = router;
