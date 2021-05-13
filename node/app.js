const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const sqlSelect = 'SELECT name FROM people'
const sqlInsert = 'INSERT INTO people(name) values(?)'

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    let name = req.query.name;
    
    if(typeof name !== 'undefined' && name){
        create(name.trim().toUpperCase(), connection);
    }else{
        create('John Doe', connection);
    }

    let conteudo = '<h1>Full Cycle Rocks!!!</h1><ul>'
    connection.query(sqlSelect, function (err, result, fields) {
        if (err) {
            return res.send('<h1>Erro ao buscar dados</h1>');
        }
        
        result.forEach(element => {
            conteudo += '<li>' + element.name + '</li>';
        });
        conteudo +='</ul>';
        connection.end();
        res.send(conteudo)
    });
})

function create(name, connection){
        connection.query(sqlInsert,name, function (err, result) {
            if (err) throw err;
        })
}

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})