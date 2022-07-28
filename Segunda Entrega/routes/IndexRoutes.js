import { Router } from "express";
const router = Router();
import productsRoutes from "./ProductRoutes.js";
import cartRoutes from "./CartRoutes.js";


router.get("/home", (req, res) => {
  try {
    res.send("Estas en home");
  } catch (error) {
    console.log("Error al acceder a home", error);
    res.sendStatus(500).send("Internal server error");
  }
});

//ruteo de productos
router.use("/productos", productsRoutes);

//ruteo de carrito
router.use("/carrito/", cartRoutes);

//export
export default router;