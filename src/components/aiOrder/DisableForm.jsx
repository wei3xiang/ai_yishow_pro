const DisableForm = ({ aiOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">关联用户ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUserUuid" value="${aiOrder.ai_user_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单编号</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderNumber" value="${aiOrder.ai_order_number}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单状态(0-已取消,1-待支付,2-已支付,3-已完成)</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderStatus" value="${aiOrder.ai_order_status}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单总价</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderTotal" value="${aiOrder.ai_order_total}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
