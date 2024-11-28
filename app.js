const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const jwt = require('jsonwebtoken'); // Importamos la librería
const fs = require('fs');

// Clave secreta para firmar los tokens
const SECRET_KEY = "tuClaveSecreta123";

// Middleware para manejar JSON y CORS (opcional para desarrollo local)
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Endpoint POST /login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validación de usuario y contraseña (sustituir por un sistema real)
    if (username === 'admin' && password === '1234') {
        const token = jwt.sign({ username }, SECRET_KEY); // Generar token
        res.json({ message: 'Login exitoso', token });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
});

// Middleware de autorización
app.use("/emercado-api", (req, res, next) => {
    try {
        const decoded = jwt.verify(req.headers["access-token"], SECRET_KEY);
        console.log(decoded);
        next();
    } catch (err) {
        res.status(401).json({ message: "Usuario no autorizado" });
    }
});

// Ruta principal
app.get('/emercado-api', (req, res) => {
    res.send('Backend de JSON para e-commerce funcionando');
});

// Ruta para obtener categorías
app.get('/emercado-api/cats/cat.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'cats', 'cat.json');    
    res.sendFile(filePath);
});

// Rutas para obtener productos según su categoría
app.get('/emercado-api/cats_products/101.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'cats_products', '101.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/cats_products/102.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'cats_products', '102.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/cats_products/103.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'cats_products', '103.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/cats_products/104.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'cats_products', '104.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/cats_products/105.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'cats_products', '105.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/cats_products/106.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'cats_products', '106.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/cats_products/107.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'cats_products', '107.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/cats_products/108.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'cats_products', '108.json');    
    res.sendFile(filePath);
});

//Rutas para obtener los productos según su id
app.get('/emercado-api/products/40281.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '40281.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/50741.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '50741.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/50742.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '50742.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/50743.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '50743.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/50744.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '50744.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/50921.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '50921.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/50922.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '50922.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/50923.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '50923.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/50924.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '50924.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/50925.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '50925.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/60801.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '60801.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/60802.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '60802.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/60803.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '60803.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products/60804.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products', '60804.json');    
    res.sendFile(filePath);
});


//Rutas para obtener los comentarios de los porductos
app.get('/emercado-api/products_comments/40281.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '40281.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/50741.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '50741.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/50742.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '50742.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/50743.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '50743.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/50744.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '50744.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/50921.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '50921.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/50922.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '50922.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/50923.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '50923.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/50924.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '50924.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/50925.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '50925.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/60801.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '60801.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/60802.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '60802.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/60803.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '60803.json');    
    res.sendFile(filePath);
});

app.get('/emercado-api/products_comments/60804.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'products_comments', '60804.json');    
    res.sendFile(filePath);
});

//Ruta para obtener mensaje sell
app.get('/emercado-api/sell/publish.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'sell', 'publish.json');    
    res.sendFile(filePath);
});

//Ruta user_cart (?)
app.get('/emercado-api/user_cart/25801.json', (req, res) => {
    const filePath = path.join(__dirname, 'json', 'sell', '25801.json');    
    res.sendFile(filePath);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

