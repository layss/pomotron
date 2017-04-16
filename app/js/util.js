/**
 * Created by DanielSilva on 15/04/17.
 */

(function () {
  this.convertToMinutoMillissegundos = function (minuto) {
      return minuto * 60000;
  };

  this.sumMinutesSeconds = function (minutes, seconds) {
      return minutes + convertToSecondMinutos(seconds);
  };

  var convertToSecondMinutos = function (segundos) {
      return segundos / 60;
  };
}())