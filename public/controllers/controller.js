var AggApp = angular.module('AggApp', []);
AggApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('/all').success(function(response) {
      $scope.all = response;
    });
    
    $http.get('/yasminlist').success(function(response) {
      $scope.yasminlist = response;
    });

    $http.get('/seanlist').success(function(response) {
      $scope.seanlist = response;
    });

    $http.get('/ericlist').success(function(response) {
      $scope.ericlist = response;
    });

    $http.get('/neellist').success(function(response) {
      $scope.neellist = response;
    });

    $http.get('/benlist').success(function(response) {
      $scope.benlist = response;
    });

    $http.get('/rugglist').success(function(response) {
      $scope.rugglist = response;
    });

    $http.get('/laurenlist').success(function(response) {
      $scope.laurenlist = response;
    });

    $http.get('/hmalist').success(function(response) {
      $scope.hmalist = response;
    });

    $http.get('/andrewlist').success(function(response) {
      $scope.andrewlist = response;
    });

    $http.get('/samlist').success(function(response) {
      $scope.samlist = response;
    });

    $http.get('/gemlist').success(function(response) {
      $scope.gemlist = response;
    });

    $http.get('/corbanlist').success(function(response) {
      $scope.corbanlist = response;
    });

    $http.get('/winstonlist').success(function(response) {
      $scope.winstonlist = response;
    });

    $http.get('/sarahlist').success(function(response) {
      $scope.sarahlist = response;
    });

    $http.get('/davidlist').success(function(response) {
      $scope.davidlist = response;
    });

    $http.get('/matthewlist').success(function(response) {
      $scope.matthewlist = response;
    });

    $http.get('/colinlist').success(function(response) {
      $scope.matthewlist = response;
    });

}]);
