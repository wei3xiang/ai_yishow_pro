const DisableForm = ({ aiOrderProduct }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单 uuid</label>  
            <div class="layui-input-block">  
              <input type="text" name="orderUuid" value="${aiOrderProduct.order_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品 uuid</label>  
            <div class="layui-input-block">  
              <input type="text" name="productUuid" value="${aiOrderProduct.product_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="productQuantity" value="${aiOrderProduct.product_quantity}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
