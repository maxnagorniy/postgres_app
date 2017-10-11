var express = require ('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var knex = require('./db/knex');

var app = express();

app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/todos', function (req, res) {
   /*knex.raw('select * from todos where id = 1')
       .then(function (todos) {
           res.send(todos.rows)
   })*/
   knex.select().from('todos').where('id', 1)
       .then(function (todos) {
           res.send(todos);
   })
});

app.post('/todos', function (req, res) {
    /*knex.raw('insert into todos(title, user_id) values(?, ?)', ['go play some sports', '1'])
        .then(function () {
            knex.select().from('todos')
                .then(function (todos) {
                    res.send(todos);
            })
    })*/
    knex('todos').insert({
        title: "go play football",
        user_id: 1
    })
        .then(function () {
            knex.select().from('todos')
                .then(function (todos) {
                    res.send(todos);
            })
        })
});


app.listen(port, function () {
    console.log('listening on: ', port)
});
