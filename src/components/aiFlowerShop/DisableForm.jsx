const DisableForm = ({ aiFlowerShop }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">物理主键</label>  
            <div class="layui-input-block">  
              <input type="text" name="uuid" value="${aiFlowerShop.uuid}" class="layui-input readonly">  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">店名</label>  
            <div class="layui-input-block">  
              <input type="text" name="name" value="${aiFlowerShop.name}" class="layui-input readonly">  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">地址</label>  
            <div class="layui-input-block">  
              <input type="text" name="address" value="${aiFlowerShop.address}" class="layui-input readonly">  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">电话</label>  
            <div class="layui-input-block">  
              <input type="text" name="phone" value="${aiFlowerShop.phone}" class="layui-input readonly">  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>   
      </div>  
    `;
};
export default DisableForm;
