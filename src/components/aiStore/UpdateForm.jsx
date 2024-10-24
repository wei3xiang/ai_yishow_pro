const UpdateForm = ({ aiStore }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">店铺ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="storeId" value="${aiStore.store_id}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">店铺名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="storeName" value="${aiStore.store_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">店铺地址</label>  
      <div class="layui-input-block">  
        <input type="text" name="storeAddress" value="${aiStore.store_address}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">店铺邮箱</label>  
      <div class="layui-input-block">  
        <input type="text" name="storeEmail" value="${aiStore.store_email}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">店铺电话</label>  
      <div class="layui-input-block">  
        <input type="text" name="storePhone" value="${aiStore.store_phone}" class="layui-input">  
      </div>  
    </div>  
  </div>  
  <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
    <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
    <button class="layui-btn" id="modalOk">确定</button>
  </div>
  </div>`;
};
export default UpdateForm;
