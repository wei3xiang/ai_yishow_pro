const UpdateForm = ({ aiOrders }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">客户ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCustomerUuid" value="${aiOrders.ai_customer_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">员工ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiEmployeeUuid" value="${aiOrders.ai_employee_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductUuid" value="${aiOrders.ai_product_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">下单时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderDate" value="${aiOrders.ai_order_date}" class="layui-input">  
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
