// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();


// GET
// rota para acesar o método GET para professor
rotas.get('/', (req, res) => {
    res.send('Você acessou a rota professor.')
})


// POST
// rota para acesar o método POST para professor
rotas.post('/cadastro', (req, res) => {
    res.send('Você está na rota para o cadastro de um novo professor.');
    // implementação para cadastrar um novo estudante
});


// PUT
// rota para acesar o método PUT para professor
rotas.put('/atualizacao', (req, res) => {
    res.send('Você está na rota para a atualização dos dados de um professor.');
});


// DELETE
//Rota para acessar o método DELETE para professor
rotas.delete('/deletar/professor', (req, res) => {
    res.send("Você deletou o cadstro de um professor");
});

// exportar toda a configuração das rotas
module.exports = rotas;