/**
 * Created by DanielSilva on 15/04/17.
 */

(function () {

  var data = {
      labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
      datasets: [
          {
              label: "Meus dados Semanais",
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              data: [65, 59, 80, 81, 56, 55, 40],
          }
      ]
  };

  var ctx = document.getElementById("semanal");

  var semanal = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
      }
  });

    var dataMensal = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
            {
                label: "Meus dados Mensais",
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40, 10, 50, 12, 33, 4],
            }
        ]
    };

    var ctxMensal = document.getElementById("mensal");

    var mensal = new Chart(ctxMensal, {
        type: 'bar',
        data: dataMensal,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var dataAnual = {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
        datasets: [
            {
                label: "Meus dados Anuais",
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40],
            }
        ]
    };

    var ctxAnual = document.getElementById("anual");

    var anual = new Chart(ctxAnual, {
        type: 'bar',
        data: dataAnual,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

}())
