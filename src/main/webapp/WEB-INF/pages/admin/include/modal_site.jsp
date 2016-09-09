<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

 <!-- Model -->
        <div id="custom-modal" class="modal-demo">
          <button type="button" class="close" onclick="Custombox.close();">
              <span>&times;</span><span class="sr-only">Close</span>
          </button>
          <h4 class="custom-modal-title" ng-bind="title_web"></h4>
          <div class="custom-modal-text text-left">
               <form role="form">
                        <div class="form-group">
                            <label for="name">Site Name</label>
                            <input ng-model="site_name" type="text" class="form-control" id="searchcategory" placeholder="Enter site name">
                        </div> 
                        
                        <div class="form-group">
                            <label for="name">Site URL</label>
                            <input ng-model="site_url" type="text" class="form-control" id="categoryid" placeholder="Enter site url">
                        </div>   
                         <div class="form-group">
                            <label for="name">Site Logo URL</label>
                            <input ng-model="path_image" type="text" class="form-control" id="categoryid" placeholder="Enter site basepath">
                        </div>  
                         <div class="form-group">
                            <label for="name">Prefix Attribute(image)</label>
                            <input ng-model="attribute_image" type="text" class="form-control" id="categoryid" placeholder="Enter site prefix img attribute">
                        </div>    
                        <div class="form-group">
                            <label for="name">Prefix Path(link)</label>
                            <input ng-model="prefix_link" type="text" class="form-control" id="categoryid" placeholder="Enter site prefix link">
                        </div>  
                  
                        <button ng-click="operaction()" ng-bind="btb_web" type="button" class="btn btn-default waves-effect waves-light"  onclick="Custombox.close();" id="btnokay">Okay</button>
                        <button type="button" onclick="Custombox.close();" class="btn btn-danger waves-effect waves-light m-l-10">Close</button>
                    </form>
          </div>
      </div>
      
      
      