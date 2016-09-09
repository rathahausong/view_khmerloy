<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

 <!-- Model -->
        <div id="add_subcate_model" class="modal-demo">
          <button type="button" class="close" onclick="Custombox.close();">
              <span>&times;</span><span class="sr-only">Close</span>
          </button>
          <h4 class="custom-modal-title">Add New Sub Category</h4>
          <div class="custom-modal-text text-left">
               <form role="form">
                        <div class="form-group">
                            <label for="name">Sub Category Name</label>
                            <input type="text" class="form-control" id="subcate_name" placeholder="Enter subcategory name" ng-model="subcate_name">
                        </div> 
                        
                        <div class="form-group">
                            <label for="name">Category</label>
                            <select ng-change="changeCate(maincate)" ng-model="category" class="form-control" 
                            	ng-options="cate.category_id as cate.category_name for cate in categories">
							    <option value="">---Select Category---</option>
							</select>
                        </div> 
                        <div class="form-group">
                            <label for="name">Description</label>
                            <input type="text" class="form-control" id="cate_desc" placeholder="Enter Description" ng-model="subcate_desc">
                        </div>  
                        <button ng-click="addSubCate()" type="button" class="btn btn-default waves-effect waves-light"  id="btnokay">Add</button>
                        <button type="button"  onclick="Custombox.close();" class="btn btn-danger waves-effect waves-light m-l-10">Close</button>
                    </form>
          </div>
      </div>
      
      
      