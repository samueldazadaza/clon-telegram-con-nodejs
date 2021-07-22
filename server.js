const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "nuestro valor personalizado", //cabecera personalizada
    });
    res.send('Lista de mensajes');
});

router.post('/message', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    res.status(201).send( [{error: '', body:'Creado corrrectamente'}]);
});

//hacer get en postman: http://localhost:3000/message?ordeBy=id&age=15

// app.use('/', function (req, res) {
//     res.send('Hola');
// });

app.listen(3000);
console.log('La aplicacion esta escuchando😆 en: http://localhost:3000');