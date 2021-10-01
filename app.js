const express =require ('express');
const bodyParser = require ('body-parser');
const app =  express();
const mongoose = require('mongoose');
const productsRoutes = require('./routes/product');
const path = require('path');
mongoose.connect('mongodb+srv://Test_MongoDB:Test2021@cluster0.hr8xz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());
app.use('/api/products', productsRoutes);



module.exports = app;
