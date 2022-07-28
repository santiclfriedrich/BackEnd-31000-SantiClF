//import de la clase contenedora para su persistencia
import { ProductDao } from "../daos/indexDaos.js";

//functions
const getProducts = async (req, res) => {
  try {
    const resultado = await ProductDao.listarTodos();
    res.send(resultado);
  } catch (error) {
    console.log(
      "Ocurrio un error en obtener los productos",
      error
    );
    res.sendStatus(500);
  }
};
const getProduct = async (req, res) => {
  try {
    const resultado = await ProductDao.listarUno(req.params.id);
    if (!resultado) {
      res.send("ID del producto no existente");
    } else {
      res.send(resultado);
    }
  } catch (error) {
    console.log(
      "Ocurrio un error en obtener un producto",
      error
    );
    res.sendStatus(500);
  }
};
const postProduct = async (req, res) => {
  try {
    await ProductDao.guardar(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.log(
      "Ocurrio un error en agregar un producto",
      error
    );
    res.sendStatus(500);
  }
};
const putProduct = async (req, res) => {
  try {
    let resultado = await ProductDao.actualizar(req.params.id, req.body);
    if (!resultado) {
      res.send("ID del producto no existente");
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(
      "Ocurrio un error en actualizar el producto",
      error
    );
    res.sendStatus(500);
  }
};
const deleteProduct = async (req, res) => {
  try {
    let resultado = await ProductDao.borrar(req.params.id);
    if (!resultado) {
      res.send("ID del producto no existente");
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(
      "Ocurrio un error en eliminar el producto",
      error
    );
    res.sendStatus(500);
  }
};


export { getProducts, getProduct, postProduct, putProduct, deleteProduct };