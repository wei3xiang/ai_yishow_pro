const DisableForm = ({ aiOrderItem }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderUuid" value="${aiOrderItem.aiOrderUuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductName" value="${aiOrderItem.aiProductName}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductId" value="${aiOrderItem.aiProductId}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiQuantity" value="${aiOrderItem.aiQuantity}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品单价</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUnitPrice" value="${aiOrderItem.aiUnitPrice}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
