//importamos la clase contenedora de firebase
import ContenedorFirebase from "../../contenedores/contenedores.firebase.js";

class CartDaoFirebase extends ContenedorFirebase {
  constructor() {
    super("compras");
  }
}

export default CartDaoFirebase;