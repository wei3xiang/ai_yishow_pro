const DisableForm = ({ aiStore }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">店铺ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="storeId" value="${aiStore.store_id}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">店铺名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="storeName" value="${aiStore.store_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">店铺地址</label>  
            <div class="layui-input-block">  
              <input type="text" name="storeAddress" value="${aiStore.store_address}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">店铺邮箱</label>  
            <div class="layui-input-block">  
              <input type="text" name="storeEmail" value="${aiStore.store_email}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">店铺电话</label>  
            <div class="layui-input-block">  
              <input type="text" name="storePhone" value="${aiStore.store_phone}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
