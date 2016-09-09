/**
 * 
 */

var app = angular.module('Myapp',['angularUtils.directives.dirPagination']);
app.controller('controller_temporary_item',function($http , $scope){
 	
/*var paging = {
		limit: 12,
		page: 1
};


function temporaryitem(){
	$http({
		  method:'GET',
		  url:'/temporaryitem',
		  params: paging
		}).then(function(respones){
			alert("K");
			$scope.items=respones.data.DATA;
			$scope.total=respones.data.PAGE.TOTAL_PAGES;
			paging.page = respones.data.PAGE.PAGE;
			$('#page-selection').bootpag({
			    total:$scope.total,
			    page:paging.page,
			    maxVisible: 5
			});
			alert("success");
		},function(respones){
			alert("Error");
	});
}
$('#page-selection').on("page", function(event, num){
  
    paging.page = num;
    man_fashion();

});
*/

	$scope.find_all_temporary_item = function(){

		$http({
 			url 	:'/temporaryitem',
 			method 	:'GET',
 		}).then(function(respone){
 			$scope.items = respone.data.DATA;
 			//alert($scope.items);
 			console.log($scope.items);
 		},function(respone){
 			alert("Error");
 		});
	}
	$scope.find_all_temporary_item();

	$scope.find_all_subcategory = function(){
		$http({
			url:'/subcategories',
			method:'GET'
		}).then(function(respone){
			$scope.subs = respone.data.DATA;
		},function(respone){
			alert("Error")
		});
	}
	$scope.find_all_subcategory();

	$scope.update_subcategory = function(){

 	$http({
 			url 	:'/temporary',
			method	:'PUT',
			data 	:{
				product_id 		: $scope.product_id,				
				subcategory     :{subcategory_id : $scope.subcategory_id}
			}

 	}).then(function(respone){
 		swal("Updated!", "Your record updated!", "success");
 	},function(respone){
 		alert("Error");										
 	});
 }

 $scope.getData = function(record){
 	$scope.product_id = record;
 }


	$scope.temporary_item_filter = function(respone){
		
 		$http({
 			url 	:'/temporaryitem?subcategoryname='+respone.subcategory_name,
 			method 	:'GET'
 		}).then(function(respone){

 			$scope.items = respone.data.DATA;
 		},function(respone){
 			alert("Error");
 		});
 	}


 	$scope.temporary_item = function(){
 		$http({
 			url 	:'/temporaryitem?productname='+'pro',
 			method 	:'GET',
 		}).then(function(respone){
 			alert("success");
 		},function(respone){
 			alert("Error");
 		});
 	}


 	$scope.delte_temporary_item = function(id){
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
 					url 	:'/temporaryitem/'+id,
 					method 	:'delete'
 				}).then(function(respone){
 					swal("Deleted!", "Your record deleted!", "success"); 
 					$scope.find_all_temporary_item();
 				},function(respone){
 					swal("Failed!", "Delete Failed!", "error");	
 				});	
			} else {     
				swal("Cancelled", "Your record has not been deleted", "error");   
			} 
		});
 				
 	}
 	
 	$scope.selected_items = function(event,record){
 		var check = event.target.checked;
 	}

 $scope.idToUpdate = [];
 $scope.updateAll = function  () {
 	var rows = $('table.table-actions-bar tbody tr');
 	$.each(rows, function  (index, item) {
 		var checked = $(item).find('input[type=checkbox]')[0].checked;
 		if (checked){
 			var id = $(item).find('td:first-child').text();
 			$scope.idToUpdate.push(id);
 		}
 	});
 	console.log($scope.idToUpdate);

 	$http({

 		url 	:'/temporary/status',
 		method  : 'POST',
 		data    :$scope.idToUpdate


 	}).then(function(respone){
 		alert("success");
 		$scope.find_all_temporary_item();
 	},function(respone){
 		alert("Error");
 	});

 }




 $scope.changeSubCate = function(record){
 	//alert(record.subcategory_id);
 	$scope.subcategory_id = record.subcategory_id;
 	alert($scope.subcategory_id);
 	$scope.subcate_desc_update = record.description;
 }

 });//end controller