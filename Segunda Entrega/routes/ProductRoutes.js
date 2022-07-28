const express = require("express");
const router = express.Router();


import {
    getProducts, getProduct, postProduct, putProduct, deleteProduct, } 
    from "../controllers/products.controllers.js";

import { checkAdmin } from "../utils/checkAdmin.js";

//rutas
router.get("/:id?", getProducts)
router.get("/:id", getProduct) 
router.post("/", checkAdmin, postProduct)
router.put("/:id", checkAdmin, putProduct)
router.delete("/:id", checkAdmin, deleteProduct)

export default router;