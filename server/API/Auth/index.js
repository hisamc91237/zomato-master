//Library
import express from "express";
import passport from "passport";

//Models
import { UserModel } from "../../database/allModels";

// Validation
import { ValidateSignin, ValidateSignup } from "../../validation/auth";

// Create a router
const Router = express.Router();

/**
 * Router       /signup
 * Des          Register new user
 * params       none
 * Access       Public
 * Method       POST
 */
Router.post("/signup", async (req, res) => {
  try {
    await ValidateSignup(req.body.credentials);
    await UserModel.findByEmailAndPhone(req.body.credentials);
    const newUser = await UserModel.create(req.body.credentials);
    const token = newUser.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Router       /signin
 * Des          Signin with email and password
 * params       none
 * Access       Public
 * Method       POST
 */
Router.post("/signin", async (req, res) => {
  try {
    await ValidateSignin(req.body.credentials);
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const token = user.generateJwtToken();
    return res.status(200).json({ token, staus: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Router       /google
 * Des          Google signin
 * params       none
 * Access       Public
 * Method       GET
 */
Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

/**
 * Router       /google/callback
 * Des          Google signin callback
 * params       none
 * Access       Public
 * Method       GET
 */
Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    return res
      .status(200)
      .json({ token: req.session.passport.user.token, status: "success" });
  }
);
export default Router;
