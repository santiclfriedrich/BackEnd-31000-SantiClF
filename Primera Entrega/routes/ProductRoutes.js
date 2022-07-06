const express = require("express");
const router = express.Router();
const {getAllProducts, getProductById, postProduct, putProduct, deleteProductById} = require("../controllers/ProductController");
const checkAdminUtil = require("../utils/checkAdmin");
const ADMIN = true;
const checkAdmin = checkAdminUtil(ADMIN);

//rutas
router.get("/:id?", getProductById) 
router.post("/", checkAdmin, postProduct)
router.put("/:id", checkAdmin, putProduct)
router.delete("/:id", checkAdmin, deleteProductById)

module.exports = router;