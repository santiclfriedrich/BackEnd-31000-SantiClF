//importamos la clase contenedora de firebase
import ContenedorFirebase from "../../contenedores/contenedores.firebase.js";

//class extends
class ProductDaoFirebase extends ContenedorFirebase {
  constructor() {
    super("productos");
  }
}

export default ProductDaoFirebase;