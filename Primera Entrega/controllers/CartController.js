const Contenedor = require("../Contenedor");
const cartsContainer = new Contenedor("./db/carts.txt", "./db/cartIds.txt", "./db/cartsDeleted.txt");
const {ProductsContainer} = require("./ProductController")
cartsContainer.init("Carritos");



//agregar un nuevo carrito
const postCart = async (req, res) => {
    res.json(await cartsContainer.save({ objType: "cart" }))
}


//vaciar carrito
const emptyByCartId = async (req, res) => {
    const index = cartsContainer.products.findIndex(producto => producto.id == req.params.id)
    if (index != -1) {
        await cartsContainer.emptyCartById(index, req.params.id);
    } else {
        res.json({ error: `No se pudo encontrar el cart con ID ${req.params.id}` })
    }
}


//eliminar carrito
const deleteCartById = async (req, res) => {
    await emptyByCartId(req, res);
    res.json(await cartsContainer.deleteById(Number(req.params.id)));
}


//obtener un producto por la id del carrito
const getAllProductsByCartId = (req, res) => {
    const index = cartsContainer.products.findIndex(producto => producto.id == req.params.id)
    if (index != -1) {
        res.json(cartsContainer.getAllByCartId(index))
    } else {
        res.json({ error: `No se pudo encontrar el cart con el ID ${req.params.id}` })
    }
}


//añadir un nuevo producto al carrito
const postProductByCartId = async (req, res) => {
    const index = cartsContainer.products.findIndex(producto => producto.id == req.params.id)

    if (index != -1) {
        const product = ProductsContainer.getById(req.body.productId);
        if (product.error){
            res.json(product)
        } else{
            res.json(await cartsContainer.saveByCartId(index, product))
        }
    } else {
        res.json({ error: `No se pudo encontrar el cart con el ID ${req.params.id}` })
    }
}


//eliminar un producto del carrito
const deleteProductByCartId = async (req, res) => {
    const index = cartsContainer.products.findIndex(producto => producto.id == req.params.id)

    if (index != -1) {
        res.json(await cartsContainer.deleteByCartId(index, req.params.id_prod, req.params.id))
    } else {
        res.json({ error: `No se pudo encontrar el cart con el ID ${id}` })
    }
}


module.exports = { cartsContainer, getAllProductsByCartId, postProductByCartId, postCart, deleteCartById, deleteProductByCartId }