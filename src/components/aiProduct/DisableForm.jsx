const DisableForm = ({ aiProduct }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">类别UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiCategoryUuid" value="${aiProduct.ai_category_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">店铺UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiStoreUuid" value="${aiProduct.ai_store_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductName" value="${aiProduct.ai_product_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品价格</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductPrice" value="${aiProduct.ai_product_price}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品库存</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductStock" value="${aiProduct.ai_product_stock}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
