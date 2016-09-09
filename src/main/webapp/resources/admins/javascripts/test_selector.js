/**
 * 
 */

var app = angular.module('Myapp',[]);
app.controller('controller_test_selector',function($http , $scope){
	 
	 $scope.test_selector = function(){
	 	alert("test");
	 	$http({
	 		url:'/test_selector',
			method:'POST',
			data:{
				url 					: $scope.test_url,
				selector_row 			: $scope.test_row,
				selector_name 			: $scope.test_name,
				selector_price 			: $scope.test_price,
				selector_image 			: $scope.test_image,
				selector_description 	: $scope.test_description
			}

	 	}).then(function(respone){
	 		$scope.scrap_products = respone.data;
	 		console.log($scope.scrap_product);
	 	},function(respone){
	 		swal("Failed", "Failed!", "error");
	 	});

	 }

 });//end controller 