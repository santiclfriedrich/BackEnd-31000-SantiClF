const fs = require("fs");

class ProductsContainer {
    constructor(fileProducts, fileIds, fileDeleted) {
        this.fileProducts = fileProducts;
        this.fileProductsIds = fileIds;
        this.deleted = fileDeleted;
        this.products = [];
        this.productIds = [];
    }

    //guardar un producto en su container
    async save(objeto) {
        objeto.timestamp = Date.now();
        objeto.objType?objeto.cartList=[]:[];
        try {
            //busca id en archivo
            if (this.productIds.length === 0) {
                this.productIds.push(1);
                objeto.id = 1;
            } else {
                this.productIds.push(this.productIds[this.productIds.length - 1] + 1);
                objeto.id = this.productIds[this.productIds.length - 1];
            }

            await fs.promises.writeFile(this.fileProductsIds, JSON.stringify(this.productIds));
            this.products.push(objeto)
            await fs.promises.writeFile(this.fileProducts, JSON.stringify(this.products))
            console.log("Producto cargado con éxito");
           
            return objeto;
        } catch (err) {
            console.log("Error guardando objeto en el filesystem. Code: ", err);
        }
    }

    //actualiza los productos en su container
    async saveById(id, objeto) {
        const index = this.products.findIndex(producto => producto.id === id)
        if (index != -1) {
            objeto.timestamp = Date.now();
            objeto.id = id;
            this.products[index] = objeto;

            try {
                await fs.promises.writeFile(this.fileProducts, JSON.stringify(this.products));
            } catch (err) {
                console.log("Error guardando producto por ID. Code: ", err)
            }

            return this.products[index];
        } else {
            return { error: `No se pudo encontrar el producto con ID ${id}` }
        }
    }

    //retorna un producto de su container
    getById(id) {
        const objeto = this.products.find(producto => producto.id === id);
        return (objeto ? objeto : { error: `No se pudo encontrar el producto con ID ${id}` });
    }

    //retorna todos los productos de su container
    getAll() {
        return (this.products);
    }

    // elimina un producto de su container
    async deleteById(id) {
        const index = this.products.findIndex(producto => producto.id === id)
        if (index != -1) {
            const removedItem = this.products.splice(index, 1)[0];
            let removedItems = []

            try {
                removedItems = JSON.parse(await fs.promises.readFile(this.deleted, "utf-8"))
                removedItems.push(removedItem);
                await fs.promises.writeFile(this.deleted, JSON.stringify(removedItems));
                await fs.promises.writeFile(this.fileProducts, JSON.stringify(this.products))
            } catch (err) {
                if (err.code === 'ENOENT') {
                    await fs.promises.writeFile(this.fileDeleted, JSON.stringify([removedItem]));
                } else {
                    console.log("Error eliminando por ID. Code: ", err)
                }
            }
            return { success: `Producto con ID: ${id} eliminado` }
        } else {
            return { error: `No se encontró el producto con ID ${id}` }
        }
    }

    //elimina un producto del container productos
    async deleteAll() {
        const removedItem = this.products;
        const removedItems = [];
        this.products = [];

        try {
            removedItems = JSON.parse(await fs.promises.readFile(this.deleted, "utf-8"))
            removedItems.push(removedItem);
            await fs.promises.writeFile(this.deleted, JSON.stringify([removedItems]));
            await fs.promises.writeFile(this.fileProducts, JSON.stringify(this.products))
        } catch (err) {
            if (err.code === 'ENOENT') {
                await fs.promises.writeFile(this.fileDeleted, JSON.stringify([removedItem]));
            } else {
                console.log("Error eliminando por ID. Code: ", err)
            }
        }
        return { success: `Producto con ID ${id} eliminado exitosamente` }
    }

    //retorna los productos del carrito
    getAllByCartId(index){
        return(this.products[index].cartList)
    }

    //guardar un producto en el carrito
    async saveByCartId(index, product){
        this.products[index].cartList.push(product);
        
        try{
            await fs.promises.writeFile(this.fileProducts, JSON.stringify(this.products));
            return product
        } catch(err){
            console.log("Error guardando producto en carrito: ", err)
        }
        
    }

    //eliminar un producto del carrito
    async deleteByCartId(indexCart, id, cartId){
        const index = this.products[indexCart].cartList.findIndex(producto=>producto.id == id);
        
        if (index != -1){
            this.products[indexCart].cartList.splice(index, 1);
            try{
                await fs.promises.writeFile(this.fileProducts, JSON.stringify(this.products))
                return {success: `Producto de ID ${id} eliminado del carrito de ID ${cartId}` }
            } catch(err){
                console.log("Error eliminando producto de carrito: ",err)
            }
        } else{
            return {error: `Producto con ID: ${id} no se encontró en el carrito de ID ${cartId}`}
        }
        try{
            await fs.promises.writeFile(this.fileProducts, JSON.stringify(this.products));
            return product
        } catch(err){
            console.log("Error al guardar un producto en el carrito: ", err)
        }
        
    }

    async emptyCartById(index, id){
        this.products[index].cartList = []

        try{
            await fs.promises.writeFile(this.fileProducts, JSON.stringify(this.products))
            
            return {success: `Carrito con ID: ${id} vaciado` }
        } catch(err){
            console.log("Error vaciando carrito, ", err)
        }
    }

    //carga de productos del archivo
    async init(items) {
        try {
            this.products = JSON.parse(await fs.promises.readFile(this.fileProducts, "utf-8"));
            this.productIds = JSON.parse(await fs.promises.readFile(this.fileProductsIds, "utf-8"));

            console.log(`${items} cargados`);
        } catch (err) {
            console.log("Error al cargar los productos. Code: ", err);
        }
    }
}

module.exports = ProductsContainer;