const DisableForm = ({ aiOrderDetail }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderId" value="${aiOrderDetail.ai_order_id}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductId" value="${aiOrderDetail.ai_product_id}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductName" value="${aiOrderDetail.ai_product_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiQuantity" value="${aiOrderDetail.ai_quantity}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">单价</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiPrice" value="${aiOrderDetail.ai_price}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
