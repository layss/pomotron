/**
 * Created by DanielSilva on 14/04/17.
 */

(function () {
  this.gravar = function (json) {
      salvar(json);
  };
  
  this.ler = function (callback) {
      selectJson(function (err,data) {
         return callback(err, data);
      });
  };
}())
