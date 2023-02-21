const express = require("express");
const {
  registerAdmin,
  verifikasi,
  login,
  listOfficer,
  deleteOfficer,
  addOfficer,
  createLevel,
} = require("../controller/admin_controller");
const {
  middlewareAdminRegister,
} = require("../middleware/adminValidationMiddleware");
const { jwtMiddle } = require("../middleware/jwtMiddleware")
const { uploadSingle } = require("../middleware/uploadMiddleware");
const { adminRegisterValidator } = require("../validator/admin_validator");
const router = express();

router.post("/register", uploadSingle, registerAdmin);
router.post("/login", login);
router.post("/create-level", createLevel);
router.use(jwtMiddle)
router.post("/add-officer", addOfficer);
router.get("/list-officer", listOfficer);
router.delete("/delete/:id", deleteOfficer);
module.exports = { adminRouter: router };
