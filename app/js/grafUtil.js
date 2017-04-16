/**
 * Created by DanielSilva on 15/04/17.
 */

(function(){
    this.graficoMensal = function (data) {
        var mes = new Array(12);
        var millissegundos = [0,0,0,0,0,0,0,0,0,0,0,0];
        for (var i = 0; i < data.length; i++){
            var date = new Date(data[i].data);
            millissegundos[date.getMonth()] = millissegundos[date.getMonth()] + data[i].minutos;
        }

        for(var j = 0; j < millissegundos.length; j++){
            var tempo = new Date(millissegundos[j]);
            mes[j] = tempo.getMinutes();
        }

        return mes;

    };

    this.graficoSemanal = function (data) {
        var millissegundos = [0,0,0,0,0,0,0];
        var minutos = new Array(7);
        for (var i = 0; i < data.length; i++){
            var date = new Date(data[i].data);
            millissegundos[date.getDay()] = millissegundos[date.getDay()] + data[i].minutos;
        }

        for(var j = 0; j < millissegundos.length; j++){
            var tempo = new Date(millissegundos[j]);
            minutos[j] = tempo.getMinutes();
            console.log(tempo.getMinutes());
        }

        return minutos;
    };

    this.graficoAnual = function (data) {
        var millissegundos = [0,0,0,0,0,0,0];
        var minutos = new Array(7);
        for (var i = 0; i < data.length; i++){
            var date = new Date(data[i].data);
            if (date.getFullYear() == 2017){
                millissegundos[0] = millissegundos[0] + data[i].minutos;
            } else if(date.getFullYear() == 2018){
                millissegundos[1] = millissegundos[1] + data[i].minutos;
            } else if(date.getFullYear() == 2019){
                millissegundos[2] = millissegundos[2] + data[i].minutos;
            } else if(date.getFullYear() == 2020){
                millissegundos[3] = millissegundos[3] + data[i].minutos;
            } else if(date.getFullYear() == 2021){
                millissegundos[4] = millissegundos[4] + data[i].minutos;
            } else if(date.getFullYear() == 2022){
                millissegundos[5] = millissegundos[5] + data[i].minutos;
            } else if(date.getFullYear() == 2023){
                millissegundos[6] = millissegundos[6] + data[i].minutos;
            }

        }

        for(var j = 0; j < millissegundos.length; j++){
            var tempo = new Date(millissegundos[j]);
            minutos[j] = tempo.getMinutes();
        }

        return minutos;
    };
}());
