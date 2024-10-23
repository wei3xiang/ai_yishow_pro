const DisableForm = ({ aiProduct }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiName" value="${aiProduct.ai_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品描述</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiDescription" value="${aiProduct.ai_description}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">价格</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiPrice" value="${aiProduct.ai_price}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">库存</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiQuantity" value="${aiProduct.ai_quantity}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">分类UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiCategoryUuid" value="${aiProduct.ai_category_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
