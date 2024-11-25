// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();


// GET
// rota para acesar o método GET para estudante
rotas.get('/', (req, res) => {
    res.send('Você acessou a rota estudante.')
})


// POST
// rota para acesar o método POST para estudante
rotas.post('/cadastro', (req, res) => {
    res.send('Você está na rota para o cadastro de um novo estudante.');
    // implementação para cadastrar um novo estudante
});


// PUT
// rota para acesar o método PUT para estudante
rotas.put('/atualizacao', (req, res) => {
    res.send('Você está na rota para a atualização dos dados de um estudante.');
});


// DELETE
//Rota para acessar o método DELETE para estudante
rotas.delete('/deletar/estudante', (req, res) => {
    res.send("Você deletou o cadstro de um estudante");
});

// exportar toda a configuração das rotas
module.exports = rotas;