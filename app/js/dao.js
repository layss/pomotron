/**
 * Created by DanielSilva on 14/04/17.
 */


(function () {
  this.gravar = function (json) {
      var array = new Array();

      if (!Array.isArray(json)){
          array[0] = json;
      } else {
          array = json;
      }

      localStorage.setItem("pomotron", JSON.stringify(array));
  };
  
  this.ler = function () {
      return JSON.parse(localStorage.getItem("pomotron"));
  };
}())
