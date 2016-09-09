/**
 * 
 */

var app = angular.module("Myapp", ['angularUtils.directives.dirPagination']);
app.controller("controller_web_source", function($http, $scope){

	 $scope.findall_web_sources = function(){
	 	$http({
	 		url:'/sitemanagerment',
	 		method:'GET'
	 	}).then(function(respone){
	 		$scope.webs = respone.data.DATA;
	 	},function(respone){
	 		swal("Failed", "Failed to Load Web Source!", "error");
	 	});
	 }// eng method site

	 $scope.findall_web_sources();

	  /// operation add web site and update 
	  $scope.operaction = function(){

	 /* 	var lo;
	  	if($scope.path_image!=null){
	  	 	lo = $scope.path_image;
	  	}

	  	if($scope.attribute_image!=null){
	  		lo = $scope.attribute_image;
	  	}

	  	if($scope.prefix_link){
	  		lo = $scope.prefix_link;
	  	}*/
	  	if($scope.title_web=='NEW'){
		 	$scope.save_web();
	 	}else{
	 		$scope.update_web();
	 	}
	 }// eng method site
	 
	 // save web_id website and  url
	 $scope.save_web = function(){
	 		$http({
		 		url:'/sitemanagerment',
		 		method:'POST',
		 		data:{
		 			website		: $scope.site_name,
		 			logo		: $scope.path_image,
		 			url 		: $scope.site_url
		 		}
		 	}).then(function(respone){
		 		$scope.webs = respone.data.DATA;
		 		$scope.findall_web_sources();
		 		$scope.clearField();
		 	},function(respone){
		 		swal("Failed", "Failed to Save Site!", "error");
		 	});
	 }

	 /// update web site url and logo
	 $scope.update_web = function(){
	 	$http({
			 		url:'/sitemanagerment',
			 		method:'PUT',
			 		data:{

			 			web_source_id		: $scope.id,
			 			website				: $scope.site_name,
		 				logo				: $scope.path_image,
		 				url 				: $scope.site_url,

			 			selector_row		: $scope.row_selector,
						selector_name		: $scope.product_name_selector,
						selector_price		: $scope.price_selector,
						selector_image		: $scope.image_selector,
						selector_description: $scope.description_selector

			 		}
			 	}).then(function(respone){
			 		swal("Update Success", "", "success");
			 		$scope.webs = respone.data.DATA;
			 		$scope.findall_web_sources();
			 		$scope.clearField();
			 	},function(respone){
			 		swal("Update  Fail", "", "error");
			 });

	 }
	 /// update web soure selector or save
	 $scope.selector_web_source = function(){
	 		$scope.btn="Update";
			 	$http({
			 		url:'/sitemanagerment',
			 		method:'PUT',
			 		data:{

			 			web_source_id		: $scope.id,
			 			website				: $scope.website,
			 			logo				: $scope.logo,
			 			url					: $scope.site_url,
			 			selector_row		: $scope.row_selector,
						selector_name		: $scope.product_name_selector,
						selector_price		: $scope.price_selector,
						selector_image		: $scope.image_selector,
						selector_description: $scope.description_selector

			 		}
			 	}).then(function(respone){
			 		swal("Update Success", "", "success");
			 		$scope.webs = respone.data.DATA;
			 		$scope.findall_web_sources();
			 		$scope.clearField();
			 	},function(respone){
			 		swal("Update  Fail", "", "error");
			 });
	 }// eng method site

	  // delete web soure
	 $scope.delete_web_source = function(id){
	 	swal({   title: "Are you sure to delete ?",   text: "",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel plx!",   closeOnConfirm: false,   closeOnCancel: false }, 
				function(isConfirm){   
					if (isConfirm) {
					  	swal("Deleted!", "Your file has been deleted.", "success");  
							
							$http({
							url:'/sitemanagerment/'+id,
								method:'delete'
							}).then(function(respone){
								$scope.findall_web_sources();
							},function(respone){
								
							});

					} else {
			     swal("Cancelled", "Your file is safe :)", "error");  
			 } });
	 }

	 $scope.getAllData = function(record){

	 	if(record.web.selector_row!=null){

	 		$scope.btn					=	"Update";
	 		$scope.title				=	"UPDATE";

	 		$scope.title_web	= 	"UPDATE";
	 		$scope.btb_web 		=	"Update";

	 	}else{

	 		$scope.btn					=	"Save";
	 		$scope.title				=	"NEW";

	 	}
	 	
	 
	 	$scope.id 					= 	record.web.web_source_id;
	 	$scope.website 				= 	record.web.website;
	 	$scope.logo 				= 	record.web.logo;
	 	$scope.site_name			=	record.web.website;
	 	$scope.path_image			= 	record.web.logo;
	 	$scope.site_url				= 	record.web.url;
	 	$scope.row_selector 		= 	record.web.selector_row;
		$scope.product_name_selector=	record.web.selector_name;
		$scope.price_selector 		= 	record.web.selector_price;
		$scope.image_selector 		= 	record.web.selector_image;
		$scope.description_selector = 	record.web.selector_description;

	 }

	 $scope.clearField = function(){
	 	$scope.website 				= 	"";
	 	$scope.logo 				= 	"";
	 	$scope.site_name			= 	"";
	 	$scope.path_image			= 	"";
	 	$scope.site_url				= 	"";
	 	$scope.row_selector 		= 	"";
		$scope.product_name_selector=	"";
		$scope.price_selector 		=	"";
		$scope.image_selector 		= 	"";
		$scope.description_selector = 	"";
	 }

	 $scope.new_site = function(){

	 	$scope.title_web	= 	"NEW";
	 	$scope.btb_web 		=	"Save";

	 }

 });// end controller 

