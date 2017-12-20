
'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http','$location',function($scope, $http,$location) {
  if(!sessionStorage.getItem('currSelected')){
    $scope.selectedCurr="INR"
  }
  else{
    $scope.selectedCurr=sessionStorage.getItem('currSelected')
  }
  $scope.notesObj=JSON.parse(sessionStorage.getItem('notesObj'));
  $scope.getData=function(){
    sessionStorage.setItem('currSelected',$scope.selectedCurr)
    var url="https://api.coinmarketcap.com/v1/ticker/?convert="+$scope.selectedCurr+"&limit=20";
    
  $http.get(url).then(function(response){
    $scope.tableData=response.data;
    //console.log($scope.tableData)
  },
  function(err){
    console.log(err);
    alert('Error occured while fetching data')
  }
);
  $scope.navigate=function(row){
    $location.path("/currency/"+row.id)
  }

}
$scope.getData();
}]);