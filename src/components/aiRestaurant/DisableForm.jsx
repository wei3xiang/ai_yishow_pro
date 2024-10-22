const DisableForm = ({ aiRestaurant }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">商家名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiName" value="${aiRestaurant.aiName}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商家地址</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiAddress" value="${aiRestaurant.aiAddress}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商家电话</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiPhone" value="${aiRestaurant.aiPhone}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商家邮箱</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiEmail" value="${aiRestaurant.aiEmail}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
