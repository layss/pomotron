app.config(function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/inicio.html',
    controller: "inicio"
  })
  .otherwise({
    redirectTo: '/'
  });
})
