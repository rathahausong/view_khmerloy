 var app = angular.module("Cateapp",['angularUtils.directives.dirPagination']);
 app.controller("controller_category",function($http,$scope){

	 $scope.findAll_category = function(){
 		$http({
 			url:'/categories',
 			method:'GET'
 		}).then(function(respone){
 			$scope.categories = respone.data.DATA;
 		},function(respone){
 			//alert("Failed to Load data from the Database");
 			swal("Failed", "Failed to Load Categories!", "error");
 		});
 	};//end findall category

 	$scope.findAllMainCate = function(){
 		$http({
 			url:'/maincategories',
 			method : 'GET'
 		}).then(function(response){
 			$scope.maincates = response.data.DATA;
 		},function(response){
 			//alert("Failed to Load Main Category");
 			swal("Failed", "Failed to Load Main Categories!", "error");
 		});
 	};//end findAllMainCate
 	
 	$scope.addCate = function(){
 		$http({
 			url: '/categories',
 			method: 'POST',
 			data: {
 				category_name : $scope.cate_name,
 				desciption : $scope.cate_desc,
 				main_category:{maincategory_id : $scope.main_cate}
 			}
 		}).then(function(response){
 			$scope.findAll_category();
 			$socpe.cate_name = " ";
 			$scope.cate_desc = " ";
 		}, function(response){
 			//alert("Failed to Add Category");
 			swal("Failed", "Failed to Add Category!", "error");
 		});
 	};//end add category
 	
 	$scope.getData = function(record){
 		$scope.cate_name_update = record.cate.category_name;
 		$scope.cate_desc_update = record.cate.description;
 		$scope.cate_id_update = record.cate.category_id;
 		$scope.findAllMainCate();
 		$scope.main_cate = record.cate.main_category.maincategory_id;
 		/*alert($scope.cate_id_update);*/
 		//$scope.selected = "selected";
 	};//end function getData per record
 	
 	$scope.UpdateCate = function(){	  
 		swal({   
			title: "Are you sure to update this record?",   
			text: "You will not be able to roll back!",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#E98106",   
			confirmButtonText: "Yes",   
			cancelButtonText: "No",   
			closeOnConfirm: false,   
			closeOnCancel: false }, 
		function(isConfirm){   
			if (isConfirm) {     
				$http({
					url : '/categories',
		 			method : 'PUT',
		 			data : {
		 				category_id : $scope.cate_id_update,
		 				category_name : $scope.cate_name_update,
		 				description : $scope.cate_desc_update,
		 				main_category:{
		 					maincategory_id : $scope.main_cate
		 				}
		 			}
				}).then(function(response){
					swal("Updated!", "Your record updated!", "success");
					$('.btn-danger').trigger('click');
					$scope.findAll_category();
					
			},function(response){
				swal("Failed", "Update Record Failed!", "error");
			});	  
			}else {     
				swal("Cancelled", "Your record has not been updated:)", "error");   
			} 
		});
 	};//end update category
 	
 	$scope.deleteCate = function(id){
		swal({   
			title: "Are you sure to delete this record?",   
			text: "You will not be able to recover this record!",   
			type: "warning",   
			showCancelButton: true,   
			confirmButtonColor: "#ED0909",   
			confirmButtonText: "Yes",   
			cancelButtonText: "No",   
			closeOnConfirm: false,   
			closeOnCancel: false }, 
		function(isConfirm){   
			if (isConfirm) {     
					$http({
						url:'/categories/'+id,
						method:'DELETE'
					}).then(function(response){
						swal("Deleted!", "Your record deleted!", "success");  
						$scope.findAll_category();
					},function(response){
						swal("Failed", "Delete Failed!", "error"); 
				}); 
			} else {     
				swal("Cancelled", "Your record has not been deleted.", "error");   
			} 
		});
 	};// end delete category

 	$scope.findAll_category();
 	
 	
 	$scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };//end sort function
   
   
    
 });// end controller


