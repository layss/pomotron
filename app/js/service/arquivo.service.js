const fs = require('fs');

app.service('Arquivo', function() {

  var result = "";

  this.salvar = function(json) {
    createReadArq(json);
  }

  this.ler = function() {
    lerArquivo();
    return result;
  }

  this.excluir = function() {
    excluirArquivo();
  }

  var createReadArq = function (json) {

    if (verificarArquivo()) {
      if (excluirArquivo()) {
        fs.appendFile('pomotron.json', JSON.stringify(json), "utf8", (err) => {
          if (err) {
            throw err;
          } else {
            alert("Salva com sucesso");
          }
        });
      }
    } else {
      fs.appendFile('pomotron.json', JSON.stringify(json), "utf8", (err) => {
        if (err) {
          throw err;
        } else {
          alert("Salva com sucesso");
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

  var excluirArquivo = function() {
    fs.unlink('pomotron.json', (err) => {
      if (!err) {
        return true;
      } else {
        return false;
      }
    });
  }

  var lerArquivo = function() {
    fs.readFile('pomotron.json', "utf8", (err, data) => {
      result = JSON.parse(data);
    });
  }
});
