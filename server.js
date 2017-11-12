const express = require ('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8001;
const knex = require('./db/knex');

const todoCtrl = require('./todoCtrl');

const app = express();

app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/todos', todoCtrl.getAll);
app.get('/todos/:id', todoCtrl.getOne);
app.post('/todos', todoCtrl.addOne);
app.put('/todos/:id', todoCtrl.changeOne);
app.delete('/todos/:id', todoCtrl.deleteOne);


app.listen(port, function () {
    console.log('listening on: ', port)
});
