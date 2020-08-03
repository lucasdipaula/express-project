# Node express project

This is a small project using node and express to demostrate how to use simple routes with GET, PUT, POST and DELETE concepts.

- A products vector is created and has this structure:

    ```
    const product = {
        id,
        name,
        description,
        price,
        category
    }
    ```

- To use the api
    - GET - localhost:3000/products
    - POST - localhost:3000/products
        -   JSON example to use as body
            ```
            {
                "name":"Smartphone",
                "description":"iphone X",
                "price":799,
                "category":"eletronics"
            }
            ```
    - PUT - localhost:3000/products/:id
        - JSON example to use as body
            ```
            {
                "name":"Smartphone",
                "description":"iphone 11",
                "price":999,
                "category":"eletronics"
            }
            ```
    - DELETE - localhost:3000/products/:id

## Structure
```
├── nodemon.json
├── package.json
├── README.md
├── src
    ├── app.js
    ├── routes.js
    └── server.js
```

## How to run

You'll need *node* and *npm* installed

- To install dependencies
```
npm install
```

- To run
```
npm run dev
```
## Tip

You can use [Postman](https://www.postman.com/) to test it.


