 var app = angular.module('myApp',[])
     
    
     
     app.controller('myController', function($scope){
         $scope.stringValue = 'Any String'
         $scope.numberValue = 23;
         $scope.flag = true
     })