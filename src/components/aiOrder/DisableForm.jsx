const DisableForm = ({ aiOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderId" value="${aiOrder.ai_order_id}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">用户UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUserUuid" value="${aiOrder.ai_user_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductName" value="${aiOrder.ai_product_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品类型</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductType" value="${aiOrder.ai_product_type}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">单位</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUnit" value="${aiOrder.ai_unit}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiNumber" value="${aiOrder.ai_number}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单日期</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderDate" value="${aiOrder.ai_order_date}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
