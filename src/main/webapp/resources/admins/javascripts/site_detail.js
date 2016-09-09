/**
 * 
 */

 var app = angular.module("Myapp",['angularUtils.directives.dirPagination']);
app.controller("controller_site_detail",function($http , $scope){
 		
 		$scope.findall_web_sources = function(){
 	
	 	$http({
	 		url:'/sitemanagerment',
	 		method:'GET'
	 	}).then(function(respone){
	 
	 		$scope.webs = respone.data.DATA;
	 		
	 	},function(respone){
	 		swal("Failed", "Failed to Load Site Detail!", "error");
	 	});
	 }// eng method site
	 $scope.findall_web_sources();


	 $scope.findall_subcategory = function(){
	 	$http({

	 		url:'/subcategories',
	 		method:'GET'

	 	}).then(function(respone){

	 		$scope.subs = respone.data.DATA;

	 	},function(respone){
	 		swal("Failed", "Failed to Load Subcategories!", "error");
	 	});
	 }// end method find all subcategory
	  $scope.findall_subcategory();


	  /// method operation add new url and update url
	  $scope.operation = function(){
	  	  if($scope.btn=="Save"){
	  	  		$scope.save_web_scrap();
	  	  }else{
	  	  		$scope.update_web_scrap();
	  	  }
	  }// end operation 

	  $scope.getData= function(record){
	  		
	  		if(record!='new'){
	  			$scope.btn 				= 	"UPDATE";
	  			$scope.title 			=	"UPDATE";
	  			$scope.id 				= 	record.scrap.scrap_id;
	  			$scope.scrap_url 		= 	record.scrap.url;

	  		}else{
	  			$scope.btn 				= 	"Save";
	  			$scope.title 			=	"NEW";
	  		}

	  		
	  		

	  }

	 
	  
	  // find all web input url to scrap
	  $scope.findAll_web_scrap = function(){
	  		
	  		$http({
	  			url:'/scrapmanagerment',
	  			method:'GET'
	  		}).then(function(respone){
	  			
	  			$scope.scraps = respone.data.DATA;
	  			console.log($scope.scraps);

	  		},function(respone){
	  			alert("error");	
	  		});
	  }
	  $scope.findAll_web_scrap();

	  $scope.save_web_scrap = function(){

	  		$http({

	  			url:'/scrapmanagerment',
	  			method:'POST',
	  			data:{

	  				web_source  	: {web_source_id :$scope.web_source_id },
	  				subcategory  	: {subcategory_id:$scope.subcategory_id},
	  				url 			: $scope.scrap_url

	  			}

	  		}).then(function(respone){
	  			swal("Save Success", "", "success");
	  			$scope.findAll_web_scrap();
	  		},function(respone){
	  			swal("Failed", "", "error");
	  		});
	  }

	  /// update web scrap url web category

	  $scope.update_web_scrap = function(){

	  		$http({
	  			url 	: '/scrapmanagerment',
	  			method	: 'PUT',
	  			data 	: {

	  				scrap_id		: $scope.id,
	  				web_source  	: {web_source_id :$scope.web_source_id },
	  				subcategory  	: {subcategory_id:$scope.subcategory_id},
	  				url 			: $scope.scrap_url

	  			}
	  		}).then(function(respone){
	  			swal("Update Success", "", "success");
	  			$scope.findAll_web_scrap();
	  		},function(respone){
	  			swal("Failed", "", "error");
	  		});
	  }


	  $scope.delete_web_scrap = function(id){
	  		swal({   title: "Are you sure to delete ?",   text: "",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel plx!",   closeOnConfirm: false,   closeOnCancel: false }, 
				function(isConfirm){   
					if (isConfirm) {
					  	swal("Deleted!", "Your file has been deleted.", "success");  
							
					  		$http({
					  			url 	: 	'/scrapmanagerment/'+id,
					  			method	: 	'DELETE'
					  		}).then(function(respone){
					  			$scope.findAll_web_scrap();
					  		},function(respone){

					  		});

					} else {
			     swal("Cancelled", "Your file is safe :)", "error");  
			 } });

	  }

	 
	  $scope.webSiteChange = function(record){
	  		$scope.web_source_id = record.web_source_id;
	  }
	  
	  $scope.subcategoryChange = function(record){
	  		alert(record);
	  		$scope.subcategory_id = record.subcategory_id ;
	  }


	  // allow scrap
	   $scope.allow_scrap = function(event,record){
	  	var x = event.target.checked;
	  	$scope.scrap_id = record.scrap.scrap_id;
	  	if (x){
			$scope.update_status('yes');
	  	}else{
	  		$scope.update_status('no');
	  	}
	  }

	  $scope.update_status = function(st){
	  		
	  		$http({
	  			url 	: '/status',
	  			method	: 'put',
	  			data 	: {
	  				status : st,
	  				scrap_id : 	$scope.scrap_id
	  			}
	  		}).then(function(respone){
	  			swal(" Success", "", "success");
	  			$scope.findAll_web_scrap();
	  		},function(respone){
	  			swal("Failed", "", "error");
	  		});
	  		
	  }

 });//end controller