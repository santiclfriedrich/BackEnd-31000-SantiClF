import dotenv from "dotenv";
dotenv.config();

//declaramos las variables de los productos y carritos
let ProductDao;
let CartDao;

//aplicamos un switch de asignacion
switch (process.env.DATABASE) {
  case "mongo":
    const { default: ProductDaoMongo } = await import(
      "./productos/productosMongoDaos.js"
    );
    const { default: CartDaoMongo } = await import(
      "./carritos/cartMongoDaos.js"
    );
    ProductDao = new ProductDaoMongo();
    CartDao = new CartDaoMongo();
    break;
  case "firebase":
    const { default: ProductDaoFirebase } = await import(
      "./productos/productosFbDaos.js"
    );
    const { default: CartDaoFirebase } = await import(
      "./carritos/cartFbDaos.js"
    );
    ProductDao = new ProductDaoFirebase();
    CartDao = new CartDaoFirebase();
    break;
}

export { ProductDao, CartDao };