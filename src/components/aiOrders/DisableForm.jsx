const DisableForm = ({ aiOrders }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单号</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderNumber" value="${aiOrders.ai_order_number}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">用户ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUserId" value="${aiOrders.ai_user_id}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单总金额</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiTotalAmount" value="${aiOrders.ai_total_amount}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单日期</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderDate" value="${aiOrders.ai_order_date}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
