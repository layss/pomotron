'use struct';
const fs = require('fs');

(function() {
  var salvar = function (json) {

    if (verificarArquivo()) {
      if (excluirArquivo()) {
        fs.appendFile('pomotron.json', JSON.stringify(json), "utf8", (err) => {
          if (err) {
            throw err;
          } else {
            alert("Salvo com sucesso");
          }
        });
      }
    } else {
      fs.appendFile('pomotron.json', JSON.stringify(json), "utf8", (err) => {
        if (err) {
          throw err;
        } else {
          alert("Salvo com sucesso");
        }
      });
    }
  }

  var verificarArquivo = function() {
    var result = false;
    fs.stat('pomotron.json', (err, stat) => {
      if (typeof stat == 'undefined') {
        result = false;
      } else {
        result = true;
      }
    });
    return result;
  }

  var excluir = function() {
    fs.unlink('pomotron.json', (err) => {
      if (!err) {
        return true;
      } else {
        return false;
      }
    });
  }

  var ler = function() {
    fs.readFile('pomotron.json', "utf8", (err, data) => {
      result = JSON.parse(data);
    });
  }
}());
