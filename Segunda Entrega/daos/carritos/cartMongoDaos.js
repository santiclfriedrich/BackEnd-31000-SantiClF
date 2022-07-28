//importamos la clase contenedora de mongo
import ContenedorMongo from "../../contenedores/contenedores.mongo.js";


class CartDaoMongo extends ContenedorMongo {
  constructor() {
    super("compras", {
      timestamp: { type: String, required: true },
      productos: { type: Array, required: true },
    });
  }
}

export default CartDaoMongo;