<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


 <!-- Model -->
        <div id="custom-selector" class="modal-demo">
          <button type="button" class="close" onclick="Custombox.close();">
              <span>&times;</span><span class="sr-only">Close</span>
          </button>
          <h4 class="custom-modal-title" ng-bind="title"></h4>
          <div class="custom-modal-text text-left">
               <form role="form">
               
                        <div class="form-group">
                            <label for="name">ROW SELECTOR</label>
                            <input ng-model="row_selector" type="text" class="form-control" id="searchcategory" placeholder="Enter site name">
                        </div> 
                        
                        <div class="form-group">
                            <label for="name">PRODUCT NAME SELECTOR</label>
                            <input ng-model="product_name_selector" type="text" class="form-control" id="categoryid" placeholder="Enter site url">
                        </div>   
                         <div class="form-group">
                            <label for="name">PRICE SELECTOR</label>
                            <input ng-model="price_selector" type="text" class="form-control" id="categoryid" placeholder="Enter site basepath">
                        </div>  
                         <div class="form-group">
                            <label for="name">IAMGE SELECTOR</label>
                            <input ng-model="image_selector" type="text" class="form-control" id="categoryid" placeholder="Enter site prefix img attribute">
                        </div>    
                        <div class="form-group">
                            <label for="name">DESCRIPTION SELECTOR</label>
                            <input ng-model="description_selector" type="text" class="form-control" id="categoryid" placeholder="Enter site prefix link">
                        </div>  
                  
                        <button ng-bind="btn" ng-click="selector_web_source()" type="button" class="btn btn-default waves-effect waves-light"  onclick="Custombox.close();" id="btnokay"></button>
                        <button type="button"  onclick="Custombox.close();" class="btn btn-danger waves-effect waves-light m-l-10">Close</button>
                    </form>
          </div>
      </div>
      