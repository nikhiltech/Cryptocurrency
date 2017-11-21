'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/currency/:id', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http','$routeParams', function($scope, $http,$routeParams) {
  var rowData=$routeParams.id
  //console.log(rowData)
  var url="https://api.coinmarketcap.com/v1/ticker/"+rowData+"/";
  $http.get(url).then(function(response){
    $scope.currencyData=response.data[0];
    console.log($scope.currencyData)
  },
  function(err){
    console.log(err);
    alert('Error occured while fetching data')
  });
  $scope.saveNotes=function(){
    var rowID=rowData;
    var notes={}
    if(!sessionStorage.getItem('notesObj')){
      notes[rowID]= $scope.notes;
    }
    else{
      notes=JSON.parse(sessionStorage.getItem('notesObj'))
      notes[rowID]=$scope.notes;
    }
    sessionStorage.setItem('notesObj',JSON.stringify( notes)) 
    alert('Notes Saved')
    $scope.notes='';

    //sessionStorage.setItem(row.id,$scope.notes)
  }
}]);