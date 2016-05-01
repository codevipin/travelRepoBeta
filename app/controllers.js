myApp
  .controller('proCtrl',['$scope','$stateParams','property',function($scope,$stateParams,property){
    $scope.property = property.query();
    console.log($scope.property);
  }])

  .controller('prodCtrl',['$scope','$stateParams','property', function($scope,$stateParams,property){
  	$scope.proDetails = property.get({id:parseInt($stateParams.id,10)});
  	console.log($scope.proDetails);
  }])

