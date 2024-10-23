const DisableForm = ({ aiOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">客户ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiCustomerUuid" value="${aiOrder.ai_customer_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">下单日期</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderDate" value="${aiOrder.ai_order_date}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单金额</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiTotalAmount" value="${aiOrder.ai_total_amount}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
