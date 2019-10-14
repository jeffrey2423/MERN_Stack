const express = require('express');
const cors = require('cors');
const app = express();

//SETTINGS
app.set('port', process.env.PORT ||  4000);


//MIDDLEWARES
//se le dice al servidor que debe enterder json
//enviar en este caso o entender
app.use(cors());
app.use(express.json());

//ROUTES
//especificamos las urls que la aplicacion de react 
//podra acceder
app.get('/api/users', (req, res) => res.send('Users routes'));
app.get('/api/notes', (req, res) => res.send('Notes routes'));

module.exports = app;