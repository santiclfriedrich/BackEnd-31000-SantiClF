const {
    Router
} = require('express');
const router = Router();
const productos = [{
        "title": "Escuadra",
        "price": 123.45,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        "id": 1
    },
    {
        "title": "Calculadora",
        "price": 234.56,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
        "id": 2
    },
    {
        "title": "Globo Terráqueo",
        "price": 345.67,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
        "id": 3
    }
]

//mostrar productos (metodo GET)
router.get('/', (req, res) => {
    
    try{
        res.render('listado', {productos});
    }catch(error){
        console.log('no se pudo obtener la lista de productos : ',error)
    }
})


//agregar producto desde form (metodo POST)
router.post('/', (req, res) => {
    
try {
    const {
        title,
        price,
        thumbnail
    } = req.body
    let ultimo = productos.length - 1;
    let id = productos[ultimo].id + 1;
    productos.push({
        id,
        title,
        price,
        thumbnail
    });
    res.redirect('/')
}catch(error){
    console.log('error en el post', error)
    res.sendStatus(500)
}
})


//consultar producto (metodo GET)
router.get('/:id', (req, res) => {
    
   try { 
    let encontrado = productos.find(producto => producto.id == req.params.id);
    encontrado ? res.json(encontrado) : res.json({error: 'No existe ese ID'})
    } catch(error) {
        console.log('ocurrio un error desde el metodo GET por id, ', error)
    }
    })


//actualizar producto a traves de postman (metodo PUT)
router.put('/:id', (req, res) => {
try{
    const id = Number(req.params.id);
    const index = productos.findIndex(producto => producto.id === id)
    const oldProd = productos[index]

  
    if (productos.find((prod) => prod.id === id)) {
      productos[index] = req.body;
      productos[index].id = id;

      res.json(
        `${JSON.stringify(oldProd)}   se actualizó a:  ${JSON.stringify(
          productos[index]
        )}`
      );
    } else {
      res.json(`El producto con el id: ${id} no existe`);
    }
}catch(error){
    console.log('ocurrió un error en el metodo put')
}
})


//eliminar producto (metodo DELETE)
router.post('/eliminar/:id', (req, res) =>{
    
    try{
    const index = productos.findIndex((producto) => {
        return producto.id == req.params.id;
    });
    if (index === -1) {
        res.status(404)
    } else {
        productos.splice(index, 1);
        res.redirect('/productos')
    }
    }catch(error){
        console.log('ocurrió un error en el metodo DELETE')
    }
})





module.exports = router;