const app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'assets/home.html',
        })
        .when('/about', {
            templateUrl: 'assets/about.html',
        })
        .when('/contact', {
            templateUrl: 'assets/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});