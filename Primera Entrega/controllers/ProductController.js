const Contenedor = require("../Contenedor");
const ProductsContainer = new Contenedor("./db/products.txt", "./db/productIds.txt", "./db/productsDeleted.txt");
ProductsContainer.init("Productos");

const getAllProducts = (req, res)=>{
    res.json(ProductsContainer.getAll());
}

const getProductById = (req, res)=>{
    if (req.params.id){
        res.json(ProductsContainer.getById(Number(req.params.id)));
    } else{
        getAllProducts(req, res);
    }
    
}

const postProduct = async (req, res)=>{
    res.json(await ProductsContainer.save(req.body))
}

const putProduct = async (req, res)=>{
    res.json(await ProductsContainer.saveById(Number(req.params.id), req.body));
}

const deleteProductById = async (req, res)=>{
    res.json(await ProductsContainer.deleteById(Number(req.params.id)));
}

module.exports = {ProductsContainer, getAllProducts, getProductById, postProduct, putProduct, deleteProductById}