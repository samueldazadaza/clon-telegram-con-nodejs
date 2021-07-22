const express = require('express');
const bodyParser = require('body-parser')

const response = require('./network/response');

const router = express.Router();

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "nuestro valor personalizado", //cabecera personalizada
    });
    response.success(req, res, 'lista de mensajes1');
});

router.post('/message', function (req, res) {
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'error inesperado', 500, 'es solo una simulacion de los errores');
    } else {
        response.success(req, res, 'creado correctamente', 201);
    }
   // res.status(201).send( [{error: '', body:'Creado corrrectamente'}]);
});

app.use('/app', express.static('public'))

//hacer get en postman: http://localhost:3000/message?ordeBy=id&age=15

// app.use('/', function (req, res) {
//     res.send('Hola');
// });


app.listen(3000);
console.log('La aplicacion esta escuchando😆 en: http://localhost:3000');