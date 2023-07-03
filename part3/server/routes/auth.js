import express from "express";
import axios from "axios";
import User from "../models/User.js";
import jsonwebtoken from "jsonwebtoken";

const accessTokenSecret = "somerandomaccesstoken";
const refreshTokenSecret = "somerandomrefreshtoken";
const refreshTokens = [];

const router = express.Router();

// localhost:3001/auth/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  if (user) {
    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        console.log(err);
        const message = "Passwords did not match";
        res.json(message);
      }
      if (isMatch) {
        console.log(user)
        const accessToken = jsonwebtoken.sign(
          { username: user.username, id: user._id }, //token
          accessTokenSecret, // secret used to sign the token
          { expiresIn: "120m" } //token details
        );
        console.log('access', accessToken);
        const refreshToken = jsonwebtoken.sign(
          { username: user.username, id: user._id }, //token
          refreshTokenSecret
        );
        console.log('refresh', refreshToken)


        const decodedUser = jsonwebtoken.verify(accessToken, accessTokenSecret);
        refreshTokens.push(refreshToken);

        const message = `${username} successfully logged in`;
        res.json({ accessToken, refreshToken, decodedUser, message });
      }
    });
  } else {
    res.status(200).json("User does not exist. please create an account");
  }
});

// localhost:3001/auth/signup
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  // Save User to our Mongo DB
  const user = await User.findOne({ username: username });
  if (user) {
    res.status(500).send("User Already Exists");
  } else {
    const newUser = await User.create({
      username: username,
      email: email,
      password: password,
    });

    if (newUser) {
      res.send("User successfully created. Please login");
    } else {
      res
        .status(500)
        .send("User was not successfully created. Please try again.");
    }
  }
});

// localhost:3001/auth/update

// localhost::"301/auth/logout"

export default router;
