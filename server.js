const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers/herlpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Bryan Siles'
    });
});

app.get('/data', (req, res) => {
    let salida = {
        nombre: 'Bryan Siles',
        edad: 21,
        url: req.url
    }
    res.send(salida);
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});