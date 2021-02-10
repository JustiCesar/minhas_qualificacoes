/*
var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express 1000' });
});

module.exports = router;

*/
var express = require('express');
var router = express.Router();
const Cliente = require("../models/cliente")

/* GET home page. */
router.get('/', function(req, res, next) {

  var cliente = new Cliente(req.query.nome, req.query.cpf)
  var cpfValidado = cliente.validarCPF()
  res.render('index', { cpfValidado: cpfValidado,  cpf: req.query.cpf,  nome: req.query.nome});
  
});

module.exports = router;

