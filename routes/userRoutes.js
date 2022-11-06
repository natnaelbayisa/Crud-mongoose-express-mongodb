const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.route("/").post(userController.createUser).get(userController.getUser);

router
  .route("/:id")
  .get(userController.getSingleUser)
  .patch(userController.updateUser)
  .delete(userController.deleteSingleUser);

module.exports = router;
