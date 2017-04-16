'use struct';
var path = require("path")
const fs = require('fs');

(function() {
  this.salvar = function (json) {
    verificarArquivo(json);
  }

  this.selectJson = function (callback) {
      fs.readFile(path() + '/pomotron.json', "utf8", function (err, data) {
          return callback(err,data);
      });
  }

  var ler = function(json) {
    fs.readFile(path() + '/pomotron.json', "utf8", function(err, data) {
      if(!err){
        var dados = JSON.parse(data);
        dados[dados.length] = json;
        excluir();
        gravar(dados);
      } else {
        console.log(err);
      }
    });
  }

  var verificarArquivo = function(json) {
    fs.stat(path() + '/pomotron.json', function(err, resultado) {
      if (typeof resultado == 'undefined') {
        gravar(json);
      } else {
        ler(json);
      }
    });
  }

  var excluir = function() {
    fs.unlink(path() + '/pomotron.json', function(err) {
      if (err) {
        console.info(err);
      }
    });
  }

  var gravar = function (json) {
    var array = new Array();
    if (!Array.isArray(json)){
      array[0] = json;
    } else {
      array = json;
    }
    fs.appendFile(path() + '/pomotron.json', JSON.stringify(array), "utf8", function(err) {
        if (err) {
            throw err;
        }
    });
  };

  var path = function () {
      var path = process.env.TMP;
      if (typeof path == 'undefined'){
        path = "/tmp"
      }
      return path;
  }
}());
