'use struct';
const fs = require('fs');

(function() {
  this.salvar = function (json) {

    verificarArquivo(json);
  }

  var ler = function(json) {
    fs.readFile('pomotron.json', "utf8", (err, data) => {
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
    fs.stat('pomotron.json', (err, resultado) => {
      if (typeof resultado == 'undefined') {
        gravar(json);
      } else {
        ler(json);
      }
    });
  }

  var excluir = function() {
    fs.unlink('pomotron.json', (err) => {
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
    fs.appendFile('pomotron.json', JSON.stringify(array), "utf8", (err) => {
        if (err) {
            throw err;
        }
    });
  };
}());
