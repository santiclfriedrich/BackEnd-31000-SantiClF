//importamos la clase contenedora de mongo
import ContenedorMongo from "../../contenedores/contenedores.mongo.js";

//class extends
class ProductDaoMongo extends ContenedorMongo {
  constructor() {
    super("productos", {
      timestamp: { type: String, required: true },
      nombre: { type: String, required: true },
      description: { type: String, required: true },
      codigo: { type: String, required: true },
      url: { type: String, required: true },
      price: { type: Number, required: true },
      stock: { type: Number, required: true },
    });
  }
}

export default ProductDaoMongo;