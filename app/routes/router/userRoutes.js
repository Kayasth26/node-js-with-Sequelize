const express = require("express");
const router = express();
const { upload } = require("../../services/multer");
const userController = require("../../controller/userController");
const userValidation = require("../../validation/userValidation");
const passport = require("passport");
const { validation } = require("../../middleWare/validator");

// Registration
router.post(
  "/register",
  upload.single("uploadImage"),
  validation.body(userValidation.register),
  userController.register
);

// login
router.post(
  "/login",
  validation.body(userValidation. login),
  userController.login
);

// view profile
router.get(
  "/viewProfile/:id",
  // passport.authenticate("jwt", { session: false }),
  userController.viewProfile
);

// update profile
router.put(
  "/updateProfile/:id",
  // passport.authenticate("jwt", { session: false }),
  upload.single("uploadImage"),
  validation.body(userValidation.editProfile),
  userController.updateProfile
);

// Reset Password
router.put(
  "/resetPassword/:id",
  // passport.authenticate("jwt", { session: false }),
  validation.body(userValidation.resetpassword),
  userController.resetPassword
);

module.exports = router;

