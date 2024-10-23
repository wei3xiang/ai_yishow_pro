const DisableForm = ({ aiFlowerOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderId" value="${aiFlowerOrder.ai_order_id}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单日期</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderDate" value="${aiFlowerOrder.ai_order_date}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单总价</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiTotalPrice" value="${aiFlowerOrder.ai_total_price}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
