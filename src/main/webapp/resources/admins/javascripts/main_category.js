 var app = angular.module("MainCateapp",['angularUtils.directives.dirPagination']);
 app.controller("controller_Maincategory",function($http,$scope){

	 $scope.findAll_Maincategory = function(){
 		$http({
 			url:'/maincategories',
 			method:'GET'
 		}).then(function(respone){
 			$scope.meain_category = respone.data.DATA;
 		},function(respone){
 			//alert("Failed to Load data from the Database");
 			swal("Failed!", "Failed to Load Main Category!", "error");  
 		});
 	};//end findall category

 	/*$scope.findAllMainCate = function(){
 		$http({
 			url:'/maincategories',
 			method : 'GET'
 		}).then(function(response){
 			$scope.maincates = response.data.DATA;
 		},function(response){
 			alert("Error");
 		});
 	};*///end findAllMainCate
 	
 	$scope.addMainCate = function(){
 		$http({
 			url: '/maincategories',
 			method: 'POST',
 			data: {
 				category_name:$scope.MainCategory_name,
				description: $scope.MainCategory_desc
 			}
 		}).then(function(response){
 			$scope.findAll_Maincategory();
 			/*$socpe.cate_name = " ";
 			$scope.cate_desc = " ";*/
 			$scope.clear_data();
 			
 		}, function(response){
 			//alert("Add failed!");
 			swal("Failed!", "Failed to add Main Category!", "error");  
 		});
 	};//end add category
 	
 	$scope.getData = function(record){
 		$scope.MainCate_name_update = record.main_cate.category_name;
 		$scope.MainCate_desc_update = record.main_cate.description;
 		$scope.MainCate_id_update = record.main_cate.maincategory_id;
 		/*$scope.findAllMainCate();*/
 		/*$scope.main_cate = record.cate.main_category.maincategory_id;*/
 		/*alert($scope.cate_id_update);*/
 		//$scope.selected = "selected";
 	};//end function getData per record
 	
 	$scope.UpdateMainCate = function(){	  
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
					url : '/maincategories',
		 			method : 'PUT',
		 			data : {
		 				maincategory_id : $scope.MainCate_id_update,
		 				category_name : $scope.MainCate_name_update,
		 				description : $scope.MainCate_desc_update,
		 				/*main_category:{
		 					maincategory_id : $scope.main_cate
		 				}*/
		 			}
				}).then(function(response){
					swal("Updated!", "Your record updated!", "success");
					$('.btn-danger').trigger('click');
					$scope.findAll_Maincategory();
					
			},function(response){

			});	  
			}else {     
				swal("Cancelled", "Your record has not been updated:)", "error");   
			} 
		});
 	};//end update category
 	
 	$scope.deleteMainCate = function(id){
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
						url:'/maincategories/'+id,
						method:'DELETE'
					}).then(function(response){
						swal("Deleted!", "Your record deleted!", "success");  
						$scope.findAll_Maincategory();
					},function(response){

				}); 
			} else {     
				swal("Cancelled", "Your record has not been deleted:)", "error");   
			} 
		});
 	};// end delete category
 		
 	$scope.clear_data = function(){
		$scope.MainCategory_name="";
		$scope.MainCategory_desc="";	
}

 	$scope.findAll_Maincategory();
 	
 	
 	$scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };//end sort function
   
   
    
 })// end controller
 .filter('highlight', function($sce) {
          return function(text, phrase) {
            if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
              '<span class="highlighted">$1</span>')
            
            return $sce.trustAsHtml(text)
          }
        })


