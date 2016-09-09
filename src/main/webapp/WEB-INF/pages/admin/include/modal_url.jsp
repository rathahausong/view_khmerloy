<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

 <!-- Model -->
        <div id="custom-url" class="modal-demo">
          <button type="button" class="close" onclick="Custombox.close();">
              <span>&times;</span><span class="sr-only">Close</span>
          </button>
          <h4 class="custom-modal-title" ng-bind="title"></h4>
          <div class="custom-modal-text text-left">
               <form role="form">
                        <div class="form-group">
                            <label for="name">SITE NAME</label>
                                <select class="form-control"
                                      ng-model="web_selected" 
                                      ng-change="webSiteChange(web_selected)" 
                                      data-ng-options="web as web.website for web in webs">
                                      <option value="">---Select Site---</option>
                                </select>
                        </div> 
                        
                        <div class="form-group">
                            <label for="name">SUB CATEGORY</label>                    
                            
                            <select   class="form-control"
                                      ng-model="sub" 
                                      ng-change="subcategoryChange(sub)" 
                                      data-ng-options="sub as sub.subcategory_name for sub in subs">
                                      <option value="">---Select Subcategory---</option>
                            </select>

                        </div> 
                        
                        <div class="form-group">
                            <label for="name">URL</label>
                            <input ng-model="scrap_url" type="text" class="form-control" id="categoryid" placeholder="Enter site url">
                        </div>   
                         
                  
                        <button ng-click="operation()"  ng-bind="btn" type="button" class="btn btn-default waves-effect waves-light"  onclick="Custombox.close();" id="btnokay">Okay</button>
                        <button type="button"  onclick="Custombox.close();" class="btn btn-danger waves-effect waves-light m-l-10">Close</button>
                    </form>
          </div>
      </div>
      
      