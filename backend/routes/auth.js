const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const jwt_secrt = process.env.JWT_SECRET;

// Creating a user using: POST "/api/auth/". Doesn't require Auth
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 3 }),
  ],
  async (req, res) => {
    let success = false;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success,errors: "Sorry a user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPasswd = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPasswd,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, jwt_secrt);
      success = true;
      res.json({ success,authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
    //   .then((user) => res.json(user))
    //   .catch((err) => {
    //     console.log(err);
    //     res.json({
    //       error: "Please enter a unique Email",
    //       message: err.message,
    //     });
    //   });
  }
);

router.post(
  "/login",
  [body("email").isEmail(), body("password").exists()],
  async (req, res) => {
    const result = validationResult(req);
    let success = false;
    if (!result.isEmpty()) {
      return res.status(400).json({ success,errors: result.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ success,errors: "Please try to login with correct Credentials" });
      }
      let passwdchk = await bcrypt.compare(password, user.password);
      if (!passwdchk) {
        
        return res
          .status(400)
          .json({ success,errors: "Please try to login with correct Credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, jwt_secrt);
      success = true;
      res.json({ success,authToken });
    } catch (errpr) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


router.post("/getuser", fetchuser ,  async (req, res) => {
    try{
      userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user)
    }catch(error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
