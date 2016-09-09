$(document).ready(function() { 
     $("html").niceScroll({styler:"fb",cursorcolor:"#428BCA"});
     /*$(window).scroll(function(){
       if($(this).scrollTop()>200){
       $("#scrolltop").fadeIn(100);
    
     } else{$("#scrolltop").fadeOut(100);}
     }); 
     
     $("scrolltop img").click(function(){
    	 $("html, body").animate({scrollTop:0},800);
     });*/
     
     $('#media').carousel({
    	    pause: true,
    	  });	  
     $('#media').carousel('cycle');
     
});