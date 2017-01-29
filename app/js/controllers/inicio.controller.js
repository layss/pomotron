app.controller('inicio', function($scope, Arquivo) {
  $scope.titulo = "Olá Pagina Home";

  $scope.criar = function() {
    var json = {
      time: [{
        nome: "Daniel",
        idade: 27
      },{
        nome: "luffy",
        idade: 26
      }]
    };

    Arquivo.salvar(json);
  }

  $scope.ler = function() {
    $scope.dados = Arquivo.ler();    
  }

  $scope.excluir = function() {
    Arquivo.excluir();
  }
});
