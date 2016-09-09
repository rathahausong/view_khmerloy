var application=angular.module('app',['angularUtils.directives.dirPagination']);
application.controller('ctrl',function($scope,$http, $window,$rootScope){

var base_url="http://localhost:2222/api";	

/*main category*/
function allcategory(){
	$http({
		url:base_url+'/listcategory',
		method:'GET'
	}).then(function(respones){
		$scope.list_cat=respones.data.DATA;
	},function(error){
		
	});
}

/*new lates scrap fashions*/
function new_fashion(){
	$http({
	  method:'GET',
	  url:base_url+'/product',
	  params:{
		     maincategory:"fashion",
		     limit:10
		  }
	}).then(function(respones){
		$scope.fashion=respones.data.DATA;
		
	},function(respones){
		
	});
}

/*new lates scrap Jewelry and Watch*/
function new_jewelry(){
	$http({
	  method:'GET',
	  url:base_url+'/product',
	  params:{
		     maincategory:"Jewelry and Watch",
		     limit:10
		  }
	}).then(function(respones){
		$scope.jewelry=respones.data.DATA;
	},function(respones){
		
	});
}



/*new lates scrap phone*/
function new_phone(){
	$http({
		  method:'GET',
		  url:base_url+'/product',
		  params:{
			  maincategory:"mobile and tablets",
			  limit:10
		  }
		}).then(function(respones){
			$scope.phone=respones.data.DATA;
		},function(respones){
			
		});
}

/*new lates scrap computers*/
function new_computer(){
	$http({
		  method:'GET',
		  url:base_url+'/product',
		  params:{
			  maincategory:"computers",
			  limit:10
		  }
		}).then(function(respones){
			$scope.computer=respones.data.DATA;
		},function(respones){
			
		});
}

/*new lates scrap home and living*/
function new_home(){
	$http({
		  method:'GET',
		  url:base_url+'/product',
		  params:{
			  maincategory:"home and living",
			  limit:10
		  }
		}).then(function(respones){
			$scope.home=respones.data.DATA;
		},function(respones){
			
		});
}

/*new lates scrap web source*/
function web_source(){
	$http({
		  method:'GET',
		  url:base_url+'/web',
		}).then(function(respones){
			$scope.web=respones.data.DATA;
		},function(respones){
			
		});
}

/*sub categories items*/
var paging={
		limit:24,
		page:1
};

$rootScope.subcategory=function(url,main=0,key=0){
	$scope.u=url; $scope.m=main; $scope.k=key;
	if(main==0 && key==0 ){
		$http({
			  method:'GET',
			  url:base_url+'/product?subcategoryname='+url,
			  params:paging
			}).then(function(respones){
				$scope.subitems = shuffleArray(respones.data.DATA);
				$scope.total=respones.data.PAGE.TOTAL_PAGES;
				paging.page = respones.data.PAGE.PAGE;
				$('#page-selection').bootpag({
				    total:$scope.total,
				    page:paging.page,
				    maxVisible: 5
				    
				});
				$scope.status=url;
				
			},function(respones){
				
		});
		
		
	}else if(main==0){
		$http({
			  method:'GET',
			  url:base_url+'/product?productname='+key,
			  params:paging
			}).then(function(respones){
				$scope.subitems = shuffleArray(respones.data.DATA);
				$scope.total=respones.data.PAGE.TOTAL_PAGES;
				paging.page = respones.data.PAGE.PAGE;
				$('#page-selection').bootpag({
				    total:$scope.total,
				    page:paging.page,
				    maxVisible: 5
				    
				});
				
				$scope.status="Result for : "+key;
				
			},function(respones){
				
		});
		
	}else if(key==0){
	
		$http({
			  method:'GET',
			  url:base_url+'/product?maincategory='+main,
			  params:paging
			}).then(function(respones){
				$scope.subitems = shuffleArray(respones.data.DATA);
				$scope.total=respones.data.PAGE.TOTAL_PAGES;
				paging.page = respones.data.PAGE.PAGE;
				$scope.status="RESULT FOR : "+main;
				$('#page-selection').bootpag({
				    total:$scope.total,
				    page:paging.page,
				    maxVisible: 5
				    
				});
			
			},function(respones){
				
		});
	}else{
	
		$http({
			  method:'GET',
			  url:base_url+'/product?maincategory='+main+"&productname="+key,
			  params:paging
			}).then(function(respones){
				$scope.subitems = shuffleArray(respones.data.DATA);
				$scope.total=respones.data.PAGE.TOTAL_PAGES;
				paging.page = respones.data.PAGE.PAGE;
				$('#page-selection').bootpag({
				    total:$scope.total,
				    page:paging.page,
				    maxVisible: 5
				    
				});
				$scope.status="RESULT FOR : " + main +" AND "+key;
			},function(respones){
				
		});
	}
	
}
$('#page-selection').on("page", function(event, num){
    paging.page = num;
    $rootScope.subcategory($scope.u,$scope.m,$scope.k=0);

});


/*save users*/
$scope.saveUser=function(){
	$http({
		url:base_url+'/user',
		method:'POST',
		data:{
			"user_name":$scope.user_name,
			"email":$scope.email,
			"password":$scope.password,
			"role":"user"
		}
	}).then(function(respones){
		message("User has been save","Login","success");
		clear();
	},function(errors){
		message("User has been faild","Login Faild","error");
	});
	
}

/*update users*/
$scope.updateUser=function(){
	$http({
		url:base_url+'/user',
		method:'PUT',
		data:{
			"user_name":$scope.user_name,
			"email":$scope.email,
			"password":$scope.password
		}
	}).then(function(respones){
		message("User has been update","Update","success");
		clear();
		getUserprofile(USERID);
	},function(errors){
		message("User has been faild","Update Faild","error");
	});
	
}

/*get user*/
function getUserprofile(userid){
	
	 $http({
		 url:base_url+'/user/'+userid,
		 method:'GET'
	 }).then(function(respones){
	   $scope.userprofile=respones.data.DATA;
	   $scope.user_name=$scope.userprofile[0].user_name;
	   $scope.email=$scope.userprofile[0].email;
	   $scope.password=$scope.userprofile[0].password;
	   $scope.c_password=$scope.userprofile[0].password;
	 },function(){
		
	 });
	
}

/*savelist*/
$scope.addsavelist=function(elments){
	$http({
		url:base_url+'/savelist',
		method:'POST',
		data:{
			"product":{
				     "product_id":elments.item.product_id
				    },
		    "user":{
		    	    "user_id":USERID
		    }		    
		}
	}).then(function(response){
		message("The product has been saved!","Saved","success");
	},function(erorr){
	
	});
	
}


/*get item from savelist*/
function getsavelist(userid){
	 $http({
		 url:base_url+'/savelist/'+userid,
		 method:'GET'
	 }).then(function(respones){
	$scope.saveditem=respones.data.DATA;
	 },function(){
		
	 });
}

$scope.deleteSaved=function(listid){
	
	$http({
		url:base_url+'/savelist/'+listid.item.list_id,
		method:'DELETE',
		headers:{
			"Access-Control-Allow-Origin":"*"
		}
	}).then(function(respones){
		message("The product has been deleted!","Deleted","success");
		getsavelist(USERID);
	},function(error){});
	
}

/*message success*/
function message(title,status,type){
  swal(title,status,type)
}
/*clear input text*/
function clear(){
   $scope.user_name="";
   $scope.email="";
   $scope.password="";
   $scope.c_password="";
   $('#register').trigger('click');
}

/***************/
function shuffleArray(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
/****************/

new_fashion();	
new_jewelry();
new_phone();
new_computer();
allcategory();	
new_home();
web_source();

if(USERID==null){
	return ;
}else{
	getsavelist(USERID);
	getUserprofile(USERID);
}

});

/*sub string*/
application.filter('myFilter', function() {
	  return function(input) {
		  var text_lenght= input;
			var text=" ";
			for(var i=0 ;i<text_lenght.length;i++){
				if(i<20){
				text+=text_lenght.charAt(i);
				}else{
					text+="....";
					break;
				}
			}
	    return text;

	  }
});

/*custom directive*/
application.directive('abc', [function() {
	return {
        restrict: 'E', 
        scope: {
        	title: '@'
        },
        link: function(scope,element, attr) {
        	scope.$root.subcategory(attr.cname,attr.title,attr.value);
        
        }
    };
  
}]);


