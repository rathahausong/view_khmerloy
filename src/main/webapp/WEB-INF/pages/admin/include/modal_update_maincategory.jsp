 <!-- Model -->
        <div id="updateMainCate_model" class="modal-demo">
          <button type="button" class="close" onclick="Custombox.close();">
              <span>&times;</span><span class="sr-only">Close</span>
          </button>
          <h4 class="custom-modal-title">Update Main Category</h4>
          <div class="custom-modal-text text-left">
               <form role="form">
                        <div class="form-group">
                            <label for="name">Main Category Name</label>
                            <input ng-model="MainCate_name_update" type="text" class="form-control" id="cate_name" placeholder="Enter site name">
                            <input type="hidden" value="{{MainCate_id_update}}">
                        </div> 
                        
                        <!-- <div class="form-group">
                            <label for="name">ID</label>
                            <input ng-model="MainCate_id_update" type="text" class="form-control" id="cate_desc" placeholder="Enter Description">
                        </div>  -->                       
                        
                        
                        <!-- <div class="form-group">
                            <label for="name">Main Category</label>
                            <select ng-change="changeCate(maincate)" ng-model="main_cate" class="form-control" 
                            	ng-options="maincate.maincategory_id as maincate.category_name for maincate in maincates">
							    <option value="">---Select Main Category---</option>
							    <option ng-repeat="maincate in maincates" ng-value="maincate.maincategory_id">{{maincate.category_name}}</option>
							</select>
                        </div>  --> 
                        <div class="form-group">
                            <label for="name">Description</label>
                            <input ng-model="MainCate_desc_update" type="text" class="form-control" id="cate_desc" placeholder="Enter Description">
                        </div>  
                        <button ng-click="UpdateMainCate()" type="button" class="btn btn-default waves-effect waves-light"  id="btnokay">Update</button>
                        <button type="button" onclick="Custombox.close();" class="btn btn-danger waves-effect waves-light m-l-10">Close</button>
                    </form>
          </div>
      </div>
      
      
      