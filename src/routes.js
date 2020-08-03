import {Router} from 'express'
import {uuid} from 'uuidv4'

const routes = new Router(); 

const products = []

// Middleware to test into the GET route.
function middlewareTest(req, res, next){
    console.log("Middleware running!");
    next();
}

//Global middleware that will be exectuted in all of the routes.
function globalMiddlewareTest(req, res, next){
    console.log("Global Middleware running!");
    next();
}

routes.use(globalMiddlewareTest);

// List all products
routes.get('/products', middlewareTest, (req, res) => {

    return res.json(products);
})

// Add a product
routes.post('/products', (req, res) => {
    const {name, description, price, category} = req.body;
    const product = {
        id: uuid(),
        name,
        description,
        price,
        category
    }

    products.push(product);
    return res.json(product);
})

// Edit a product
routes.put('/products/:id', (req, res) => {
    const {id} = req.params;
    const {name, description, price, category} = req.body;

    const productIndex = products.findIndex(product => 
        product.id == id
    )

    if(productIndex == -1){
        return res.status(400).json({error: "Product not found"});
    }

    const product = {
        id,
        name,
        description,
        price,
        category
    }

    products[productIndex] = product;

    return res.json(product);
})

// Delete a product
routes.delete('/products/:id', (req, res) => {
    const {id} = req.params;
    const productIndex = products.findIndex(product =>
        product.id == id
    )
    
    if (productIndex == -1){
        return res.status(400).json({error: "Product Not Found"});
    }

    products.slice(productIndex, 1);

    return res.status(204).send();
})

export default routes;