const DisableForm = ({ aiOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">客户uuid</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiCustomerUuid" value="${aiOrder.ai_customer_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">员工uuid</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiEmployeeUuid" value="${aiOrder.ai_employee_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单总价</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiTotalPrice" value="${aiOrder.ai_total_price}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单日期</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderDate" value="${aiOrder.ai_order_date}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">支付状态</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiPaymentStatus" value="${aiOrder.ai_payment_status}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
