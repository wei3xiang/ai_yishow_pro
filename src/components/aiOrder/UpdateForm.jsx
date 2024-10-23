const UpdateForm = ({ aiOrder }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">订单编号</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderNumber" value="${aiOrder.ai_order_number}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">客户ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCustomerId" value="${aiOrder.ai_customer_id}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单状态</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderStatus" value="${aiOrder.ai_order_status}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">下单时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderDate" value="${aiOrder.ai_order_date}" class="layui-input">  
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
