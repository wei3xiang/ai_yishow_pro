const DisableForm = ({ aiFlowerStore }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店名</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiStoreName" value="${aiFlowerStore.ai_store_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店地址</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiStoreAddress" value="${aiFlowerStore.ai_store_address}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店电话</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiStorePhone" value="${aiFlowerStore.ai_store_phone}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
