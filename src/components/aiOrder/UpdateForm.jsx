const UpdateForm = ({ aiOrder }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">客户UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCustomerUuid" value="${aiOrder.ai_customer_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单编号</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderNumber" value="${aiOrder.ai_order_number}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单总金额</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiTotalAmount" value="${aiOrder.ai_total_amount}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单日期</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderDate" value="${aiOrder.ai_order_date}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单状态（例如：已支付、未支付、已发货）</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderStatus" value="${aiOrder.ai_order_status}" class="layui-input">  
      </div>  
    </div>  
  </div>  
  <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
    <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
    <button class="layui-btn" id="modalOk">确定</button>
  </div>
  </div>`;
};
export default UpdateForm;
