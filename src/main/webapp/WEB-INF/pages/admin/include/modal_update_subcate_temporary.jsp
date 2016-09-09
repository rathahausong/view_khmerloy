 <!-- Model -->
        <div id="update_model_subcate" class="modal-demo">
          <button type="button" class="close" onclick="Custombox.close();">
              <span>&times;</span><span class="sr-only">Close</span>
          </button>
          <h4 class="custom-modal-title">Update Sub Category</h4>
          <div class="custom-modal-text text-left">
               <form role="form">
                        <div class="form-group">
                            <label for="name">Sub Category Name</label>
                            <input ng-model="subcate_name_update" type="text" class="form-control" id="cate_name" placeholder="Search">
                            <input type="hidden" value="{{subcate_id_update}}">
                        </div> 
                        
                        <div class="form-group">
                            <label for="name">SubCategory</label>
                            <select ng-change="changeSubCate(sub)" ng-model="sub" class="form-control" 
                            	ng-options="sub as sub.subcategory_name for sub in subs">
							    <option value="">---Select Category---</option>
							</select>
                        </div>  
                        <div class="form-group">
                            <label for="name">Description</label>
                            <input ng-model="subcate_desc_update" type="text" class="form-control" id="cate_desc" placeholder="Enter Description">
                        </div>  
                        <button ng-click="update_subcategory()" type="button" class="btn btn-default waves-effect waves-light"  id="btnokay">Update</button>
                        <button type="button" onclick="Custombox.close();" class="btn btn-danger waves-effect waves-light m-l-10">Close</button>
                    </form>
          </div>
      </div>
      
      
      