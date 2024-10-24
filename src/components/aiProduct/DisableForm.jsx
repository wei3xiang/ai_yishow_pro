const DisableForm = ({ aiProduct }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="productName" value="${aiProduct.product_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品价格</label>  
            <div class="layui-input-block">  
              <input type="text" name="productPrice" value="${aiProduct.product_price}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品描述</label>  
            <div class="layui-input-block">  
              <input type="text" name="productDescription" value="${aiProduct.product_description}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">库存数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="productStock" value="${aiProduct.product_stock}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">店铺ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="storeId" value="${aiProduct.store_id}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
