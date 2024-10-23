const DisableForm = ({ aiProduct }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品编号</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductNumber" value="${aiProduct.ai_product_number}" class="layui-input" readonly>  
            </div>  
          </div>  
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
            <label class="layui-form-label">商品单价</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiPrice" value="${aiProduct.ai_price}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品库存</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiStock" value="${aiProduct.ai_stock}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品类别</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiCategory" value="${aiProduct.ai_category}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品图片</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiImageUrl" value="${aiProduct.ai_image_url}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店编号</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiShopNumber" value="${aiProduct.ai_shop_number}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
